
    const SESSION={}

module.exports=((req,res)=>{
    return{
        index: (req,res)=>{
            console.log('inhere')
            res.render('index')
        },
        info: (req,res)=>{
            if(req.body.name==''){
                res.status(400);
                res.json(false)
            }
            SESSION.surveyInfo = req.body;
            res.redirect('/results')

            //res.render('info',req.body)
        },
        results: (req,res)=>{
            //res.render('info',SESSION.surveyInfo)
            //console.log(SESSION.surveyInfo)
            //res.json(req.body) //this woudl return the info in the body
            res.json(SESSION.surveyInfo)// when you want to push the work to the client
        }
    }
})()