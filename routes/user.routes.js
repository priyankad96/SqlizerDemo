const {Router} = require('express')
var router = new Router()
const {post,get,put,deleteUser}=require('../controller/user.controller');
//const {user}=require('../schema/user.schema');

router.post('/',(req,res)=>{
    console.log("body is" , req.body)
    post(req.body,(err,result)=>{
        if(err){
            res.json(err)
            res.statusCode = 404;
            console.log(err)
        }else{
            res.json(result)
            res.statusCode = 200;
            console.log("result is" ,result)
        }
    })
});

router.get('/',(req,res)=>{

    get((err,result)=>{
        if(err){
            res.json(err)
            res.statusCode = 404;
            console.log(err)
        }else{
            res.json(result)
            res.statusCode = 200;
            console.log("result is" ,result)
        }
    })
});


router.put('/:id',(req,res)=>{
    console.log(req.params.id)
    const uid=req.params.id;
    console.log("body is" , req.body)
    put(req.body,req.params.id,(err,result)=>{
        if(err){
            res.json(err)
            res.statusCode = 404;
            console.log(err)
        }else{
            res.json(result)
            res.statusCode = 200;
            console.log("result is" ,result)
        }
    })
});

router.delete('/:id',(req,res)=>{
    console.log("body is" , req.body)
    deleteUser(req.params.id,(err,result)=>{
        if(err){
            res.json(err)
            res.statusCode = 404;
            console.log(err)
        }else{
            res.json(result)
            res.statusCode = 200;
            console.log("result is" ,result)
        }
    })
});

module.exports=router;
