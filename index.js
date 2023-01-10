class ProductManager{

      products; 

                   constructor(){
 
                      this.products = []

                   }


                  getProducts() {


                   return this.products

                  }

                  getId() { 
                   
                   return this.products.length + 1;

                  }

                  addProduct( title , description, price, thumbnail, code , stock){ 
                   
                     const repeatCode = this.products.some(e => e.code == code)
                 
                   let newProduct = {

                      id : this.getId(),
                      title,
                      description,
                      price,
                      thumbnail,
                      code,
                      stock,

               }

               
               
                     repeatCode == true ? console.log("El codigo esta repetido") : this.products.push(newProduct)
                      

                  }


                  getProductsById(id){

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