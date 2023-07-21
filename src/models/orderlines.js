const sequelize = require('./index.js');
module.exports = function(DataTypes) {
  return sequelize.define('orderlines', {
    orderlineid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    orderid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'orders',
        key: 'orderid'
      }
    },
    prod_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    quantity: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    orderdate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'orderlines',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ix_orderlines_orderid",
        unique: true,
        fields: [
          { name: "orderid" },
          { name: "orderlineid" },
        ]
      },
    ]
  });
};
