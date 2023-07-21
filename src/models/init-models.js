var DataTypes = require("sequelize").DataTypes;
var _categories = require("./categories");
var _cust_hist = require("./cust_hist");
var _customers = require("./customers");
var _inventory = require("./inventory");
var _orderlines = require("./orderlines");
var _orders = require("./orders");
var _products = require("./products");
var _reorder = require("./reorder");

function initModels(sequelize) {
  var categories = _categories(sequelize, DataTypes);
  var cust_hist = _cust_hist(sequelize, DataTypes);
  var customers = _customers(sequelize, DataTypes);
  var inventory = _inventory(sequelize, DataTypes);
  var orderlines = _orderlines(sequelize, DataTypes);
  var orders = _orders(sequelize, DataTypes);
  var products = _products(sequelize, DataTypes);
  var reorder = _reorder(sequelize, DataTypes);

  cust_hist.belongsTo(customers, { as: "customer", foreignKey: "customerid"});
  customers.hasMany(cust_hist, { as: "cust_hists", foreignKey: "customerid"});
  orders.belongsTo(customers, { as: "customer", foreignKey: "customerid"});
  customers.hasMany(orders, { as: "orders", foreignKey: "customerid"});
  orderlines.belongsTo(orders, { as: "order", foreignKey: "orderid"});
  orders.hasMany(orderlines, { as: "orderlines", foreignKey: "orderid"});

  return {
    categories,
    cust_hist,
    customers,
    inventory,
    orderlines,
    orders,
    products,
    reorder,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
