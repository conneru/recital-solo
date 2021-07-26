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
          "https://m.media-amazon.com/images/M/MV5BMjA1Nzk0OTM2OF5BMl5BanBnXkFtZTgwNjU2NjEwMDE@._V1_FMjpg_UX1000_.jpg",
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
      {
        userId: 1,
        title: "The Incredibles",
        description:
          "A family of undercover superheroes, while trying to live the quiet suburban life, are forced into action to save the world.",
        director: "Brad Bird",
        releaseDate: 2004,
        genre: "Action",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/The_Incredibles.jpg/220px-The_Incredibles.jpg",
        length: 115,
      },

      {
        userId: 1,
        title: "Battle Royale",
        description:
          'In the future, the Japanese government captures a class of ninth-grade students and forces them to kill each other under the revolutionary "Battle Royale" act.',
        director: "Kinji Fukasaku",
        releaseDate: 2000,
        genre: "Action",
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BMDc2MGYwYzAtNzE2Yi00YmU3LTkxMDUtODk2YjhiNDM5NDIyXkEyXkFqcGdeQXVyMTEwNDU1MzEy._V1_FMjpg_UX1000_.jpg",
        length: 113,
      },

      {
        userId: 1,
        title: "Speed",
        description:
          "A young police officer must prevent a bomb exploding aboard a city bus by keeping its speed above 50 mph.",
        director: "Jan de Bont",
        releaseDate: 1994,
        genre: "Action",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/en/4/45/Speed_movie_poster.jpg",
        length: 116,
      },

      {
        userId: 1,
        title: "Attack The Block",
        description:
          "A teen gang in South London defend their block from an alien invasion.",
        director: "	Joe Cornish",
        releaseDate: 2011,
        genre: "Action",
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BMjAzNjc1MjgzOF5BMl5BanBnXkFtZTcwMzE3Njk5NQ@@._V1_.jpg",
        length: 88,
      },

      {
        userId: 1,
        title: "John Wick",
        description:
          "An ex-hit-man comes out of retirement to track down the gangsters that killed his dog and took everything from him.",
        director: "Chad Stahelski",
        releaseDate: 2014,
        genre: "Action",
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_.jpg",
        length: 101,
      },

      {
        userId: 1,
        title: "Crank",
        description:
          "Professional assassin Chev Chelios learns his rival has injected him with a poison that will kill him if his heart rate drops.",
        director: "Mark Neveldine - Brian Taylor",
        releaseDate: 2006,
        genre: "Action",
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BMTQzNTU1ODkxNl5BMl5BanBnXkFtZTcwMDgyODEzMg@@._V1_.jpg",
        length: 88,
      },

      {
        userId: 1,
        title: "Casino Royale",
        description:
          "After earning 00 status and a licence to kill, Secret Agent James Bond sets out on his first mission as 007. Bond must defeat a private banker funding terrorists in a high-stakes game of poker at Casino Royale, Montenegro.",
        director: "Martin Campbell",
        releaseDate: 2006,
        genre: "Action",
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BMDI5ZWJhOWItYTlhOC00YWNhLTlkNzctNDU5YTI1M2E1MWZhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_FMjpg_UX1000_.jpg",
        length: 144,
      },

      {
        userId: 1,
        title: "First Blood",
        description:
          "A veteran Green Beret is forced by a cruel Sheriff and his deputies to flee into the mountains and wage an escalating one-man war against his pursuers.",
        director: "Ted Kotcheff",
        releaseDate: 1982,
        genre: "Action",
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BODBmOWU2YWMtZGUzZi00YzRhLWJjNDAtYTUwNWVkNDcyZmU5XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_.jpg",
        length: 93,
      },

      {
        userId: 1,
        title: "The Terminator",
        description:
          "A human soldier is sent from 2029 to 1984 to stop an almost indestructible cyborg killing machine, sent from the same year, which has been programmed to execute a young woman whose unborn son is the key to humanity's future salvation.",
        director: "James Cameron",
        releaseDate: 1984,
        genre: "Action",
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BYTViNzMxZjEtZGEwNy00MDNiLWIzNGQtZDY2MjQ1OWViZjFmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        length: 107,
      },

      {
        userId: 1,
        title: "Aliens",
        description:
          "Fifty-seven years after surviving an apocalyptic attack aboard her space vessel by merciless space creatures, Officer Ripley awakens from hyper-sleep and tries to warn anyone who will listen about the predators.",
        director: "James Cameron",
        releaseDate: 1986,
        genre: "Action",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKiEpTRqGHFGuvd_ecGTK_HnevNNKcYXBV3LkSEPpJZ27jRSXY",
        length: 137,
      },

      {
        userId: 1,
        title: "The Big Lebowski",
        description:
          'Jeff "The Dude" Lebowski, mistaken for a millionaire of the same name, seeks restitution for his ruined rug and enlists his bowling buddies to help get it.',
        director: "Joel Coen - Ethan Coen",
        releaseDate: 1998,
        genre: "Comedy",
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BMTcwOTAwMzEyMl5BMl5BanBnXkFtZTcwODkzNjk3OA@@._V1_.jpg",
        length: 117,
      },

      {
        userId: 1,
        title: "Bridesmaids",
        description:
          "Competition between the maid of honor and a bridesmaid, over who is the bride's best friend, threatens to upend the life of an out-of-work pastry chef.",
        director: "Paul Feig",
        releaseDate: 2011,
        genre: "Comedy",
        imageUrl:
          "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTv8N4Pfcss3Y10uosDdI7PbJ_br3I4-Pv7D-sXk9cVHr4J43I9",
        length: 125,
      },

      {
        userId: 1,
        title: "Superbad",
        description:
          "Two co-dependent high school seniors are forced to deal with separation anxiety after their plan to stage a booze-soaked party goes awry.",
        director: "Greg Mottola",
        releaseDate: 2007,
        genre: "Comedy",
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BMTc0NjIyMjA2OF5BMl5BanBnXkFtZTcwMzIxNDE1MQ@@._V1_FMjpg_UX1000_.jpg",
        length: 113,
      },

      {
        userId: 1,
        title: "Dazed and Confused",
        description:
          "The adventures of high school and junior high students on the last day of school in May 1976.",
        director: "Richard Linklater",
        releaseDate: 1993,
        genre: "Comedy",
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BMTM5MDY5MDQyOV5BMl5BanBnXkFtZTgwMzM3NzMxMDE@._V1_FMjpg_UX1000_.jpg",
        length: 102,
      },

      {
        userId: 1,
        title: "Shaun of the Dead",
        description:
          "A man's uneventful life is disrupted by the zombie apocalypse.",
        director: "Edgar Wright",
        releaseDate: 2004,
        genre: "Comedy",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqWlBhQTijfLP8xyh-6wUFJMFWAAG56CJNcJvNZgS72a3N-KA8",
        length: 99,
      },

      {
        userId: 1,
        title: "Napoleon Dynamite",
        description:
          "A listless and alienated teenager decides to help his new friend win the class presidency in their small western high school, while he must deal with his bizarre family life back home.",
        director: "Jared Hess",
        releaseDate: 2004,
        genre: "Comedy",
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BNjYwNTA3MDIyMl5BMl5BanBnXkFtZTYwMjIxNjA3._V1_FMjpg_UX1000_.jpg",
        length: 95,
      },

      {
        userId: 1,
        title: "Still Walking",
        description:
          "A family gathers together for a commemorative ritual whose nature only gradually becomes clear.",
        director: "Hirokazu Koreeda",
        releaseDate: 2008,
        genre: "Drama",
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BOWEzMGIyNWUtZTMzMS00NGY2LTllZWYtMjgwZjRkYWY2NTFkXkEyXkFqcGdeQXVyMTI3ODAyMzE2._V1_.jpg",
        length: 114,
      },

      {
        userId: 1,
        title: "The Lobster",
        description:
          "In a dystopian near future, single people, according to the laws of The City, are taken to The Hotel, where they are obliged to find a romantic partner in forty-five days or are transformed into beasts and sent off into The Woods.",
        director: "Yorgos Lanthimos",
        releaseDate: 2015,
        genre: "Drama",
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BNDQ1NDE5NzQ1NF5BMl5BanBnXkFtZTgwNzA5OTM2NTE@._V1_.jpg",
        length: 118,
      },

      {
        userId: 1,
        title: "Burning",
        description:
          "Jong-su bumps into a girl who used to live in the same neighborhood, who asks him to look after her cat while she's on a trip to Africa. When back, she introduces Ben, a mysterious guy she met there, who confesses his secret hobby.",
        director: "Chang-dong Lee",
        releaseDate: 2018,
        genre: "Drama",
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BMWNmYjI1M2UtNDdkNi00MTgwLWFiZmYtODcxNWZhM2Y2NWFkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
        length: 148,
      },

      {
        userId: 1,
        title: "Secret Sunshine",
        description:
          "A woman moves to the town where her dead husband was born. As she tries to fit in, another tragic event overturns her life.",
        director: "Chang-dong Lee",
        releaseDate: 2007,
        genre: "Drama",
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BMjAzMDE5MDM5OV5BMl5BanBnXkFtZTgwMDE1NzE1MjE@._V1_FMjpg_UX1000_.jpg",
        length: 142,
      },

      {
        userId: 1,
        title: "The Witch",
        description:
          "A family in 1630s New England is torn apart by the forces of witchcraft, black magic, and possession.",
        director: "Robert Eggers",
        releaseDate: 2015,
        genre: "Horror",
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BMTUyNzkwMzAxOF5BMl5BanBnXkFtZTgwMzc1OTk1NjE@._V1_FMjpg_UX1000_.jpg",
        length: 93,
      },

      {
        userId: 1,
        title: "It Comes at Night",
        description:
          "Secure within a desolate home as an unnatural threat terrorizes the world, a man has established a tenuous domestic order with his wife and son. Then a desperate young family arrives seeking refuge.",
        director: "Trey Edward Shults",
        releaseDate: 2017,
        genre: "Horror",
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BMjQ3MDA0ODA2N15BMl5BanBnXkFtZTgwNzg0NzgwMjI@._V1_.jpg",
        length: 91,
      },
      {
        userId: 1,
        title: "28 Days Later",
        description:
          "Four weeks after a mysterious, incurable virus spreads throughout the UK, a handful of survivors try to find sanctuary.",
        director: "Danny Boyle",
        releaseDate: 2002,
        genre: "Horror",
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BYTFkM2ViMmQtZmI5NS00MjQ2LWEyN2EtMTI1ZmNlZDU3MTZjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg",
        length: 113,
      },

      {
        userId: 1,
        title: "Se7en",
        description:
          "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
        director: "	David Fincher",
        releaseDate: 1995,
        genre: "Mystery",
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg",
        length: 127,
      },

      {
        userId: 1,
        title: "Memento",
        description:
          "A man with short-term memory loss attempts to track down his wife's murderer.",
        director: "Christopher Nolan",
        releaseDate: 2000,
        genre: "Mystery",
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BZTcyNjk1MjgtOWI3Mi00YzQwLWI5MTktMzY4ZmI2NDAyNzYzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
        length: 113,
      },

      {
        userId: 1,
        title: "Knives Out",
        description:
          "A detective investigates the death of a patriarch of an eccentric, combative family.",
        director: "Rian Johnson",
        releaseDate: 2019,
        genre: "Mystery",
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BMGUwZjliMTAtNzAxZi00MWNiLWE2NzgtZGUxMGQxZjhhNDRiXkEyXkFqcGdeQXVyNjU1NzU3MzE@._V1_.jpg",
        length: 130,
      },

      {
        userId: 1,
        title: "The Nice Guys",
        description:
          "In 1970s Los Angeles, a mismatched pair of private eyes investigate a missing girl and the mysterious death of a porn star.",
        director: "Shane Black",
        releaseDate: 2016,
        genre: "Mystery",
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BODNlNmU4MGItMzQwZi00NGQyLWEyZWItYjFkNmI0NWI4NjBhXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
        length: 116,
      },

      {
        userId: 1,
        title: "The Usual Suspects",
        description:
          "A sole survivor tells of the twisty events leading up to a horrific gun battle on a boat, which began when five criminals met at a seemingly random police lineup.",
        director: "Bryan Singer",
        releaseDate: 1995,
        genre: "Mystery",
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BYTViNjMyNmUtNDFkNC00ZDRlLThmMDUtZDU2YWE4NGI2ZjVmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
        length: 106,
      },

      {
        userId: 1,
        title: "Sherlock Holmes",
        description:
          "Detective Sherlock Holmes and his stalwart partner Watson engage in a battle of wits and brawn with a nemesis whose plot is a threat to all of England.",
        director: "Guy Ritchie",
        releaseDate: 2009,
        genre: "Mystery",
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BMTg0NjEwNjUxM15BMl5BanBnXkFtZTcwMzk0MjQ5Mg@@._V1_.jpg",
        length: 129,
      },

      {
        userId: 1,
        title: "Love Actually",
        description:
          "Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.",
        director: "Richard Curtis",
        releaseDate: 2003,
        genre: "Romance",
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg",
        length: 136,
      },

      {
        userId: 1,
        title: "Before Sunset",
        description:
          "Nine years after Jesse and Celine first met, they encounter each other again on the French leg of Jesse's book tour.",
        director: "Richard Linklater",
        releaseDate: 2004,
        genre: "Romance",
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BMTQ1MjAwNTM5Ml5BMl5BanBnXkFtZTYwNDM0MTc3._V1_.jpg",
        length: 80,
      },

      {
        userId: 1,
        title: "Brokeback Mountain",
        description:
          "Ennis and Jack are two shepherds who develop a sexual and emotional relationship. Their relationship becomes complicated when both of them get married to their respective girlfriends.",
        director: "Ang Lee",
        releaseDate: 2005,
        genre: "Romance",
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BMTY5NTAzNTc1NF5BMl5BanBnXkFtZTYwNDY4MDc3._V1_.jpg",
        length: 134,
      },

      {
        userId: 1,
        title: "The Big Sick",
        description:
          "Pakistan-born comedian Kumail Nanjiani and grad student Emily Gardner fall in love but struggle as their cultures clash. When Emily contracts a mysterious illness, Kumail finds himself forced to face her feisty parents, his family's expectations, and his true feelings.",
        director: "Michael Showalter",
        releaseDate: 2017,
        genre: "Romance",
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BZWM4YzZjOTEtZmU5ZS00ZTRkLWFiNjAtZTEwNzIzMDM5MjdmXkEyXkFqcGdeQXVyNDg2MjUxNjM@._V1_FMjpg_UX1000_.jpg",
        length: 120,
      },

      {
        userId: 1,
        title: "Portrait of a Lady on Fire",
        description:
          "On an isolated island in Brittany at the end of the eighteenth century, a female painter is obliged to paint a wedding portrait of a young woman.",
        director: "Céline Sciamma",
        releaseDate: 2019,
        genre: "Romance",
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BNjgwNjkwOWYtYmM3My00NzI1LTk5OGItYWY0OTMyZTY4OTg2XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
        length: 120,
      },

      {
        userId: 1,
        title: "Once",
        description:
          "A modern-day musical about a busker and an immigrant and their eventful week in Dublin, as they write, rehearse and record songs that tell their love story.",
        director: "John Carney",
        releaseDate: 2007,
        genre: "Romance",
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BYWUxZjJkMDktZmMxMS00Mzg3LTk4MDItN2IwODlmN2E0MTM0XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
        length: 86,
      },

      {
        userId: 1,
        title: "2001: A Space Odyssey",
        description:
          "After discovering a mysterious artifact buried beneath the Lunar surface, mankind sets off on a quest to find its origins with help from intelligent supercomputer H.A.L. 9000.",
        director: "Stanley Kubrick",
        releaseDate: 1968,
        genre: "Sci-Fi",
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BMmNlYzRiNDctZWNhMi00MzI4LThkZTctMTUzMmZkMmFmNThmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
        length: 142,
      },

      {
        userId: 1,
        title: "Blade Runner 2049",
        description:
          "Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard, who's been missing for thirty years.",
        director: "Denis Villeneuve",
        releaseDate: 2017,
        genre: "Sci-Fi",
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_.jpg",
        length: 163,
      },

      {
        userId: 1,
        title: "Moon",
        description:
          "Astronaut Sam Bell has a quintessentially personal encounter toward the end of his three-year stint on the Moon, where he, working alongside his computer, GERTY, sends back to Earth parcels of a resource that has helped diminish our planet's power problems.",
        director: "Duncan Jones",
        releaseDate: 2009,
        genre: "Sci-Fi",
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BMTgzODgyNTQwOV5BMl5BanBnXkFtZTcwNzc0NTc0Mg@@._V1_.jpg",
        length: 95,
      },

      {
        userId: 1,
        title: "The Host",
        description:
          "A monster emerges from Seoul's Han River and begins attacking people. One victim's loving family does what it can to rescue her from its clutches.",
        director: "Bong Joon Ho",
        releaseDate: 2006,
        genre: "Sci-Fi",
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BMTE3N2IwNmMtOGE0Ny00NWFlLTliNmUtNjY3ODExYjgxNmUyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
        length: 119,
      },

      {
        userId: 1,
        title: "Serenity",
        description:
          "The crew of the ship Serenity try to evade an assassin sent to recapture telepath River.",
        director: "Joss Whedon",
        releaseDate: 2005,
        genre: "Sci-Fi",
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BOWE2MDAwZjEtODEyOS00ZjYyLTgzNDUtYmNiY2VmNWRiMTQxXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg",
        length: 119,
      },

      {
        userId: 1,
        title: "Victoria",
        description:
          "A young Spanish woman who has recently moved to Berlin finds her flirtation with a local guy turn potentially deadly as their night out with his friends reveals a dangerous secret.",
        director: "Sebastian Schipper",
        releaseDate: 2015,
        genre: "Thriller",
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BNjc2NDliY2UtNmNkZS00OWRlLWJjZmUtMzVlNjM1ZjU1N2FlXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg",
        length: 138,
      },

      {
        userId: 1,
        title: "Buried",
        description:
          "Paul is a U.S. truck driver working in Iraq. After an attack by a group of Iraqis he wakes to find he is buried alive inside a coffin. With only a lighter and a cell phone it's a race against time to escape this claustrophobic death trap.",
        director: "Rodrigo Cortés",
        releaseDate: 2010,
        genre: "Thriller",
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BZTRmZmIxMDktZjVmMS00NmFiLWExNmMtMzg0MTIyZDYwNWZjXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg",
        length: 95,
      },

      {
        userId: 1,
        title: "Panic Room",
        description:
          "A divorced woman and her diabetic daughter take refuge in their newly-purchased house's safe room, when three men break-in, searching for a missing fortune.",
        director: "David Fincher",
        releaseDate: 2002,
        genre: "Thriller",
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BNmY4ZGFjYTYtMDNmYi00ZDM4LWFjYTgtNmNlZjBmMzg0MzQ3XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_.jpg",
        length: 112,
      },

      {
        userId: 1,
        title: "Good Time",
        description:
          "After a botched bank robbery lands his younger brother in prison, Connie Nikas embarks on a twisted odyssey through New York City's underworld to get his brother Nick out of jail.",
        director: "Benny Safdie - Josh Safdie",
        releaseDate: 2017,
        genre: "Thriller",
        imageUrl:
          "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSmM0-ATCDih3mSa1LfMqKDoE2iONk7wDWX6lVMCKLPB9KD8AbN",
        length: 101,
      },

      {
        userId: 1,
        title: "Zodiac",
        description:
          "In the late 1960s/early 1970s, a San Francisco cartoonist becomes an amateur detective obsessed with tracking down the Zodiac Killer, an unidentified individual who terrorizes Northern California with a killing spree.",
        director: "David Fincher",
        releaseDate: 2007,
        genre: "Thriller",
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BN2UwNDc5NmEtNjVjZS00OTI5LWE5YjctMWM3ZjBiZGYwMGI2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
        length: 157,
      },

      {
        userId: 1,
        title: "Bone Tomahawk",
        description:
          "In the dying days of the old west, an elderly sheriff and his posse set out to rescue their town's doctor from cannibalistic cave dwellers.",
        director: "S. Craig Zahler",
        releaseDate: 2015,
        genre: "Western",
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BMzQ0MzE4OTUzMF5BMl5BanBnXkFtZTgwODAyNzI3NjE@._V1_.jpg",
        length: 132,
      },

      {
        userId: 1,
        title: "Hostiles",
        description:
          "In 1892, a legendary Army Captain reluctantly agrees to escort a Cheyenne chief and his family through dangerous territory.",
        director: "Scott Cooper",
        releaseDate: 2017,
        genre: "Western",
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BNGE5ZWE5YzUtM2ZlNi00OGMzLWE2YWYtZGZhZmVlNzA0Yjg2XkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1_.jpg",
        length: 133,
      },

      {
        userId: 1,
        title: "Hell or High Water",
        description:
          "A divorced father and his ex-con older brother resort to a desperate scheme in order to save their family's ranch in West Texas.",
        director: "David Mackenzie",
        releaseDate: 2016,
        genre: "Western",
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BMTg4NDA1OTA5NF5BMl5BanBnXkFtZTgwMDQ2MDM5ODE@._V1_.jpg",
        length: 102,
      },

      {
        userId: 1,
        title: "3:10 to Yuma",
        description:
          "A small-time rancher agrees to hold a captured outlaw who's awaiting a train to go to court in Yuma. A battle of wills ensues as the outlaw tries to psych out the rancher.",
        director: "James Mangold",
        releaseDate: 2007,
        genre: "Western",
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BODE0NTcxNTQzNF5BMl5BanBnXkFtZTcwMzczOTIzMw@@._V1_.jpg",
        length: 122,
      },

      {
        userId: 1,
        title: "True Grit",
        description:
          "A stubborn teenager enlists the help of a tough U.S. Marshal to track down her father's murderer.",
        director: "Ethan Coen - Joel Coen",
        releaseDate: 2010,
        genre: "Western",
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BODhkZDIzNjgtOTA5ZS00MmMzLWFkNjYtM2Y2MzFjN2FkNjAzL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_FMjpg_UX1000_.jpg",
        length: 110,
      },

      {
        userId: 1,
        title: "The Sisters Brothers",
        description:
          "Eli and Charlie Sisters, an infamous duo of gunslinging assassins, chase a gold prospector and his unexpected ally in 1850s Oregon.",
        director: "Jacques Audiard",
        releaseDate: 2018,
        genre: "Western",
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BOTZmNTI1MzMtMGY0ZS00YTRlLWI4OTktYzE3YzZjZjJkNDVlXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_FMjpg_UX1000_.jpg",
        length: 121,
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
