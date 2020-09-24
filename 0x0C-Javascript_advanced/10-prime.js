const countPrimeNumbers = () => {
    let counter = 0;
    for (let i = 2; i <= 100; i++) {
        if (isPrime(i)) 
            counter += 1 
    }
    return counter;
}

const isPrime = (number) => {
    if (number == 0 || number == 1 || number == 4) return false;
	for (let x = 2; x < number / 2; x++) {
		if (number % x == 0) return false;
    }
	return true;
}

let start, end, duration; 

start = performance.now();
for (let i = 0; i < 100; i++)
    countPrimeNumbers();
end = performance.now();
duration = end - start;

console.log(`Execution time of calculating prime numbers 100 times was ${duration} milliseconds.`);