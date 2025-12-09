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
// ----------------------------------
// Step 2: JSON Conversion
// ----------------------------------
console.log("\n=== JSON Conversion ===");

const jsonString = JSON.stringify(student);
console.log("Student JSON:", jsonString);

const parsedStudent = JSON.parse(jsonString);
console.log("Parsed Student Object:", parsedStudent);


// ----------------------------------
// Step 3: Destructuring
// ----------------------------------
console.log("\n=== Destructuring ===");

const { name, courses } = student;
console.log("Destructured Name:", name);
console.log("Destructured Courses:", courses);

const scores = [85, 92, 78, 90];
const [firstScore, secondScore] = scores;

console.log("First Score:", firstScore);
console.log("Second Score:", secondScore);


// ----------------------------------
// Step 4: Spread Operator
// ----------------------------------
console.log("\n=== Spread Operator ===");

const clonedStudent = {
  ...student,
  graduationYear: 2027
};

console.log("Cloned Student:", clonedStudent);

const extraCourses = ["Physics", "Chemistry"];
const mergedCourses = [...student.courses, ...extraCourses];

console.log("Merged Courses:", mergedCourses);


// ----------------------------------
// Step 5: Add Methods to Student
// ----------------------------------
console.log("\n=== Student Methods ===");

student.addCourse = function (courseName) {
  this.courses.push(courseName);
};

student.totalCourses = function () {
  return this.courses.length;
};

student.addCourse("Programming");

console.log("Updated Courses:", student.courses);
console.log("Total Number of Courses:", student.totalCourses());


// ----------------------------------
// Bonus Task: Calculate Average Score
// ----------------------------------
console.log("\n=== Bonus: Average Score ===");

const avgScore =
  scores.reduce((sum, value) => sum + value, 0) / scores.length;

console.log("Average Score:", avgScore.toFixed(2));
