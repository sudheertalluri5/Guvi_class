// Print odd numbers in an array

const num_array = [1,42,17,523,892,980,5,9,2];

// Anonymous function
console.log('Given array is ', num_array.toString());
console.log('Here are the odd numbers in the array found using Anonymous function:');
num_array.forEach(function(value){
    if (value%2 != 0){
        console.log(value)
    }
});

// IIFE
console.log('Here are the odd numbers in the array found using IIFE function:');
(function(array){
    for (let value of array){
        if (value%2 != 0){
            console.log(value)
        }
    }
})(num_array);

// Convert all the strings to title caps in a string array

const str_array = ['sudheer', 'lavish', 'guvi', 'javascript'];

console.log('Given Array is ', str_array.toString());

// Anonymous function
str_array.forEach(function (value, index, arr){
    arr[index] = value[0].toUpperCase() + value.substr(1).toLowerCase();
});
console.log('Title case Converted array using Anonymous function: ', str_array.toString());

(function(array){
    for (let index in array){
        array[index] = array[index][0].toUpperCase() +  array[index].substr(1).toLowerCase();
    }
})(str_array);
console.log('Title case Converted array using IIFE function: ', str_array.toString());


// Sum of all numbers in an array

// Anonymous function
console.log('Given array is, ', num_array.toString());
console.log('Sum using anonymous function is ',num_array.reduce(function(sum, value){
    return sum + value;
}, 0));

//IIFE Function
(function(array){
    let sum = 0;
    for (let value of array){
        sum += value;
    }
    console.log('Sum using IIFE function', sum);
})(num_array);


//Return all the prime numbers in an array

console.log('Given array is, ', num_array.toString());

// Anonymous function
console.log('Prime numbers of given array using Anonymous function are,', num_array.reduce(function(prime_array, value){
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


// IIFE function
(function(array){
    let is_prime = true;
    let prime_array = [];
    for (let value of array){
        is_prime = true;
        for (let i=2; i<=Math.sqrt(value); i++){
            if (value%i == 0){
                is_prime = false;
                break;
            }
        }
        if (is_prime){
            prime_array.push(value);
        }
    }
    console.log('Prime numbers of given array using IIFE function are, ', prime_array.toString());
})(num_array);


// Return all the palindromes in an array

const str_array_2 = ["civic", "Sudheer", "Civic", "reviver", "REFER", "html", "css"];
console.log('Given array is ', str_array_2.toString());

// Anonymous function
console.log('Palindromes in the given array found using anonymous function are, ', str_array_2.reduce(function (palindrome_array, value){
    if (value.toLowerCase() === value.split("").reverse().join("").toLowerCase()){
        palindrome_array.push(value)
    }
    return palindrome_array
}, []).toString());

// IIFE function

(function (array){
    let palindrome_array = [];
    for (let value of array) {
        if (value.toLowerCase() === value.split("").reverse().join("").toLowerCase()){
            palindrome_array.push(value);
        }   
    }
    console.log('Palindromes in the given array found using IIFE function are, ', palindrome_array.toString());
})(str_array_2);


// Return median of two sorted arrays of the same size
const sorted_array_1 = [1, 21, 980, 3925, 10203];
const sorted_array_2 = [11029, 2819, 805, 92, 1];

// Anonymous Function
let get_median = function(array){
    let middle = Math.floor(array.length/2);
    if (array.length%2 == 0) return array[middle];
    else return (array[middle] + array[middle-1])/2; 
}

console.log(`Median of array ${sorted_array_1} is ${get_median(sorted_array_1)} using Anonymous function`);
console.log(`Median of array ${sorted_array_2} is ${get_median(sorted_array_2)} using Anonymous function`);

// IIFE function
(function(arrays){
    let median = 0;
    for (let array of arrays){
        let middle = Math.floor(array.length/2);
        if (array.length%2 == 0) median =  array[middle];
        else median = (array[middle] + array[middle-1])/2; 
        console.log(`Median of array ${array} is ${median} using IIFE function`)
    }
})([sorted_array_1, sorted_array_2]);

// Remove duplicates from an array
let num_array_2 = [1, 83, 1, 73, 94, 83, 5];
console.log('Given array is ', num_array_2.toString());

// Anonymous function
let remove_duplicates = function(array){
    const value_map = {};
    for (let index in array) {
        if (value_map[array[index]]){
            num_array_2.splice(index, 1);
        }
        value_map[array[index]] = true;
    }
    return num_array_2;
}

console.log('Array after removing duplicates using Anonymous function:', remove_duplicates(num_array_2).toString());

// IIFE function
num_array_2 = [1, 83, 1, 73, 94, 83, 5];
console.log('Array after removing duplicates using IIFE function: ', (function(array){
    const value_map = {};
    for (let index in array) {
        if (value_map[array[index]]){
            num_array_2.splice(index, 1);
        }
        value_map[array[index]] = true;
    }
    return num_array_2;
})(num_array_2).toString());

// Rotate an array by k times<
let num_array_3 = [1, 2, 3, 4, 5];
let k = 2;
console.log('Given array is ', num_array_3);

// Anonymous function
let shift_array = function(array, k){
    for (let i=0; i<k; i++){
        array.unshift(array.pop());
    }
    console.log(`Array after rotated ${k} times is, ${array} using Anonymous function`);
};
shift_array(num_array_3, k);

// IIFE function
num_array_3 = [1, 2, 3, 4, 5];
(function(array, k){
    for (let i=0; i<k; i++){
        array.unshift(array.pop());
    }
    console.log(`Array after rotated ${k} times is, ${array} using IIFE function`);
})(num_array_3, k);
