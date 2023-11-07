import express from "express";
import cors from "cors"
// import { MongoClient } from 'mongodb'


const app = express()
app.use(cors())
app.use(express.json())


app.get('/', (req,res)=>{
    res.send('hello')
})

app.listen('8080', () => console.log('api listeing on port 8080'))









/*

const MONGO_URI = "mongodb+srv://spinnyorb23:cBwPLonGEKKWFsYR@myfirstcluster.fj0o5tg.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient = (MONGO_URI)
const db = client.db('blogappp-c12')
const blogPosts = db.collection("blog-posts")
client.connect()

console.log('connected to Mongo')

const allBlogPosts = await blogPosts.find().toArray()
console.log('allPosts ->', allBlogPosts)
res.json('here are some blog posts, not yet! 🥶')
const(addeditem) = await blogPosts.insertOne (Newblogposts)
res.send(addeditem)



*/