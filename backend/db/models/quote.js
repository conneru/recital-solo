"use strict";
module.exports = (sequelize, DataTypes) => {
  const Quote = sequelize.define(
    "Quote",
    {
      userId: DataTypes.INTEGER,
      movieId: DataTypes.INTEGER,
      url: DataTypes.STRING,
      title: DataTypes.STRING,
    },
    {}
  );
  Quote.associate = function (models) {
    Quote.belongsTo(models.User, { foriegnKey: "userId" });
    Quote.belongsTo(models.Movie, { foriegnKey: "movieId" });
  };
  return Quote;
};
