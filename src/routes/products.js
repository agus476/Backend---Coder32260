const { Router } = require("express");

const proudctsRouter = Router();
const ProductManager = require("../productManager");
const manager = new ProductManager("../product.json");

let productAdd = {
    title: "Test Product",
    descripction: "Test Description",
    price: 3100,
    thumbnail: "No image available",
    code: 1123,
    stock: 5,
    status: true,
  };

  proudctsRouter.get("/", async (req, res) => {
    let { limit } = req.query;
    let products = await manager.getProducts();
    res.send(products.slice(0, limit));
  });
  
proudctsRouter.get ("/:pid", async(req, res)=> {
 let id = req.params.pid;
 let productId = await manager.getProductsById(id);
!productId ?res.status(404).send("Product no found") : res.send(productId)

});

proudctsRouter.post("/", async(req,res)=> { 
 
   await manager.addProduct(productAdd)
   res.send("Succesfully added")
})

proudctsRouter.put("/:pid", async(req,res) => {
    let id = parseInt(req.params.pid);
    let update = req.body;
    await manager.updateProduct(id, update);
    res.send("updated product");


})

proudctsRouter.delete("/:pid", async (req, res) => {
    let id = parseInt(req.params.pid);
    await manager.deleteProduct(id);
    res.send("Deleted Product")
  });

  module.exports = proudctsRouter;