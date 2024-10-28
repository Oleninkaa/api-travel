
const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema(
    {

        name:{
            type: String,
            required: [true, "Product name is required"],
        },

        quantity:{
            type: Number,
            required: [true, "quantity is required"],
            default: 0,
        },

        price:{
            type: Number,
            required: [true, "price is required"],
            default: 0,
        },

        color:{
            type: String,
            required: false,
        }

    },

    {
        timestamps:true
    }


);


const Product = mongoose.model("Product", ProductSchema)

module.exports = Product;