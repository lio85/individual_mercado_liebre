let express=require('express');
let app=express();
let path=require('path');

app.use(express.static(path.resolve(__dirname,'public')));

app.listen(3000,()=> console.log('El servidor 3000 está corriendo'));

app.get('/',function(req,res){  
    res.sendFile(path.join(__dirname,'./views/home.html'));
})

app.get('/register',function(req,res){  
    res.sendFile(path.join(__dirname,'./views/register.html'));
})

app.get('/login',function(req,res){  
    res.sendFile(path.join(__dirname,'./views/login.html'));
})





