// Looking at FS modules
// import fs from 'fs';


// // readFile () - The callback version [method 1]
// fs.readFile('./test.txt', 'utf-8',(err, data) =>{
//     if(err) throw err;
//     console.log(data);
// });


// // readFileSync() - Synchronous version
// const data = fs.readFileSync('./test.txt','utf-8');
// console.log(data); 


import fs from 'fs/promises';

// readFile()  - Promise .then()
// fs.readFile('./test.txt', 'utf8') // this code snippet returns a Promise
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));


// readFile()  async/await   [For this Fs module, we Must include try catch to handle any errors]
const readFile = async () =>{
    try{
    const data = await fs.readFile('./test.txt','utf-8');
    console.log(data);
    }catch(error){
    console.log(error);
    }
} 



// writeFile() // here, there is no need for encoding that is the term utf8, not necessary in this module 
const writeFile = async () =>{
    try{
        await fs.writeFile('./test.txt', 'Hello, I am writing to this file');
        console.log('File wriiten to ....')
    }catch(error){
        console.log(error);
    }
}

// appendFile()
const appendFile = async () =>{
    try{
        await fs.appendFile('./test.txt','\n This is appended text');
        console.log('File appended to ...')
    }catch(error){
        console.log(error);
    }
}



writeFile();
appendFile();
readFile();
