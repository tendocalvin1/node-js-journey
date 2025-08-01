import path from 'path';
import url from 'url';
const filePath = './dir1/dir2/test.txt';


// basename() - This will return the last portion of the path
console.log(path.basename(filePath));

// dirname() -
console.log(path.dirname(filePath));

// extension name()- 
console.log(path.extname(filePath));

// parse()
console.log(path.parse(filePath));

const __filename = url.fileURLToPath(import.meta.url);  // this gives us the actual file path
const __dirname = path.dirname(__filename);

console.log(__filename, __dirname);

// join 
const filePath2 = path.join(__dirname, 'dir1','dir2','test.txt');
console.log(filePath2);

// resolve
const filePath3 = path.resolve(__dirname, 'dir1','dir2','test.txt');
console.log(filePath3);



