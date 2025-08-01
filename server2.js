import {createServer} from 'http';
const PORT = process.env.PORT;

const users = [
    {id:1 , name: 'Kibuule Aldrine'},
    {id:2 , name: 'Tendo Calvin'},
    {id:3 , name: 'Trent Alexander Arnold'},
    {id:4 , name: 'Matheus Cunha'},
]

// logger middleware
// middleware normally takes in request, response and next
const logger = (req, res, next) =>{
    console.log(`${req.method} ${req.url}`);
    next();
}


const server = createServer((req, res) =>{
    if(req.url === '/api/users' && req.method === 'GET'){
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(users));
        res.end();
    }else if(req.url.match(/\/api\/users\/([0-9]+)/)&& req.method ==='GET'){
        const id = req.url.split('/')[3];
        const user = users.find((user) => user.id === parseInt(id));
        res.setHeader('Content-Type', 'application/json');
        if(user){
        
        res.write(JSON.stringify(user));
        res.end();
        }else{
       
        res.statusCode = 404;
        res.write(JSON.stringify('User not found'));
        res.end();
        }
        
    }else{
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 404;
        res.write(JSON.stringify('Route not found'));
        res.end();
    }
})

server.listen(PORT, () =>{
    console.log(`Server is running on ${PORT}`)
})