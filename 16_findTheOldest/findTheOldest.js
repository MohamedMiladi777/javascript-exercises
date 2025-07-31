const findTheOldest = function (people) {
  let currentYear = new Date().getFullYear();

  people.forEach((person) => {
    if (!person.yearOfDeath) {
      person.yearOfDeath = currentYear;
    }
  });
  
  let results = [];
  let calculateAge = 0;
  people.forEach((person) => {
    calculateAge = person.yearOfDeath - person.yearOfBirth;
    results.push({ calculateAge, person: person });
  });
  let oldest = results[0];
  for (let i = 1; i < results.length; i++) {
    if (results[i].calculateAge > oldest.calculateAge) {
      oldest = results[i];
    }
  }

  return oldest.person;
};

// Do not edit below this line
module.exports = findTheOldest;
