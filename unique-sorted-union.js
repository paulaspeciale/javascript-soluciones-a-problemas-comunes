/*
Implement a Unique Sorted Union
Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should have a function named uniteUnique.
The uniteUnique function should accept two or more arrays as arguments.
The function should return a new array that contains unique values from the argument arrays, in the order they are first found in the arguments. 
For example, an input like [1, 2, 4], [2, 3, 5] would have an output of [1, 2, 4, 3, 5].
-TEST
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8].
uniteUnique([1, 3, 2], [5, 4], [5, 6]) should return [1, 3, 2, 5, 4, 6].
uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4]
*/

/*
El punto de este problema es reconocer que la cantidad de argumentos que recibe la funcion es variable
Posibles soluciones:
- utilizar arguments
- utilizar el operador ...
*/
function uniteUnique(arr){
let arrFlat = []
for(let arr of arguments){
  arrFlat = [...arrFlat, ...arr]
}
let arrResult=[]
for(let el of arrFlat){
  if(!arrResult.includes(el)){
    arrResult.push(el)
  }
}
return arrResult
} 
