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
    return queryInterface.bulkInsert("Movies", [
      {
        userId: 1,
        title: "Sunshine",
        description:
          "A team of international astronauts are sent on a dangerous mission to reignite the dying Sun with a nuclear fission bomb in 2057.",
        director: "Danny Boyle",
        releaseDate: 2007,
        genre: "Sci-Fi",
        imageUrl:
          "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT1davX7WE4t3LfpNo442yu6mg0M1I0pJsI55fdfASc1qvEtPwM",
        length: 107,
      },

      {
        userId: 1,
        title: "Raw",
        description:
          "A young woman, studying to be a vet, develops a craving for human flesh.",
        director: "Julia Ducournau",
        releaseDate: 2016,
        genre: "Horror",
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BMTU3MDUxMDI0MV5BMl5BanBnXkFtZTgwMzk3OTg3MDI@._V1_.jpg",
        length: 99,
      },

      {
        userId: 1,
        title: "The Descent",
        description:
          "A caving expedition goes horribly wrong, as the explorers become trapped and ultimately pursued by a strange breed of predators.",
        director: "Neil Marshall",
        releaseDate: 2007,
        genre: "Horror",
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BMjA5NzQ1NTgwNV5BMl5BanBnXkFtZTcwNjUxMzUzMw@@._V1_.jpg",
        length: 100,
      },

      {
        userId: 1,
        title: "Hereditary",
        description:
          "A grieving family is haunted by tragic and disturbing occurrences.",
        director: "Ari Aster",
        releaseDate: 2018,
        genre: "Horror",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/en/d/d9/Hereditary.png",
        length: 127,
      },

      {
        userId: 1,
        title: "Her",
        description:
          "In a near future, a lonely writer develops an unlikely relationship with an operating system designed to meet his every need.",
        director: "Spike Jonze",
        releaseDate: 2013,
        genre: "Drama",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/en/4/44/Her2013Poster.jpg",
        length: 126,
      },

      {
        userId: 1,
        title: "Your Name.",
        description:
          "Two strangers find themselves linked in a bizarre way. When a connection forms, will distance be the only thing to keep them apart?",
        director: "Makoto Shinkai",
        releaseDate: 2016,
        genre: "Drama",
        imageUrl:
          "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSdCn7P_niNCbNFHt9vLgDc-YlRIhwvnCPtHzyiHVP_GK-XmDS1",
        length: 107,
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
    return queryInterface.bulkDelete("Movies", null, {});
  },
};
