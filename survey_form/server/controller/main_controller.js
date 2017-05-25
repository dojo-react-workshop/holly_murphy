module.exports=((req,res)=>{
    return{
        index: (req,res)=>{
            res.render('index')
        },
        info: (req,res)=>{
            res.render('info',req.body)
        }
    }
})()