const Products  = require("../models/products.model");

/// [GET] Featch all product list
module.exports.getAllProducts = async (req,res)=>{
    console.log(`*************************${req}`)
    try {
        const products = await Products.find(); 
        res.status(200).json({
            status: true,
            message: "Success",
            data: products
        });
    } catch (error) {
        res.status(501).json({
            status: false,
            message: error.message
        });
        console.error("Error fetching products:", error);
    }
};


/// [POST] Add a new product
module.exports.addProduct = async (req,res)=>{
    try{
        const {name,category,price,stock,description,images} = req.body;
        console.log(images);

        const newProduct = new Products({
            name,
            category,
            price : Number(price),
            stock : Number(stock),
            description,
            images: images
        });
        await newProduct.save();
        
        res.status(201).json(newProduct);
    }catch(error){
        res.status(501).json({
            status: false,
            message: error.message
        });
    }
}


/// [PUT] Update a product
module.exports.updateProduct = async (req, res) => {
    try {
        const { id } = req.params; // Extract `_id` from request URL
        const updateData = req.body; // Get the fields to update

        // Find the product by `_id` and update it
        const updatedProduct = await Products.findByIdAndUpdate(
            id,
            { $set: updateData }, // Update only provided fields
            { new: true } // Return the updated document
        );

        // If product not found
        if (!updatedProduct) {
            return res.status(404).json({
                status: false,
                message: "Product not found"
            });
        }

        res.status(200).json({
            status: true,
            message: "Product updated successfully",
            data: updatedProduct
        });

    } catch (error) {
        console.error("Error updating product:", error);
        res.status(500).json({
            status: false,
            message: error.message
        });
    }
};


/// [DELETE]: Delete a product
module.exports.deleteProduct = async (req, res) => {
    try {
        const { id } = req.params; // Extract `_id` from request URL

        // Find and delete the product by `_id`
        const deletedProduct = await Products.findByIdAndDelete(id);

        // If product not found
        if (!deletedProduct) {
            return res.status(404).json({
                status: false,
                message: "Product not found"
            });
        }

        res.status(200).json({
            status: true,
            message: "Product deleted successfully",
            data: deletedProduct
        });

    } catch (error) {
        console.error("Error deleting product:", error);
        res.status(500).json({
            status: false,
            message: error.message
        });
    }
};