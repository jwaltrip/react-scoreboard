// Static players array to test the Player component
let PLAYERS = [
  {
    name: "Jake Waltrip",
    score: 31,
    id: 1,
  },
  {
    name: "Laurie Hansson",
    score: 100,
    id: 2,
  },
  {
    name: "Bob Saget",
    score: 150,
    id: 3,
  },
];

// yucky global var to hold next player id's
// TODO convert this to UUID
var nextId = 4;