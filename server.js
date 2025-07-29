import http from 'http';
const PORT = 8000;

// creating a server in Node js
const server = http.createServer((req, res) =>{
    res.write("Hello World, the first server I have created in Node js.");
    res.end();
})

server.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}.`)
})