// ============================
// PART 1: Variable Declarations & Conditionals
// ============================

let num1 = 10;
let num2 = 20;
let name = "Kami";

// Conditional Example
if (num1 < num2) {
    console.log(`${num1} is smaller than ${num2}`);
} else {
    console.log(`${num1} is greater than or equal to ${num2}`);
}

// ============================
// PART 2: Custom Functions
// ============================

// Function 1: Add two numbers
function addNumbers(a, b) {
    return a + b;
}

// Function 2: Greet a user
function greetUser(userName) {
    return `Hello, ${userName}! Welcome to JavaScript practice.`;
}

// Using the functions
console.log(addNumbers(5, 7));
console.log(greetUser(name));

// ============================
// PART 3: Loops
// ============================

// Loop 1: For loop to calculate sum
let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum += i;
}
console.log("Sum from 1 to 5:", sum);

// Display sum in DOM
document.getElementById("sum-result").textContent = sum;

// Loop 2: While loop to generate random numbers
let count = 0;
const randomList = document.getElementById("random-list");

while (count < 5) {
    let rand = Math.floor(Math.random() * 100);
    let li = document.createElement("li");
    li.textContent = rand;
    randomList.appendChild(li);
    count++;
}

// ============================
// PART 4: DOM Interactions
// ============================

// 1. Changing text content on button click
document.getElementById("change-text-btn").addEventListener("click", () => {
    document.getElementById("demo-text").textContent = "Text has been changed!";
});

// 2. Changing heading color dynamically
document.getElementById("main-heading").style.color = "darkblue";

// 3. Logging all list items to console
const listItems = document.querySelectorAll("#random-list li");
listItems.forEach(item => console.log("Random number:", item.textContent));


