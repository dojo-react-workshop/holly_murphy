var fs = require('fs')

//rename the file to cap letters
//fs.renameSynch('./node.txt', './NODE.txt')

//read in file and change message to uppercase
// var txt = fs.readFileSync('./node.txt', 'utf8').toUpperCase();
// console.log(txt)
// console.log('other stuff...')




function fileUp(){
    return new Promise((resolve,reject)=>{
        fs.readFile('node.txt','utf8', (err, data) => {
            if (err) reject(err);
            resolve(data);
        })
    })
}

// fileUp().then((x)=>{
//     console.log(x.toUpperCase());
// })

//this will allow us to run these asyncronously
fs.readFile('node.txt', 'utf8',(err,data) =>{
    console.log(data.toUpperCase())
}
)

console.log('Do completely unrelated work!');