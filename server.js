//const express = require("express")
//
//const color = require("colors")
//
//const dotenv = require("dotenv").config()
//
//const morgan = require("morgan")
//
//const app = express()
//const PORT = 8000 
//
//// localhost : 8080
//app.get('/users',(req,res)=>{
//    res.send([{
//        id:1,
//        name:"ankit"
//    },{
//        id:2,
//        name:"ayush"
//    }])
//    
//})
//app.get('/',(req,res)=>{
//    res.send("Hello world")
//    console.log("Chai pr chalte hai")
//})
//
//app.listen(PORT,()=>{
//    console.log(`Server is running on ${PORT}`.bgBlue.black)
//})


const express = require("express")

const color = require("colors")

const dotenv = require("dotenv").config()

const morgan = require("morgan")

//const path = require("path")

const products = require("./utility/productdata.json")
const rootroute = require("./routes/rootroutes")
const productroute = require("./routes/productroutes")

const app = express()
const PORT = 7000 || 6000

// Middlewares

app.use(morgan("dev"))
app.use(express.json())

// app.use(express.static(path.resolve(__dirname,'./public')))
// const products = require("../utility/productdata.json")

// const data = [
//     {id:1,name:"ankit",age:21},
//     {id:2, name:"ayush",age:20},
//     {id:3, name:"raj",age:22},
//     {id:4, name:"rahul",age:19}
// ]
 
// localhost : 8000


app.use('/',rootroute)
app.use('/pro',productroute)



// app.get('/products',(req,res)=>{
//     res.send(products)   
// })

// app.get('/users',(req,res)=>{
//     res.send(data)
//     console.log("users page")   
// })

// app.get('/home',(req,res)=>{
//     res.sendFile(path.resolve(__dirname,'./public','page.html'))
//     console.log("home page")
// })


// app.get('/stopwatch',(req,res)=>{
//     res.sendFile(path.resolve(__dirname,'./public','stopwatch.html'))
//     console.log("stop watch page")
// })

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`.bgBlue.black)
})

