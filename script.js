//Task No  1
//a.	Print odd numbers in an array
//Anonymous Function
var array = [1, 2, 3, 4, 5, 6, 6, 7, 8, 9, 10];
console.log("1a.	Print odd numbers in an array\nInputs : ", ...array);

var findOddNumbers = function (array) {
  for (var n of array) {
    if (n % 2 != 0) console.log(n);
  }
};
console.log("Oddnumbers:\nAnonymous");
findOddNumbers(array);
//a.	Print odd numbers in an array
//*********IIFE***********
console.log("IIFE :");
(function (array) {
  for (var n of array) {
    if (n % 2 != 0) console.log(n);
  }
})(array);

/*b.	Convert all the strings to title caps in a string array*/

//anonymous function
array = ["hello", "how", "apple", "mango."];

console.log("Task 1-b (Title Caps):Inputs : ", ...array);

var initCaps = function () {
  for (var i in array) {
    array[i] = array[i].replace(array[i][0], array[i][0].toUpperCase());
  }
};
initCaps(array);
console.log("Anonymous :", ...array);

array = ["hello", "banana", "apple", "mango."];

//IIFE

((array) => {
  for (var i in array) {
    array[i] = array[i].replace(array[i][0], array[i][0].toUpperCase());
  }
})(array);
console.log("IIFE", ...array);

//*******c.	Sum of all numbers in an array***********
//anonymous function
array = [10, 10, 10, 10, 10, 10];
console.log("Task 1c Sum of all numbers in an array\nInput :", ...array);

var sumOfArray = function (array) {
  var sum = 0;
  for (var n of array) {
    sum += n;
  }

  return sum;
};

console.log("Anonymous :", sumOfArray(array));

//IIFE
console.log(
  "IIFE :",
  (function (array) {
    var sum = 0;
    for (var n of array) {
      sum += n;
    }
    return sum;
  })(array)
);

//d.	Return all the prime numbers in an array
//***********Anonymous************

array = [2, 5, 7, 9, 65, 4, 11];
console.log("1d.	Return all the prime numbers in an array\nInput :", ...array);

// this funtion checks if a number is prime or not
// returns a boolean
var isPrime = function isPrime(n) {
  //iterates from i=2 till  i <= (sqrt(n))
  //if n is divisible by any i, then its not a prime
  for (var i = 2; i * i <= n; i++) {
    if (n % i == 0) {
      /* n is not prime*/
      return false;
    }
  }
  /* n is prime => no perfect divisor found for n*/
  return true;
};
// this function Returns all the prime numbers in an array
// returns an array

var findPrimes = function (array) {
  var primes = [];
  for (var n of array) {
    if (isPrime(n)) primes.push(n);
  }
  return primes;
};
console.log("Anonymous : ", findPrimes(array));

/****************IIFE********************/

console.log(
  "IIFE :",
  (function (array) {
    var primes = [];
    for (var n of array) {
      if (isPrime(n)) primes.push(n);
    }
    return primes;
  })(array)
);

//e.	Return all the palindromes in an array
//***********Anonymous************

array = ["madam", "hello", "lol", "no", "12221", "noon"];
console.log("1e.	Return all the palindromes in an array\nInput :", ...array);
// this funtion checks if a string is palindrome
// returns a boolean
var isPalindrome = function (s) {
  var n = s.length;
  for (var i = 0; i < n / 2; i++) {
    //check first and last char
    //and then second and second from last and so on
    if (s[i] != s[n - 1 - i]) {
      return false;
    }
  }
  return true;
};
// this function Returns all the palindromes in an array
// returns an array

var findPalindromes = function (array) {
  var palindromes = [];
  for (var n of array) {
    if (isPalindrome(n)) palindromes.push(n);
  }
  return palindromes;
};
console.log("Palindromes:\nAnonymous :", ...findPalindromes(array));

/****************IIFE********************/

console.log(
  "IIFE :",
  ...(function (array) {
    var palindromes = [];

    for (var s of array) {
      var isPalindrome = true;
      var n = s.length;
      for (var i = 0; i < n / 2; i++) {
        if (s[i] != s[n - 1 - i]) {
          isPalindrome = false;
        }
      }
      if (isPalindrome) palindromes.push(s);
    }
    return palindromes;
  })(array)
);
//f.	Return median of two sorted arrays of the same size.

var a = [1, 11, 8];
var b = [2, 3, 5];
console.log(
  "\n 1 f .Return median of two sorted arrays of the same size.\nInputs : ",
  "\narray 1 : ",
  a,
  "\narray 2 : ",
  b
);

//Anonymous

var median = function (a, b) {
  var c = [];
  var n = a.length; // arrays are of same length , so mid element is the median
  var i = 0,
    j = 0; // i points to a ;j points to b
  var k = 0; // k is the pointer to new array c= merging a and b
  //median is the average of middle 2 elements as new array size will be 2*n=>even
  //so its enough to find until mid 2 elements which are c[n-1],c[n]
  while (k <= n) {
    if (a[i] <= b[j]) {
      c[k++] = a[i++];
    } else {
      c[k++] = b[j++];
    }
  }
  return (c[k - 1] + c[k - 2]) / 2;
};

console.log("Median :\nAnonymous function:", median(a, b));

//IIFE
console.log(
  " IIFE :",
  ((a, b) => {
    var c = [];
    var n = a.length; // arrays are of same length
    var i = 0,
      j = 0; // i points to a ;j points to b
    var k = 0; // k is the pointer to new array c= merging a and b
    //median is the average of middle 2 elements as new array size will be 2*n=>even
    //so its enough to find until mid 2 elements which are c[n-1],c[n]
    while (k <= n) {
      if (a[i] <= b[j]) {
        c[k++] = a[i++];
      } else {
        c[k++] = b[j++];
      }
    }
    return (c[k - 1] + c[k - 2]) / 2;
  })(a, b)
);

//g.	Remove duplicates from an array

//anonymous
a = [1, 2, 3, 1, 1, 4, 5, 2, 3, 3, 8];

console.log(" 1 g.	Remove duplicates from an array\nInputs : ", ...a);
var removeDuplicates = function (a) {
  a.sort();
  //console.log(a);
  var k = 0;
  for (var i = 1; i < a.length; i++) {
    if (a[i] != a[k]) {
      a[++k] = a[i];
    }
  }
  //console.log(a, "k", k);
  for (var i = a.length - 1; i > k; i--) a.pop();
};
removeDuplicates(a);
console.log("Anonymous");
console.log(a);
a = [1, 2, 3, 1, 1, 4, 5, 2, 3, 3, 8];

//IIFE
(function (a) {
  a.sort();
  //console.log(a);
  var k = 0;
  for (var i = 1; i < a.length; i++) {
    if (a[i] != a[k]) {
      a[++k] = a[i];
    }
  }
  //
  for (var i = a.length - 1; i > k; i--) a.pop();
})(a);
console.log("IIFE");
console.log(a);

//h.	Rotate an array by k times

a = [1, 2, 3, 4, 5, 6];
console.log(
  " h.	Rotate an array by k times \nInputs : ",
  ...a,
  "\nRotate by k=3"
);
//Anonymous
var rotate = function (a, k) {
  k %= a.length; //find the effective number of rotations since rotating by length of array is of no effect
  /*
    split the array from last k elements and
    then rest of elements
    join both the slices
    */
  var r = a.slice(-k).concat(a.slice(0, a.length - k));
  return r;
};
console.log("Anonymous :", rotate(a, 3));

console.log(
  "IIFE :",
  ((a, k) =>
    a.slice(-(k % a.length)).concat(a.slice(0, a.length - (k % a.length))))(
    a,
    3
  )
);

//***********task 2A - print odd numbers *********/
var array = [1, 2, 3, 4, 5, 6, 6, 7, 8, 9, 10];
console.log("\nARROW FUNCTIONS\ntask 2a print odd numbers \nInputs : ", array);

// *******Arrow function********

// Method using forEach
console.log("Odd numbers");
array.forEach((n) => {
  if (n % 2 != 0) console.log(n);
});

/*b.	Convert all the strings to title caps in a string array*/

//ARROW functions
array = ["hello", "how", "apple", "mango."];

console.log(
  "Task 2 b Convert all the strings to title caps in a string array\n:Inputs : ",
  ...array
);

var initCaps = (array) => {
  //replace the first char of each string to its uppercase
  for (var i in array) {
    array[i] = array[i].replace(array[i][0], array[i][0].toUpperCase());
  }
};

array = ["hello", "how", "apple", "mango."];
//calling the function
initCaps(array);
console.log(...array);

//*******c.	Sum of all numbers in an array***********
//ARROW function

array = [10, 10, 10, 10, 10, 10];
console.log(" 2 C Sum of all numbers in an array*\nInput :", ...array);
console.log(
  "sum :",
  ((...array) => {
    var sum = 0;
    for (var n of array) {
      sum += n;
    }
    return sum;
  })(10, 10, 10, 10, 10, 10)
);

//2.d.	Return all the prime numbers in an array
//Arrow functions

array = [2, 5, 7, 9, 65, 4, 11];
console.log(" 2 d Return all the prime numbers in an array\nInput :", ...array);
var isPrime = (n) => {
  //iterates from i=2 till  i <= (sqrt(n))
  //if n is divisible by any i, then its not a prime
  for (var i = 2; i * i <= n; i++) {
    if (n % i == 0) {
      /* n is not prime*/
      return false;
    }
  }
  /* n is prime => no perfect divisor found for n*/
  return true;
};

var findPrimes = (array) => {
  let primes = [];
  for (let n of array) {
    if (isPrime(n)) primes.push(n);
  }
  return primes;
};
console.log("Primes :", findPrimes(array));

//e.	Return all the palindromes in an array
//***********Arrow functions************

array = ["madam", "hello", "lol", "no", "12221", "noon"];
console.log("task 2 e Return all the palindromes in an array\nInput:", array);
// this funtion checks if a string is palindrome
// returns a boolean
var isPalindrome = (s) => {
  var n = s.length;
  for (var i = 0; i < n / 2; i++) {
    //check first and last char
    //and then second and second from last and so on
    if (s[i] != s[n - 1 - i]) {
      return false;
    }
  }
  return true;
};
// this function Returns all the palindromes in an array
// returns an array
var findPalindromes = (array) => {
  let palindromes = [];
  for (var s of array) {
    if (isPalindrome(s)) palindromes.push(s);
  }
  return palindromes;
};

console.log("Palindromes :", findPalindromes(array));
