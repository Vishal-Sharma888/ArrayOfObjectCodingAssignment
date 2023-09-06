let studentRecords = [ {name: 'John', id: 123, marks : 98 },
{name: 'Baba', id: 101, marks : 23 },
{name: 'yaga', id: 200, marks : 45 },
{name: 'Wick', id: 115, marks : 75 } ] 

console.log("Soluction 1:-")
console.log(studentRecords.map((e)=>e.name.toUpperCase()))


console.log('Soluction 2:-')
let highScorers = studentRecords.filter(student => student.marks > 50);

console.log(highScorers);

console.log("Soluction 3:-")
let filteredStudents = studentRecords.filter(student => student.marks > 50 && student.id > 120);
console.log(filteredStudents);

console.log("Soluction 4:-")
let more_than_50 = studentRecords.filter(student => student.marks < 50);
let highScoringStudents = studentRecords.filter(student => student.marks > 50);

console.log("Soluction 5:-")
let highScoringNames = highScoringStudents.map(student => student.name);
console.log(highScoringNames);


console.log("Soluction 6:-")
let sumMarks = studentRecords.reduce((sum, student) => {
    if (student.id > 120) {
        return sum + student.marks;
    }
    return sum;
}, 0);

console.log('Sum of marks for students with id > 120:', sumMarks);

console.log("Soluction 7:-")

let adjustedStudentRecords = studentRecords.map(student => {
    if (student.marks < 50) {
        student.marks += 15;
    }
    return student;
});

let totalMarks = adjustedStudentRecords
    .filter(student => student.marks > 50)
    .reduce((sum, student) => sum + student.marks, 0);

console.log('Total marks for students with marks > 50 after adding grace:', totalMarks);

console.log("Soluction 8:-")
// Define the class for the objects
class Student {
    constructor(name, className, rollNo) {
      this.name = name;
      this.className = className;
      this.rollNo = rollNo;
    }
  }
  
  const student1 = new Student("John Doe", "Class A", 101);
  const student2 = new Student("Jane Smith", "Class B", 102);
  const student3 = new Student("Alice Johnson", "Class A", 103);
  const student4 = new Student("Bob Williams", "Class C", 104);
  const student5 = new Student("Eva Brown", "Class B", 105);
  const student6 = new Student("Michael Davis", "Class C", 106);
  
  // Store the objects in an array
  const studentArray = [student1, student2, student3, student4, student5, student6];
  
  console.log(studentArray);
  


  
  



