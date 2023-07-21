const sequelize = require('./index.js');
module.exports = function(DataTypes) {
  return sequelize.define('reorder', {
    prod_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    date_low: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    quan_low: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    date_reordered: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    quan_reordered: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    date_expected: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'reorder',
    schema: 'public',
    timestamps: false
  });
};
