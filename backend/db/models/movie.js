"use strict";
module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define(
    "Movie",
    {
      userId: DataTypes.INTEGER,
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      director: DataTypes.STRING,
      releaseDate: DataTypes.INTEGER,
      imageUrl: DataTypes.STRING,
      length: DataTypes.INTEGER,
    },
    {}
  );
  Movie.associate = function (models) {
    Movie.belongsTo(models.User, { foriegnKey: "userId" });
    Movie.hasMany(models.Quote, { foriegnKey: "movieId" });
  };
  return Movie;
};
