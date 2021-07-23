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
        movieId: 1,
        url: "https://recital-solo.s3.us-west-2.amazonaws.com/I+am+your+Father.mp3",
        title: "test1",
      },

      {
        userId: 1,
        movieId: 1,
        url: "https://recital-solo.s3.us-west-2.amazonaws.com/Alright+Alright+Alright+(Dazed+and+Confused).mp3",
        title: "test2",
      },

      {
        userId: 1,
        movieId: 1,
        url: "https://recital-solo.s3.us-west-2.amazonaws.com/I+am+your+Father.mp3",
        title: "test3",
      },

      {
        userId: 1,
        movieId: 1,
        url: "https://recital-solo.s3.us-west-2.amazonaws.com/Alright+Alright+Alright+(Dazed+and+Confused).mp3",
        title: "test4",
      },

      {
        userId: 1,
        movieId: 1,
        url: "https://recital-solo.s3.us-west-2.amazonaws.com/I+am+your+Father.mp3",
        title: "test5",
      },

      {
        userId: 1,
        movieId: 1,
        url: "https://recital-solo.s3.us-west-2.amazonaws.com/I+am+your+Father.mp3",
        title: "test6",
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
