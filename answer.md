1. Write the correct answer from the following options and give an explanation (2-5 lines).
let greeting;
greetign = {};
console.log(greetign);
A: {}
B: ReferenceError: greetign is not defined
C: undefined

Answer: Option A.
Here first we declare a variable named greeting then assain the value of greeting by an empty object. 
so, we will get an empty object as an output.

3. Write the correct answer from the following options and give an explanation (2-5 lines).
function sum(a, b) {
  return a + b;
}

sum(1, "2");
A: NaN
B: TypeError
C: "12"
D: 3

Answer: Option C.
The + operator is overloaded for two distinct operations: numeric addition and string concatenation. When evaluating, it first coerces both operands to primitives.
Then, the two operands' types are tested. If one side is a string, the other operand is also converted to a string and they are concatenated.

3. Write the correct answer from the following options and give an explanation (2-5 lines).
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
A: ['🍕', '🍫', '🥑', '🍔']
B: ['🍝', '🍫', '🥑', '🍔']
C: ['🍝', '🍕', '🍫', '🥑', '🍔']
D: ReferenceError
Answer: Option A.
Here first we declared an arry containing some value. Then we declared an object and done some operation. But we never change the value of our arry. 
so, we will get the same value as an output.

4. Write the correct answer from the following options and give an explanation (2-5 lines).
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
A: Hi there,
B: Hi there, undefined
C: Hi there, null
D: ReferenceError

Answer: Option B.
We have a sayHi function that takes one parameter name and returns a string with a greeting.
when we call sayHi() without passing any arguments, it will console "Hi there, undefined" because we didn't provide a value for the name parameter.

5. Write the correct answer from the following options and give an explanation (2-5 lines).
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
A: 1
B: 2
C: 3
D: 4

Answer: Option C.
Here, num 0 is falsy, so the condition is not met, and count remains 0. But when the num is 1 which is a truthy, so the condition is met, and count will increment to 1.
Also for 2 and three the count will increment to 2 and 3. So the Output will be 3.
