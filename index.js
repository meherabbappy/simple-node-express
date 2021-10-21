var express = require('express')
var cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())

const port = 5000;

const users =[
    {id:1,name:"bappy",phn:"0188888888", email:"my@gmail.com"},
    {id:2,name:"sappi",phn:"0188444444", email:"my22@gmail.com"},
    {id:3,name:"kappi",phn:"0188882222", email:"my33@gmail.com"},
    {id:4,name:"rabbi",phn:"0188866666", email:"my55@gmail.com"},
]

app.get('/',(req,res)=>{
    res.send("Hello Daffodil Here kmn aco aci");
})
app.get('/users/mango',(req,res)=>{
    res.send("Hello Mango People");
})
//app method
app.post('/users',(req,res) =>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    console.log("Hitting the post",req.body);

    // res.send(JSON.stringify(newUser))
    res.json(newUser);
})

//dynamic api
app.get('/users/:id',(req,res)=>{
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})

app.get('/users',(req,res)=>{
    const search = (req.query.search);
    //use query parameter
    if(search){
        const resultSearch = users.filter(user =>user.name.toLocaleLowerCase().includes(search));
        res.send(resultSearch)
    }
    else{
        res.send(users)
    }
   
});


app.listen(port,()=>{
    console.log("Tumi Ai khan ai Cholbe",port)
})