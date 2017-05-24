var fs=require('fs')

// module.exports=(dir, ext, cb)=>{
//      fs.readdir(dir,'utf8',cb)
// }

module.exports=(dir,ext,(err,list)=>{
    readdir(dirname,'utf8',(err,list)=>{
        if(err){
            return cb(err);
        }
        list=list.filter((filename)=>{
            return path.extname(filename) === '.'+ext
        })

        cb(null,list);
    })
})