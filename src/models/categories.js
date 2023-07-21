const sequelize = require('./index.js');
module.exports = function(DataTypes) {
  return sequelize.define('categories', {
    _a0011: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    _a0012: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'categories',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "categories_pkey",
        unique: true,
        fields: [
          { name: "_a0011" },
        ]
      },
    ]
  });
};
