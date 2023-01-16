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
                  const repeatCode = data.some(e => e.code == code)
                  repeatCode == true ? console.log("El codigo esta repetido") : data.push(newProduct)
                   await fs.promises.writeFile(this.products,JSON.stringify(data))  

                }


                async getProductsById(id){

                   let productFind = this.products.find( e => e.id == id ) 
                   return productFind === undefined ?"Not found": productFind
                    
                }





}


const productManager = new ProductManager()
productManager.addProduct("Motorola G20", "Celular gama media", 35000, "imagen", "MG20", 5);
productManager.addProduct("Samsung Galaxy A20", "Celular gama media", 32000, "imagen", "SA20", 3);
productManager.addProduct("Motorola G50", "Celular gama media alta", 12000, "imagen", "SA20", 2);
console.log(productManager.getProducts())
productManager.addProduct("Auriculares Iphone", "Auriculares", 2000, "imagen", "AP5", 5);
productManager.addProduct("Cargador generico", "Cargadores", 2000, "imagen", "CG15", 5);
console.log(productManager.getProducts())
console.log(productManager.getProductsById(3))
console.log(productManager.getProductsById(4))