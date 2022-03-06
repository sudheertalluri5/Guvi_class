// Print odd numbers in an array

const num_array = [1,42,17,523,892,980,5,9,2];

// Arrow function
console.log('Given array is ', num_array.toString());
console.log('Here are the odd numbers in the array found using Arrow function:');
num_array.forEach((value) => {
    if (value%2 != 0){
        console.log(value)
    }
});


// Convert all the strings to title caps in a string array
const str_array = ['sudheer', 'lavish', 'guvi', 'javascript'];

console.log('Given Array is ', str_array.toString());

str_array.forEach((value, index, arr) => {
    arr[index] = value[0].toUpperCase() + value.substr(1).toLowerCase();
});
console.log('Title case Converted array using Arrow function: ', str_array.toString());


// Sum of all numbers in an array
console.log('Given array is, ', num_array.toString());
console.log('Sum using arrow function is ',num_array.reduce((sum, value) => {
    return sum + value;
}, 0));

// Return all the prime numbers in an array
console.log('Given array is, ', num_array.toString());

console.log('Prime numbers of given array using arrow function are,', num_array.reduce((prime_array, value) => {
    let is_prime = true;
    for (let i=2; i<=Math.sqrt(value); i++){
        if (value%i == 0){
            is_prime = false;
            break;
        }
    }
    if (is_prime){
        prime_array.push(value);
    }
    return prime_array;
}, []).toString());

// Return all the palindromes in an array
const str_array_2 = ["civic", "Sudheer", "Civic", "reviver", "REFER", "html", "css"];
console.log('Given array is ', str_array_2.toString());

console.log('Palindromes in the given array found using arrow function are, ', str_array_2.reduce((palindrome_array, value) => {
    if (value.toLowerCase() === value.split("").reverse().join("").toLowerCase()){
        palindrome_array.push(value)
    }
    return palindrome_array
}, []).toString());
