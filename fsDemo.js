// Looking at FS modules
import fs from 'fs';


// readFile () - The callback version [method 1]
fs.readFile('./test.txt', 'utf-8',(err, data) =>{
    if(err) throw err;
    console.log(data);
});


// readFileSync() - Synchronous version
const data = fs.readFileSync('./test.txt','utf-8');
console.log(data); 