function findDivisors(number) {
    let divisors = [];
  
    for (let i = 1; i <= number; i++) {
      if (number % i === 0) {
        divisors.push(i);
      }
    }
  
    return divisors;
  }
  
  const inputNumber = parseInt(prompt("Please enter a number:"));
  const divisorsList = findDivisors(inputNumber);
  console.log(`Divisors of the number ${inputNumber}: ${divisorsList}`);
  