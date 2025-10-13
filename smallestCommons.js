
/*
Implement a Range-Based LCM Calculator
In this lab, you will create a function that takes an array of two numbers and returns the least common multiple (LCM) of those two numbers and all the numbers between them.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories

You should have a smallestCommons function that accepts an array of two numbers as an argument.
The smallestCommons function should return the smallest common multiple that is evenly divisible by both numbers and all sequential numbers in the range between them.
The function should handle input where the two numbers are not in numerical order.
-- TEST
 smallestCommons([1, 5]) should return 60.
 smallestCommons([5, 1]) should return 60.
 smallestCommons([2, 10]) should return 2520.
 smallestCommons([1, 13]) should return 360360.
 smallestCommons([23, 18]) should return 6056820
*/
function smallestCommons(arr){
  let smallest = Math.min(arr[0], arr[1])
  let largest = Math.max(arr[0], arr[1])
  let multiple = largest
  for(let i=smallest; i<=largest; i++){
    if(multiple%i !==0){
      multiple+=largest;
      i=smallest-1
    }
    else if(i==largest){
      return multiple
    }
  }
  return arr
}
console.log(smallestCommons([1, 5]))
