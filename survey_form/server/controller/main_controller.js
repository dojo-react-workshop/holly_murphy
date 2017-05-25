
    const SESSION={}

module.exports=((req,res)=>{
    return{
        index: (req,res)=>{
            res.render('index')
        },
        info: (req,res)=>{
            SESSION.surveyInfo = req.body;
            res.redirect('/result')

            //res.render('info',req.body)
        },
        result: (req,res)=>{
            //res.render('info',SESSION.surveyInfo)

            //res.json(req.body) //this woudl return the info in the body
            res.json(SESSION.surveyInfo)// when you want to push the work to the client
        }
    }
})()