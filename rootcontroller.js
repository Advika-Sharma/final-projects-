const rootcontroller = (req,res)=>{
    res.send(`
        <h1> Hello world <h1>
        `)
    console.log("root page")
}

module.exports = rootcontroller
