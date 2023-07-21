const sequelize = require('./index.js');
module.exports = function(DataTypes) {
  return sequelize.define('orders', {
    orderid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    orderdate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    customerid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'customers',
        key: 'customerid'
      }
    },
    netamount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    tax: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    totalamount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'orders',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ix_order_custid",
        fields: [
          { name: "customerid" },
        ]
      },
      {
        name: "orders_pkey",
        unique: true,
        fields: [
          { name: "orderid" },
        ]
      },
    ]
  });
};
