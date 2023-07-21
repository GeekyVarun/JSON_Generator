const express = require("express");
const bodyParser = require("body-parser");
const { PORT} = require('./config/serverConfig');
const InventoryController = require('./controllers/inventory-controller');

const setupAndStartServer = async () => {

    // create the express object
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    

    app.listen(PORT, async () => {
        console.log(`Server started at ${PORT}`); 
    });
    app.get('/inventory',InventoryController.getAll);
    // app.post('/city',CityController.create);
}

setupAndStartServer();