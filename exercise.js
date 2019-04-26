const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];
const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

/**
 * 1.
 * Some and Every Checks
 * Array.prototype.some() // is at least one person 19 or older?
 *  Array.prototype.every() // is everyone 19 or older?
 */

/**
 * Returns the age of a person.
 */
const age = (person) => {
  return new Date().getFullYear() - person.year;
};

const olderThan19Exists = people.some((person) => {
  return age(person) >= 19;
});
console.log(olderThan19Exists);

const allOlderThan19 = people.every((person) => {
  return age(person) >= 19;
});
console.log(allOlderThan19);

/**
 * 2.
 * Array.prototype.find()
 * Find is like filter, but instead returns just the one you are looking for
 * find the comment with the ID of 823423
 */



/**
 * 3.
 * Array.prototype.findIndex()
 * Find the comment with this ID
 * Delete the comment with the ID of 823423
 */
