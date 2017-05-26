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
        
        console.log(`namelist: ${nameList}`)
        let obj = req.body
    
        let index = obj.index
        console.log(`ind ${index}`)
        nameList.splice(index,1)
        console.log(`namelist: ${nameList}`)
        res.json({name:nameList})

     

    }

    }
})()