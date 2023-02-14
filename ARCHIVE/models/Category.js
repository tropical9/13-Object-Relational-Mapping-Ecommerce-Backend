const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

//create a new sequelize model fot category
class Category extends Model {}

//init has 2 parameters. it has a model and the config object.
Category.init(
 
     // define columns
//model
  {
    category_id: {
      type: DataTypes.INTEGER,
      //manually define the primary key
      primaryKey: true,
      //autoincrement
      autoIncrement: true,
      //doesnt allow null values
      allowNull: false,
    }

  },

  //config object
  {
    //linkto database connection
    sequelize,
    //set to false to remove 'created_at' and 'updated_at' fields 
    timestamps: false,
    //prevent sequelize from renaming the table
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
