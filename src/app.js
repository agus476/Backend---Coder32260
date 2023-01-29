
//Instance server in express//
const express =  require ('express')

const app = express()

const proudctsRouter = require("./routes/products");
const cartsRouter = require("./routes/carts");

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/api/products", proudctsRouter);
app.use("/api/carts", cartsRouter);






// Server listen on port//
const sv = app.listen(8080,()=>{

    console.log("Listen on port 8080")
  })
  
  sv.on('error', error => console.log(error)) 