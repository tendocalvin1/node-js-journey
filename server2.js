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

// JSON middleware
const jsonMiddleware = (req, res, next) =>{
    res.setHeader('Content-Type', 'application/json');
    next();
}

// Route handler for GET /api/users
const getUserHandler = (req, res) =>{
    res.write(JSON.stringify(users));
    res.end();
}

// Route handler for GET /api/users/:id
const getUserByIdHandler = (req, res) =>{
    const id = req.url.split('/')[3];
    const user = users.find((user) => user.id === parseInt(id));
    if(user){
            
        res.write(JSON.stringify(user));
        res.end();
        }else{
       
        res.statusCode = 404;
        res.write(JSON.stringify('User not found'));
        res.end();
        }
}

// Route Handler for POST /api/users
const createUserHandler = (req, res) => {
    let body = '';
    // listen for data
    req.on('data', (chunk) =>{
        body += chunk.toString();
    });

    req.on('end', () =>{
        const newUser = JSON.parse(body); // Here, we're turning JSON into a JavaScript object
        users.push(newUser);
        res.statusCode = 201;
        res.write(JSON.stringify(newUser)); // Here, we're turning a JavaScript object into JSON 
        res.end();
    });
}

// Not found Handler
const NotFoundHandler = (req, res) =>{
    res.statusCode = 404;
    res.write(JSON.stringify('User not found'));
    res.end();
}


const server = createServer((req, res) =>{
    logger(req, res, () =>{
        jsonMiddleware(req, res, () =>{
            if(req.url ==='/api/users' && req.method === 'GET'){
                getUserHandler(req, res);
            }else if(req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET'){
                getUserByIdHandler(req, res);
            }else if(req.url ==='/api/users' && req.method === 'POST'){
                createUserHandler(req, res);
            }else{
                NotFoundHandler(req, res);
            }
        })
    })
    
})

server.listen(PORT, () =>{
    console.log(`Server is running on ${PORT}`)
})