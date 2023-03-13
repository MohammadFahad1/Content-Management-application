require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.mn9baty.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

const run = async () => {
    try {
        const db = client.db("AutoWebContent");
        const posts = db.collection("posts");

        // Get All Posts
        app.get('/posts', async (req, res) => {
            const query = {};
            const result = await posts.find(query).toArray();
            res.send(result);
        })

        // Get Single Post
        app.get('/posts/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await posts.findOne(query);
            res.send(result);
        })

        // Update Single Post
        app.put('posts/:id', async (req, res) => {
            const id = req.params.id;
            const filter = { _id: ObjectId(id) };
            const post = req.body;
            const option = { upsert: true };
            const updatePost = {
                $set: {
                    advertise: !post.advertise
                }
            }
            const result = await posts.updateOne(filter, updatePost, option);
            res.send(result);
        })

        // Delete Post
        app.delete('/posts/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) }
            const result = await posts.deleteOne(query);
            res.send(result)
        })

        // routes will go here
    } finally {
        // It will stay empty
    }
}

run().catch(err => console.log(err));

// root route
app.get('/', (req, res) => {
    res.send("Hello, Md. Fahad Monshi");
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})