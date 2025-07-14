const {model,Schema}=require('mongoose');

const productSchema = new Schema({
      id: { type: Schema.Types.ObjectId, auto: true },
    productname: {
        type: String,
        required: [true, "Please provide the product name"],
    },
    description: {
        type: String,
        required: [true, "Please provide the product description"],
    },
    category: {
        type: String,
        required: [true, "Please provide the product category"],
    },
    price: {
        type: Number,
        required: [true, "Please provide the product price"],
    },
    stock: {
        type: Number,
        required: [true, "Please provide the product stock"],
    },
})


const Productmodel = model('Product', productSchema);

module.exports = Productmodel;