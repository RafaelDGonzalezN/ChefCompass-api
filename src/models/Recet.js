const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('recet', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    ingredients: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // ingredients: {
    //   type: DataTypes.ARRAY(DataTypes.STRING),
    //   allowNull: false
    // },
    preparation: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    duration: {
      type: DataTypes.STRING,
      allowNull: false
    } 

  },
  {
    paranoid: true
  }
  );
};
