
//Instance server in express//
const express =  require ('express')

const app = express()

app.use(express.urlencoded({extended:true}))


const ProductManager = require("./productManager")
const manager = new ProductManager("product.json")

app.get("/products", async (req, res) => {
    let { limit } = req.query;
    let products = await manager.getProducts();
    res.send(products.slice(0, limit));
  });
  
  
  app.get("/products", async (req, res) => {
    res.send(await manager.getProducts());
  });
  
  
  app.get("/products/:id", async (req, res) => {
    let id = req.params.id;
    let productId = await manager.getProdctById(id);
    if (!productId) {
      res.send("404 - ID not found");
    } else {
      res.send(productId);
    }
  });


// Server listen on port//
const sv = app.listen(8080,()=>{

    console.log("Listen on port 8080")
  })
  
  sv.on('error', error => console.log(error)) 