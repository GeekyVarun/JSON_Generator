const sequelize = require('./index.js');
module.exports = function(DataTypes) {
  return sequelize.define('products', {
    prod_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    category: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    actor: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    special: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    common_prod_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'products',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ix_prod_category",
        fields: [
          { name: "category" },
        ]
      },
      {
        name: "ix_prod_special",
        fields: [
          { name: "special" },
        ]
      },
      {
        name: "products_pkey",
        unique: true,
        fields: [
          { name: "prod_id" },
        ]
      },
    ]
  });
};
