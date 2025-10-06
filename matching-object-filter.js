/* Implement a Matching Object Filter
In this lab, you will create a function that filters an array of objects and returns only those objects that match all key-value pairs in a given source object.
User Stories:
You should have a whatIsInAName function that accepts two arguments, an array of objects and a source object.
The whatIsInAName function should return a new array containing only the objects from the collection that have all the key–value pairs present in the source object.
If no objects match all the key–value pairs from the source, the function should return an empty array. For example:
Get Help
--Tests
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }) should return [{ first: "Tybalt", last: "Capulet" }].
whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }) should return [{"apple": 1}, {"apple": 1}, {"apple": 1, "bat": 2}].
whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }) should return [{"apple": 1, "bat": 2}, {"apple": 1, "bat": 2, "cookie": 2}].
whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }) should return [{"apple": 1, "bat": 2, "cookie": 2}].
whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat": 2 }], { "apple": 1, "bat": 2 }) should return [{"apple": 1, "bat": 2}, {"apple": 1, "bat": 2, "cookie": 2}]
whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3}) should return [].
whatIsInAName([{"a": 1, "b": 2, "c": 3, "d": 9999}], {"a": 1, "b": 9999, "c": 3}) should return [].
*/

function whatIsInAName(arr, obj) {
  const sourceKey = Object.keys(obj);
  return arr.filter(el => sourceKey.every(key => el[key] === obj[key]))
}
