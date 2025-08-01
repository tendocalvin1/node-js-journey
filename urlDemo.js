import url from 'url';

const urlString = 'https://www.google.com/search?q=hello+world';

// URL Object
const urlObj = new URL(urlString);
console.log(urlObj);

// format() - Takes the object and turns it back into a string
console.log(url.format(urlObj));

// import.meta.url - this gives you the file url
console.log(import.meta.url);

// fileURLToPath()
console.log(url.fileURLToPath(import.meta.url));


const params = new URLSearchParams(urlObj.search);
console.log(params);

