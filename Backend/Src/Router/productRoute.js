const {Router} = require("express");
const { viewproducts, addProduct, updateProduct, deleteProduct } = require("../Controller/productController");
const Auth = require("../Middleware/Auth");

const productroute = Router();

productroute.get('/',viewproducts);
productroute.post('/add',Auth,addProduct);
productroute.put('/update/:id',Auth,updateProduct);
productroute.delete('/delete/:id',Auth,deleteProduct);

module.exports = productroute;
