/*
array
*/
/*
let a = 10
let b = 20
let c = 30
console.log('a' ,a ,'b:' ,b ,'c:',c)

let ages = [10,20,30] //array 3 items
console.log('ages:',ages)
console.log('ages[1]:',ages[1])

//1.แทนที่ ค่าข้อมูลใน array
ages = [15,25]
console.log('ages list:',ages)

ages.push(35)
console.log('ages after push:',ages)

ages.pop()
console.log('ages after pop:',ages)
*/

/*
array
*/
/*
let ages = [25 ,30 ,35 ,40 ,45]
console.log('Ages:',ages)

let fruits = ['Apple','banana','cherry']
console.log('fruits:',fruits)
fruits.push('mango')
console.log('fruits after push:',fruits)
console.log('first fruits:',fruits.length)

for (let i = 0; i < .length; i++){
    console.log(`fruits at index ${i}:`,fruits[i])
}
*/

/*
object
*/

/*
let age1 = 30 
let name1 = "john"
let grade1 = 'A'

let age2 = 30 
let name2 = "jim"
let grade2 = 'A'
*/

/*
let student1 = [{
    age:30
    name: "john"
    grade: 'S'
},{
    age:25
    name: "jo"
    grade: 'A'
}]

for (let i = 0; i < student.length; i++){
console.log("student"+ (i + 1)+":");
console.log('name:',student[i].name);
console.log('age:',student[i].age);
console.log('grade:',student[i].grade);
}

student.push({
   age:28
    name: "jane"
    grade: 'C' 
})
console.log("Added new student:", student[student.length - 1]);

student.pop();
console.log("Removed last student. Current students:",student);
*/

/*
function
*/

/*
let score1 = 10
let score2 = 80
//ประกาศ function
function calculation_grade(score){
if (score1 >= 80) {
    grade ='A'
} else if (score >= 70){
    grade = 'B'
} else if (score >= 60){
    grade = 'C'
} else if (score >= 50){
    grade = 'D'
} else {
    grade = 'F'
}
return grade
}

// เรียกใช้ function calculation_grade เพื่อหาค่าเกรดจากคะแนนที่กำหนด
let grade1 = calculation_grade(score1)
let grade2 = calculation_grade(score2)
console.log('Score1:' + score1 + ',Grade:' + grade1)
console.log('Score2:' + score2 + ',Grade:' + grade2)
*/

/*
array
*/

/*
let scores = [90,80,70,60,50];

for (let i = 0; i < scores.length; i++){
    console.log(`Score ${i + 1}: ${scores[i]}`);
}

scores = scores.map((s) => {
      return s *2;
})

score.forEach((s) => {
    console.log(`score:`,s);

})
*/

/*
let scores = [90,80,70,60,50];
let newScores = []

for (let i = 0; i < scores.length; i++){
   console.log(scores[i]);
   // if (score[i] >= 60){
   //     newScores.push(scores[i]);
   // }
}

let newScores = scores.filter(function(score){
    return score >= 70;
})

newScores.forEach((ns) {
    console.log('new scores:'+ ns)
})
*/

/*
object funtion
*/

let students = [
    {name: "john", age: 20 , grade: "A"}
    {name: "jane", age: 21 , grade: "B"}
    {name: "jim", age: 22 , grade: "C"}

]
console.log ('Student',students[0]);

let student = students.find((s) => {
    return s.name === "jim" 
})
let dubblescoreStudents = students.map((s) => {
    s.age = s.age *2;
    return s;
})
let highGradeStudents = students.filter((s) => {
    return s.grade === 'A';
})

console.log ('Found Student',student);
console.log ('Dubble Score Student',dubblescoreStudents);
onsole.log ('High Grade Students',highGradeStudents);