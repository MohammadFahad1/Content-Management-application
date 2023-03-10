require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const cors = require('cors');

app.use(cors());
app.use(express.json());

const uri = ``;

const run = async () => {
    try {
        // const db = client.db("MoonTech");
        // const productCollection = db.collection("products");

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