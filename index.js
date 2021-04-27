const databaseSetup = require('./database/database-setup');
const express = require('express');
//const router = express.Router();
const Accounts = require('./database/models/accounts');
const Channels = require('./database/models/channels');
const Videos = require('./database/videos');

databaseSetup();
//test

const app = express();
app.use(express.json())
const port = 8080;

app.get("/accounts/:id", async (req, res) => {
  
    try {
    const { id } = req.params;
    const accounts = await Accounts.query().findById(id).withGraphFetched('channels');
    res.json(accounts);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }

    
});



app.listen(port, () => {
    console.log(`Listening on port http://localhost:${port}`)
})