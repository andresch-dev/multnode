//requireds
const fs = require('fs');

//const fs = require('express');
//const fs = require('./fs');


let base = 2;
let data = '';
for (let i = 1; i < 10; i++) {
    data += `${base} * ${i} = ${base * i}\n`;
}

//const data = new Uint8Array(Buffer.from('Hello Node.js'));
fs.writeFile('tabla.txt', data, (err) => {
    if (err) throw err;
    console.log('Creado');
});