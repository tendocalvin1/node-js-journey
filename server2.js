import {createServer} from 'http';
const PORT = process.env.PORT;

const users = [
    {id:1 , name: 'Kibuule Aldrine'},
    {id:2 , name: 'Tendo Calvin'},
    {id:3 , name: 'Trent Alexander Arnold'},
    {id:4 , name: 'Matheus Cunha'},
]

const server = createServer((req, res) =>{
    if(req.url === '/api/users' && req.method === 'GET'){
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(users));
        res.end();
    }else{
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify('Route not found'));
        res.end();
    }
})

server.listen(PORT, () =>{
    console.log(`Server is running on ${PORT}`)
})