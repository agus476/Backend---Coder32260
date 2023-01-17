

const ProductManager = require("./ProductManager")
const manager = new ProductManager("product.json")

const main = async() => {

    let produc1 = {"title":"Motorola G20","descripction":"Celular gama media","price":35000,"thumbnail":"Imagen","code":"MG20","stock":10}

    let produc2 = {"title":"Samsung Galaxy A20","descripction":"Celular gama media","price":32000,"thumbnail":"Imagen","code":"SA20","stock":15}

    let produc3 = {"title":"Motorola G50","descripction":"Celular gama media alta","price":20000,"thumbnail":"Imagen","code":"MG50","stock":20}

    let actualizar = {
        title : "Moto G30",
        descripction : "Celular gama media", 
        price : 65000,
        thumbnail : "Imagen",
        code : "MG30",
        stock : 89
    }

    await manager.addProduct(produc1)
    await manager.addProduct(produc2)
    await manager.addProduct(produc3)
    console.log(await manager.getProducts())
    console.log(await manager.getProductsById(2))
    await manager.updateProducts(2,actualizar)
    await manager.deleteProduct(2)

}


main()