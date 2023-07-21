const { InventoryRepository } = require('../repository/index');
const obj=require('../mappings/inventory-mapping');
class InventoryService {
    constructor() {
        this.inventoryRepository = new InventoryRepository();
    }

    async createInventory(data) {
        try {
            const inventory = await this.inventoryRepository.createInventory(data);
            return inventory;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }

    async getAllInventories() {
        try {
            const inventories = await this.inventoryRepository.getAllInventories();
            // cities[0].dataValues['name']=cities[0].dataValues['_x0011'];
            // delete cities[0].dataValues['_x0011'];
            inventories.forEach((inventory) => {
                inventory.dataValues[obj._b0011]=inventory.dataValues['_b0011'];
                inventory.dataValues[obj._b0012]=inventory.dataValues['_b0012'];
                inventory.dataValues[obj._b0013]=inventory.dataValues['_b0013'];
                delete inventory.dataValues['_b0011'];    
                delete inventory.dataValues['_b0012'];    
                delete inventory.dataValues['_b0013'];    
            })
            //console.log(cities[0].dataValues._x0011);
            return inventories;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }
}

module.exports = InventoryService;