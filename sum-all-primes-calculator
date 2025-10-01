/*
Build a Sum All Primes Calculator
In this lab, you will build a calculator that takes a number and returns the sum of all prime numbers that are less than or equal to that number.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should have a sumPrimes function that accepts a number as an argument.
The sumPrimes function should return the sum of all prime numbers less than or equal to the provided number.
If the input number is less than 2, the function should return 0.
-- Test
sumPrimes(10) should return 17.
sumPrimes(5) should return 10.
sumPrimes(2) should return 2.
sumPrimes(0) should return 0.
sumPrimes(977) should return 73156.
*/
function sumPrimes(num){
if (num<2) return 0
let primos = obtenerPrimosHasta(num)

return primos.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}
function obtenerPrimosHasta(limite) {
  const numerosPrimos = [];
  for (let i = 2; i <= limite; i++) {
    if (esPrimo(i)) {
      numerosPrimos.push(i);
    }
  }
  return numerosPrimos;
}
function esPrimo(numero) {
  // Los números menores o iguales a 1 no son primos
  if (numero <= 1) {
    return false;
  }
  // Los números menores o iguales a 3 son primos (2 y 3)
  if (numero <= 3) {
    return true;
  }
  // Optimización: si es divisible por 2 o 3, no es primo (excepto 2 y 3)
  if (numero % 2 === 0 || numero % 3 === 0) {
    return false;
  }

  // Verifica divisores impares hasta la raíz cuadrada del número
  // Empezamos en 5 y aumentamos de 6 en 6 (i y i+2)
  for (let i = 5; i * i <= numero; i += 6) {
    if (numero % i === 0 || numero % (i + 2) === 0) {
      return false;
    }
  }
  // Si no se encontraron divisores, es primo
  return true;
}
sumPrimes(2)
