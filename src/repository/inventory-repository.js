const sequelize=require('sequelize');
const initModels = require("../models/init-models");
const models = initModels(sequelize);

class InventoryRepository {

    async createItem(data) { 
        try {
            const inventory = await Inventory.create(data);
            return inventory;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async getAllInventories() { // filter can be empty also
        try {
            const inventories = await models.inventory.findAll();
            //console.log("hello");
            return inventories;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
}

module.exports = InventoryRepository;