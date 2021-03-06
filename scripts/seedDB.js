const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/wiggletails"
);

const sitterSeed = [
    {
        firstName: "Sandy",
        lastName: "Beach",
        zipCode: "85297",
        email: "sandybeaches@gmail.com",
        phoneNumber: "4805546665",
        wage: "$15 an hour, $50 per night",
        description: "Enjoy your day away without worry!"
},

{
    firstName: "Robyn",
    lastName: "Banks",
    zipCode: "85296",
    email: "robynbanks@yahoo.com",
    phoneNumber: "(480)789-4534",
    wage: "$13 an hour, $60 per night",
    description: "Pet loving house with fenced yard "
},

{
    firstName: "Frank",
    lastName: "Ballpark",
    zipCode: "97701",
    email: "ballparkfranks@aol.com",
    phoneNumber: "(541)436-5556",
    wage: "$10 an hour, $60 per night",
    description: "Big or small I love them all"
},

{
    firstName: "Ben",
    lastName: "Dover",
    zipCode: "85297",
    email: "bendover@yahoo.com",
    phoneNumber: "(602)456-7773",
    wage: "$17 an hour, $35 per night",
    description: "Dependable and home all day"
},

{
    firstName: "Anita",
    lastName: "Bath",
    zipCode: "85296",
    email: "anitabath@gmail.com",
    phoneNumber: "(602) 556-9990",
    wage: "$18 an hour, $40 per night",
    description: "Responsible pal for furry friends"
},

{
    firstName: "Ally",
    lastName: "Gater",
    zipCode: "97701",
    email: "allygater@yahoo.com",
    phoneNumber: "(541)343-6576",
    wage: "$14 an hour, $32 per night",
    description: "Your pet's vacation starts here"
},

{
    firstName: "Joe",
    lastName: "King",
    zipCode: "",
    email: "joeking@yahoo.com",
    phoneNumber: "(602) 667-8889",
    wage: "$22 an hour, $70 per night",
    description: "I work from home and would love some company"
},

{
    firstName: "Jack",
    lastName: "Pott",
    zipCode: "",
    email: "jackpott@gmail.com",
    phoneNumber: 4806559992,
    wage: 10,
    description: "Full-time animal lover",
    Boarding: false,
    Stay_at_home: true,
    Walks: true,
    Daycare: true
},

{
    firstName: "Will",
    lastName: "Farrell",
    sitterZipCode: 85296,
    email: "comedyking@gmail.com",
    phoneNumber: 4806587782,
    wage: 100,
    description: "I will make your pets laugh",
    Boarding: false,
    Stay_at_home: true,
    Walks: true,
    Daycare: false
},

{
    firstName: "Brittney",
    lastName: "Spears",
    sitterZipCode: 97701,
    email: "itsBrittney@gmail.com",
    phoneNumber: 4806559992,
    wage: 20,
    description: "I promise I won't hit your baby one more time",
    Boarding: false,
    Stay_at_home: false,
    Walks: true,
    Daycare: false

}

]

db.Sitter
  .remove({})
  .then(() => db.Sitter.insertMany(sitterSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });