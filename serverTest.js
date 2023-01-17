const express =  require ('express')

const app = express()


app.get('/',(req,res) => {

    res.send('Ruta main')
})






const sv = app.listen(8080,()=>{

  console.log("Listen on port 8080")
})

sv.on('error', error => console.log(error)) 