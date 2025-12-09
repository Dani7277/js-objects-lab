// Initial JavaScript setup
console.log("JavaScript file connected successfully.");

// ----------------------------------
// Step 1: Create student object
// ----------------------------------
const student = {
  name: "Sample Student",
  age: 18,
  enrolled: true,
  courses: ["Biology", "Math"],

  // Basic method to display student info
  displayInfo() {
    return `${this.name} is ${this.age} years old.`;
  }
};

// Logging basic details
console.log("Student Name:", student.name);
console.log("Student Age:", student.age);
console.log("Student Info:", student.displayInfo());
