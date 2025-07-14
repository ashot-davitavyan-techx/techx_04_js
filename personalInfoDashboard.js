let firstName = "Ashot";
let lastName = "Davitavyan";
let birthYear = 2003;
let currentYear = 2025;
let isStudent = false;
let hobbies = ["Gym", "Coding", "Fent"];
let contact = {
    email: "ashotd03@gmail.com",
    phone: 96001189,
    city: "Yerevan"
};

console.log(`Hi, my name is ${firstName} ${lastName}. I live in ${contact.city}`);
console.log(`I am ${currentYear-birthYear} years old and currently ${isStudent ? "a student" : "not a student"}`);

// Type Cercion & Comparison
ageString = "25";
ageNumber = 25;

console.log(`25(string) and 25(number) regular comparison result: ${ageString == ageNumber}`);
console.log(`25(string) and 25(number) strict comparison result: ${ageNumber === ageString}`);

// if else practice

let score = 50;
let grade;

if (score >= 90 && score <= 100){
    grade = ("A");
} else if (score >= 80 && score <= 89){
    grade = ("B");
} else if (score >= 70 && score <= 79){
    grade = ("C");
} else if (score >= 60 && score <= 69){
    grade = ("D");
} else {
    grade = ("F");
}

// Switch section

switch(grade){
    case "A":
        console.log("Excellent Work!");
        break;
    case "B":
        console.log("Good Job");
        break;
    case "C":
        console.log("Keep Going");
        break;
    case "D":
        console.log("Dig Deeper");
        break;
    case "F":
        console.log("Kill Yourself");
        break;
}

// Ternary operator

console.log(`${grade <= "C" ? "Success" : "Fail"}`);