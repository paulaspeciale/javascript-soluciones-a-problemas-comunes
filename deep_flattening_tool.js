/*
Create a Deep Flattening Tool
You should have a function named steamrollArray.
The steamrollArray function should accept one argument: a nested array.
The function should flatten the nested array, accounting for varying levels of nesting.
Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.
Global variables should not be used.
-- TEST
steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4]
*/
function steamrollArray(arr){
let flattarr = []

function flatten(el){
  if(Array.isArray(el)){
    el.forEach(flatten)
    }
  else {
    flattarr.push(el)
  }
  }
  arr.forEach(flatten)
  return flattarr
}
