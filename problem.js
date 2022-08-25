// !problem 1
/* 1) Write an arrow function that will take 3 parameters, will multiply
the parameters and will return the result. */

const totalCost = (apple, banana, mango) => apple * banana * mango;

console.log(totalCost(10, 12, 12));


// !problem 2
/* Write the following sentence in three lines and print the result:
I am a web developer. I love to code. I love to eat biryani. */
console.log(`i am web developer. 
i love to code. 
i love to eat biryani.`)


// !problem 3
/* 3) Write an arrow function that will take 2 parameters: One parameter
will come from you and the other parameter will be a default
parameter. Add these two parameters and return the result. */

const arrow = (a, b = 5) => a * b;
console.log(arrow(10));



// !Problem 4 
/* Write an arrow function where it will do the following:
a) It will take an array where the array elements will be the
name of your friends

b) Check if the length of each element is even, push elements
with even length to a new array and return the result  */

friends = ['reza', 'abul', 'rocko', 'becker'];

const evenFriends = friends.filter(item => {
    return item.length % 2 === 0;
});

console.log(evenFriends);





// !Problem 5/* 
/* Write an arrow function where it will do the following:
a) Square each array element
b) Calculate the sum of the squared elements
c) Return the average of the sum of the squared elements */


var sum = 0
const arr3 = [10, 2, 3, 4, 5, 6]

const arrow3 = arr3.reduce((current, previous) => {
    x = Math.pow(previous, 2);

    return x + current;
}
    , 0)
console.log(arrow3);



// !Problem 6
/* Write an arrow function where it will do the following:

a) It will take two array inputs
b) Combine the two arrays and assign them in a new array
c) Find the maximum number from the new array and return the
result */

const ar1 = [10, 34343, 545, 3];
const ar2 = [3434, 45, 45, 65];
let value = [];
const arrow5 = (ar1, ar2) => {

    for (index in ar1) {
        value[index] = ar1[index] + ar2[index];
    }
    return `${value} this is Max Value ${Math.max(...value)}`;
}
console.log(arrow5(ar1, ar2));



