main_controller=require('./../controller/main_controller')
module.exports=(app)=>{
    app.get('/',(req,res)=>{
        main_controller.index(req,res)
    })
    app.post('/',(req,res)=>{
        main_controller.list(req,res)
    }),
    app.post('/delete',(req,res)=>{
        main_controller.delete(req,res)
    }),
    app.post('/update',(req,res)=>{
        main_controller.update(req,res)
    })
}