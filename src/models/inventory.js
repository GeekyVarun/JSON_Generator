const sequelize = require('./index.js');
module.exports = function(DataTypes) {
  return sequelize.define('inventory', {
    _b0011: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    _b0012: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    _b0013: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'inventory',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "inventory_pkey",
        unique: true,
        fields: [
          { name: "_b0011" },
        ]
      },
    ]
  });
};
