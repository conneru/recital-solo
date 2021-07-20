"use strict";
module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define(
    "Movie",
    {
      userId: DataTypes.INTEGER,
      title: DataTypes.STRING,
      genre: DataTypes.STRING,
      description: DataTypes.TEXT,
      director: DataTypes.STRING,
      releaseDate: DataTypes.INTEGER,
      imageUrl: DataTypes.STRING,
      length: DataTypes.INTEGER,
    },
    {}
  );
  Movie.associate = function (models) {
    Movie.belongsTo(models.User, { foreignKey: "userId" });
    Movie.hasMany(models.Quote, { foreignKey: "movieId" });
  };
  return Movie;
};
