const express =  require ('express')

const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())

let users = []

const getNewId = () => {
 return users.length +1; 
}

app.post('/user', (req, res) => {

  let user = req.body
  user.id = getNewId()
  console.log(user)
  if(!user.name){
     res.status(400).send({status : "error" , error : "Incomplete name value"})
  }
  users.push(user)
  res.send(user)
}
)

app.put('/user/:id', (req,res) =>{

  let id = req.params.id;
  let user = req.body;
 users [users.findIndex( e => e.id == id) ]= user;
  
  res.send("ok")

})


app.delete('/user/:id', (req,res) =>{

  let id = req.params.id;
  let user = req.body;
 users [users.findIndex( e => e.id == id) ]= user;
  
  res.send("ok")

})

app.get('/', (req, res) => { 

res.send("Para probar endpoint de user para mandar peticion por postman ")

})

app.get('/user', (req, res) => {

res.send(users)

}


)





const sv = app.listen(8080,()=>{

  console.log("Listen on port 8080")
})

sv.on('error', error => console.log(error)) 