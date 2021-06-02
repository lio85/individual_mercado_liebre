let express=require('express');
let app=express();
let path=require('path');

app.listen(3001,()=> console.log('Servidor 3001 corriendo'));

app.get('/',function(req,res){  
    res.sendFile(path.join(__dirname,'./views/home.html'));
})

app.get('/register',function(req,res){  
    res.sendFile(path.join(__dirname,'./views/register.html'));
})

app.use(express.static(path.resolve(__dirname,'public')));



