fs=require('fs');
var dir = './../model'
var nameList=[]
module.exports=(()=>{
    return{
         //this.nameList: [],

        index: (req,res)=>{
           // var name = req.body.name
            //if file is found, read in and write to array and then push the new value
            //nameList.push(name)
            //if not found, create and write name
           res.render('index',{name: nameList})
           //res.json(nameList)
        // },
        // info: (req,res)=>{
        //     res.render('info',req.body)
    },
        list:(req,res)=>{
            var name = req.body.name
            nameList.push(name)
            res.json({name: nameList})
        }
    ,
    delete: (req,res)=>{
        let obj = req.body
        let index = obj.index
        nameList.splice(index,1)
        res.json({name:nameList})
    },
    update:(req,res)=>{
        let name=req.body.name//this is not the correct value
        let index=req.body.index
        nameList[index]=name
        res.json({name:nameList})
        console.log(`updatednamelist: ${nameList[index]}`)
    }

    }
})()