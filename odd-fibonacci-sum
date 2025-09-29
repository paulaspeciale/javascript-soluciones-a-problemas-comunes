/*
n this lab you will build an odd Fibonacci sum calculator that computes the sum of all odd Fibonacci numbers that are less than or equal to a given positive integer.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

-User Stories

You should have a sumFibs function that accepts a number as an argument.
The sumFibs function should return the sum of all odd Fibonacci numbers that are less than or equal to the given number.
The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the two previous ones.
Only the odd Fibonacci numbers should be added to the sum.
-Test
sumFibs(1) should return a number.
sumFibs(1000) should return 1785.
sumFibs(4000000) should return 4613732.
sumFibs(4) should return 5.
sumFibs(75024) should return 60696.
sumFibs(75025) should return 135721.
*/
function sumFibs(num){
  let anterior= 1;
  let actual = anterior;
  
  let suma =1; //

while(actual <=num){
  if(actual % 2 !== 0){
    suma+=actual;
  }
  //calculo el siguiente numero en la secuencia 
  let temp = actual;
  actual+=anterior;
  anterior = temp;
}
return suma
}
