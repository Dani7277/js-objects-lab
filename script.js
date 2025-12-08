// ================================
// Part 1: Understanding Objects
// ================================

const student = {
  name: "Liliana",
  age: 17,
  enrolled: true,
  courses: ["Biology", "Chemistry", "Math"],

  displayInfo() {
    return `${this.name} is ${this.age} years old and enrolled: ${this.enrolled}`;
  },

  addCourse(newCourse) {
    this.courses.push(newCourse);
  },

  totalCourses() {
    return this.courses.length;
  }
};

console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("Student Info:", student.displayInfo());

// ================================
// Part 2: Working with JSON
// ================================

const jsonString = JSON.stringify(student);
console.log("JSON String:", jsonString);

const parsedStudent = JSON.parse(jsonString);
console.log("Parsed Object:", parsedStudent);

// ================================
// Part 3: Destructuring
// ================================

const { name, courses } = student;
console.log("Destructured Name:", name);
console.log("Destructured Courses:", courses);

const scores = [85, 92, 78, 90];
const [firstScore, secondScore] = scores;

console.log("First Score:", firstScore);
console.log("Second Score:", secondScore);

// ================================
// Part 4: Spread Operator
// ================================

// Clone student
const clonedStudent = { ...student, graduationYear: 2027 };
console.log("Cloned Student:", clonedStudent);

// Merge arrays
const newCourses = ["Physics", "English"];
const mergedCourses = [...student.courses, ...newCourses];

console.log("Merged Courses:", mergedCourses);

// ================================
// Part 5: Object Methods
// ================================

student.addCourse("Programming");
console.log("Updated Courses:", student.courses);

console.log("Total Courses:", student.totalCourses());

// ================================
// Bonus: Reduce to calculate average
// ================================

const averageScore = scores.reduce((sum, val) => sum + val, 0) / scores.length;

console.log("Average Score:", averageScore);
