const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Movie extends Model {}

Movie.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    //list_id: {
      // type: DataTypes.INTEGER,
      // allowNull: false,
      // references: {
      //   model: "list",
      //   key: "id",
      // },
    },

    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    movie_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "movie",
  }
);

module.exports = Movie;
