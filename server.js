import http from 'http';
import fs from 'fs/promises';
import url from 'url';
import path from 'path';
const PORT = process.env.PORT;

// Get current path
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__filename, __dirname)
// creating a server in Node js
const server = http.createServer(async(req, res) =>{
    try{
        // Check if GET request
        if(req.method === 'GET'){
            let filepath;
            if(req.url === '/'){
               filepath = path.join(__dirname,'public', 'index.html') 
            }else if(req.url === '/about'){
                filepath = path.join(__dirname,'public', 'about.html')
            }else{
               throw new Error('404 Not Found')
            }

            const data = await fs.readFile(filepath);
            res.setHeader('Content-Type', 'text/html');
            res.write(data);
            res.end();
        }else{
            throw new Error('Method not allowed');
        }
    }catch(error){
        res.writeHead(500, {'Content-type': 'text/plain'});
        res.end('Server Error')
    }
    // Error 500 is a server error
    // console.log(req.url);
    // console.log(req.method);
    // res.setHeader('Content-type', 'text/html')
    //res.writeHead(200 , {'content-type': 'text/html'});
    // res.write("<h2>Hello World, the first server I have created in Node js.</h2>");
    //res.end("<h2>Hello World, the first server I have created in Node js.</h2>");
})

server.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}.`)
})