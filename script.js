// ======================================================
// JavaScript Object Manipulation Lab
// Improved + fully commented for clarity
// ======================================================

// ------------------------------
// Part 1: Understanding Objects
// ------------------------------
const student = {
  name: "Liliana",
  age: 17,
  enrolled: true,
  courses: ["Biology", "Chemistry", "Math"],

  // Method: Display student info
  displayInfo() {
    return `${this.name} is ${this.age} years old and enrolled: ${this.enrolled}`;
  },

  // Method: Add a course dynamically
  addCourse(courseName) {
    this.courses.push(courseName);
  },

  // Method: Count total courses
  totalCourses() {
    return this.courses.length;
  }
};

// Logging object values and method results
console.log("=== Part 1: Understanding Objects ===");
console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("Student Info:", student.displayInfo());



// ------------------------------
// Part 2: Working with JSON
// ------------------------------
console.log("\n=== Part 2: JSON Conversion ===");

const jsonString = JSON.stringify(student, null, 2);
console.log("JSON String:\n", jsonString);

const parsedStudent = JSON.parse(jsonString);
console.log("Parsed Object:", parsedStudent);



// ------------------------------
// Part 3: Destructuring
// ------------------------------
console.log("\n=== Part 3: Destructuring ===");

const { name, courses } = student;
console.log("Destructured Name:", name);
console.log("Destructured Courses:", courses);

const scores = [85, 92, 78, 90];
const [firstScore, secondScore] = scores;

console.log("First Score:", firstScore);
console.log("Second Score:", secondScore);



// ------------------------------
// Part 4: Spread Operator
// ------------------------------
console.log("\n=== Part 4: Spread Operator ===");

// Clone student + add a new property
const clonedStudent = {
  ...student,
  graduationYear: 2027
};
console.log("Cloned Student:", clonedStudent);

// Merge arrays using spread
const additionalCourses = ["Physics", "English"];
const mergedCourses = [...student.courses, ...additionalCourses];

console.log("Merged Courses:", mergedCourses);



// ------------------------------
// Part 5: Object Methods
// ------------------------------
console.log("\n=== Part 5: Object Methods ===");

student.addCourse("Programming");
console.log("Updated Courses:", student.courses);

console.log("Total Number of Courses:", student.totalCourses());



// ------------------------------
// Bonus Task: Average Score
// ------------------------------
console.log("\n=== Bonus: Average Score with reduce() ===");

const averageScore =
  scores.reduce((sum, num) => sum + num, 0) / scores.length;

console.log("Average Score:", averageScore.toFixed(2));
