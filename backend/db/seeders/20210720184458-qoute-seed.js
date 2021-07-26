"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert("Quotes", [
      {
        userId: 1,
        movieId: 42,
        url: "https://recital-solo.s3.us-west-2.amazonaws.com/im+afraid+dave.m4a",
        title: "Bad Feeling",
      },

      {
        userId: 1,
        movieId: 1,
        url: "https://recital-solo.s3.us-west-2.amazonaws.com/im+afraid+dave.m4a",
        title: "I'm afraid",
      },

      {
        userId: 1,
        movieId: 1,
        url: "https://recital-solo.s3.us-west-2.amazonaws.com/poor+decisions.m4a",
        title: "Poor decisions",
      },

      {
        userId: 1,
        movieId: 1,
        url: "https://recital-solo.s3.us-west-2.amazonaws.com/too+important.m4a",
        title: "This mission is too important",
      },

      {
        userId: 1,
        movieId: 1,
        url: "https://recital-solo.s3.us-west-2.amazonaws.com/whatare+you+doing.m4a",
        title: "What do you think you're doing?",
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete("Quotes", null, {});
  },
};
