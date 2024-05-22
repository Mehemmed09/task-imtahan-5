const app = express()

import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()
app.use(express.json())
app.use(cors())

const productsSchema = mongoose.Schema({
"image":{type: String,required:true},
"title":{type: String,required:true},
"text":{type: String,required:true},
},{timeStamp: true})


const Products = mongoose.model("Product",productsSchema)
app.get("/api/products", async (req, res) => {
    const response = await Products.find()
    res.send(response)
})
app.get("/api/products/:id", async (req, res) => {
    const { id } = req.params
    const target = await Products.findById(id)
    res.send(target)
})
app.delete("/api/products/:id", async (req, res) => {
    const { id } = req.params
    await Products.findByIdAndDelete(id)
    const items = await Products.find()
    res.send(items)
})
app.post("/api/products", async (req, res) => {
    const { title, price, image,text } = req.body
    const newProd = new Products({ text: text, title: title, price: price, image: image })
    await newProd.save()
    res.status(201).send("item created")
})
//edit product
app.put("/api/products/:id", async (req, res) => {
    const { id } = req.params
    const { title,image,text, } = req.body
    await Products.findByIdAndUpdate(id, { ...req.body })
    const items = await Products.find()
    res.send(items)
})
const port = process.env.PORT
const url = process.env.URL.replace("<password>", process.env.PASSWORD)

mongoose.connect(url)
    .then(() => console.log("Db connect"))
    .catch(err => console.log("Db not connect" + err))

app.listen(port, () => {
    console.log('port isdiyir')
})