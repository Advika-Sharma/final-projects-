const products = require("../utility/productdata.json")
const productcontroller = (req,res)=>{

    const {category}=req.params
    const {name}=req.params
    if(category)
    {
        const product=products.filter((product)=>product.category===category)
        res.send(product)
    }
    else if(name)
    {
        const product=products.filter((product)=>product.name===name)
        res.send(product)
    }
    else
    {
        res.send(products)
    }
    
    console.log("product page")
}

module.exports = productcontroller