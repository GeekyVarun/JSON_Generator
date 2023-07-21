const { InventoryService } = require('../services/index');

const inventoryService = new InventoryService();

const create = async (req, res) => {
    try {
        const inventory = await inventoryService.createInventory(req.body);
        return res.status(201).json({
            data: inventory,
            success: true,
            message: 'Successfully created an item',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to create an item',
            err: error
        });
    }
}

const getAll = async (req, res) => {
    try {
        const inventories = await inventoryService.getAllInventories();
        // console.log("hello");
        // console.log(cities);
        return res.status(200).json({
            data: inventories,
            success: true,
            message: 'Successfully fetched all items',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to fetch the items',
            err: error
        });
    }
}

module.exports = {
    create,
    getAll
}