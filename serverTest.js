const express =  require ('express')

const app = express()

app.use(express.urlencoded({extended:true}))


let users = [
 
  {id: 1, nombre:'Pepe', genero:'m' },
  {id: 2, nombre:'Yair', genero: 'm'},
  {id: 3, nombre:'Laura', genero: 'f'},
  {id: 4, nombre:'Luciana', genero: 'f'}
  
  ]

app.get('/',(req,res) => {
    let {genero} = req.query;
    if (genero){
      console.log("Existe genero"
      )
    }

    else{ console.log("No existe genero")}
    res.send(users)
})

app.get('/:userid/:name',(req,res) => {
  
  let userid = req.params.userid
  let name = req.params.name
  let names = users.find (e => e.nombre == name)
  let usuario = users.find( e => e.id == userid)

  res.send(console.log(`Hola ${names.nombre}`))
})






const sv = app.listen(8080,()=>{

  console.log("Listen on port 8080")
})

sv.on('error', error => console.log(error)) 