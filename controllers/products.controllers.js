const { products } = require("../models/products.model");

/// [GET] Featch all product list
module.exports.getAllProducts = (req,res)=>{
    res.status(200).json({
        succress: true,
        message: "Product sucessfully fetched.",
        data: products
    });
};


/// [POST] Add a new product
module.exports.addProduct = (req,res)=>{

    const {name,category,price,stock,description,image} = req.body;
    products.push({
        id : products.length + 1,
        name,category,price,stock,description,image
    });

    res.status(200).json({
        status: 200,
        message: "You have created a product.",
        data: products
    });
}


/// [PUT] Update a product
module.exports.updateProduct = (req,res)=>{

    const id = parseInt(req.params.id);
    const product = products.find((p) => p.id === id);
     
    const {name,category,price,stock,description,image} = req.body;

    if(name) product.name = name;
    if(category) product.category = category;
    if(price) product.price = parseFloat(price);
    if(stock) product.stock = stock;
    if(description) product.description = description;
    if(image) product.image = image;


    res.status(200).json({
        status: 200,
        message: "Updated",
        data: products
    });
}


/// [DELETE]: Delete a product
module.exports.deleteProduct = (req,res)=>{
   
    const id = parseInt(req.params.id);
    const productIndex = products.findIndex((p)=> p.id === id);
    products.splice(productIndex,1);

    res.status(200).json({
        status: 200,
        message: "Deleted Products",
        data: products
    });
}
