import http from 'http';
const PORT = process.env.PORT;

// creating a server in Node js
const server = http.createServer((req, res) =>{
    if(req.url === '/'){
        res.writeHead(200, {'Content-type': 'text/html'});
        res.end('<h2>Welcome to the HomePage</h2>')
    }else if(req.url === '/about'){
        res.writeHead(200, {'Content-type': 'text/html'});
        res.end('<h2>About Page</h2>')
    }else{
        res.writeHead(404, {'Content-type': 'text/html'});
        res.end('<h2>404 Page Not Found</h2>')
    }
    // console.log(req.url);
    // console.log(req.method);
    // res.setHeader('Content-type', 'text/html')
    res.writeHead(200 , {'content-type': 'text/html'});
    // res.write("<h2>Hello World, the first server I have created in Node js.</h2>");
    res.end("<h2>Hello World, the first server I have created in Node js.</h2>");
})

server.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}.`)
})