
const fs = require("fs");



class ProductManager{

    products; 

                 constructor(file){

                    this.products = file 

                 }


                 async getProducts() {

                 let products = JSON.parse(await fs.promises.readFile(this.products,"utf-8"))
                 
                      return products;
                }

                 async getId() { 
                 let data  = await this.getProducts()
                 return data.length + 1;

                }

                async addProduct(newProduct){ 
                 

                  const data = await this.getProducts() 
                  const repeatCode = data.some(e => e.code == newProduct.code)
                  repeatCode == true ? console.log("El codigo esta repetido") : data.push({...newProduct,id:await this.getId()})
                   await fs.promises.writeFile(this.products,JSON.stringify(data))  

                }


                async getProductsById(id){
                   let data = await this.getProducts()
                   let productFind = data.find( e => e.id == id ) 
                   return productFind === undefined ?"Not found": productFind
                    
                }

                async updateProducts(id , product){
                  let data = await this.getProducts()
                  let i = data.findIndex(e => e.id === id)
                  product.id = id
                  data.splice(i,1,product)
                  await fs.promises.writeFile(this.products, JSON.stringify(data))

               }

                async deleteProduct(id){
                       
                  let data = await this.getProducts()
                  let i = data.findIndex(e => e.id === id)
                  data.splice(i,1)
                  await fs.promises.writeFile(this.products, JSON.stringify(data))


                }





}


module.exports = ProductManager;