fs=require('fs');
var dir = './../model'
var nameList=[]
module.exports=(()=>{
    return{
         //this.nameList: [],

        index: (req,res)=>{
            var name = req.body.name
            

            //read through the directory and search for file
            fs.readFile(process.cwd()+'\\text.txt','utf8',()=>{

            })
            //if file is found, read in and write to array and then push the new value
            nameList.push(name)
            //if not found, create and write name
            res.render('index',{name: nameList})
        // },
        // info: (req,res)=>{
        //     res.render('info',req.body)
        }
    }
})()