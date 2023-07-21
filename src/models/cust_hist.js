const sequelize = require('./index.js');
module.exports = function(DataTypes) {
  return sequelize.define('cust_hist', {
    customerid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'customers',
        key: 'customerid'
      }
    },
    orderid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    prod_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'cust_hist',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ix_cust_hist_customerid",
        fields: [
          { name: "customerid" },
        ]
      },
    ]
  });
};
