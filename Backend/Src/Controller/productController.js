const Productmodel = require("../Model/Product");

const viewproducts=async(req, res) => {
    try{
        const products = await Productmodel.find();
        if (products.length === 0) {
            return res.status(404).send("No products found");
        }
        res.status(200).json(products);
     
    }
    catch(err){
        console.error("Error in viewproducts:", err);
        res.status(500).send("Internal Server Error");
    }   
}   

const addProduct= async(req, res) => {
    try{
       const { productname, description,category,price,stock } = req.body;
       if (!productname || !price || !description || !category || !stock) {
              return res.status(400).send("All fields are required");
         }
       const newProduct = {
           productname: productname,   
           description: description,
           category: category,
           price: price,
           description: description
         };
         await Productmodel.create(newProduct);
         res.status(201).send("Product added successfully");
        
    }
    catch(err){
        console.error("Error in addProduct:", err);
        res.status(500).send("Internal Server Error");
}   
}

const updateProduct=async(req, res) => {
    try{
   const { id } = req.params;
   const { name, description, category, price, stock } = req.body;
    if (!id || !name || !price || !description || !category || !stock) {
         return res.status(400).send("All fields are required");
    }
    const product = await Productmodel.findById(id);
    if (!product) {
        return res.status(404).send("Product not found");
    }
    await Productmodel.findByIdAndUpdate(id, {
        productname: name,
        description: description,
        category: category,
        price: price,
        stock: stock
    }, { new: true })
    res.status(200).send("Product updated successfully");
}
    catch(err){
        console.error("Error in updateProduct:", err);
        res.status(500).send("Internal Server Error");
    }
}

const deleteProduct=async(req, res) => {
    try{
        const { id } = req.params;
        if (!id) {
            return res.status(400).send("Product ID is required");
        }
        const product = await Productmodel.findById(id);
        if (!product) {
            return res.status(404).send("Product not found");
        }
        await Productmodel.findByIdAndDelete(id);
        res.status(200).send("Product deleted successfully");   
    }
    catch(err){
        console.error("Error in deleteProduct:", err);
        res.status(500).send("Internal Server Error");
    }
}

module.exports = {
    viewproducts,
    addProduct,
    updateProduct,
    deleteProduct
} 
