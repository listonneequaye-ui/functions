// Create at least one function

const student = {
    name: "Jerry",
    major: "Digital Media",
    school: "Northwest Vista College",
    goal: "UI Designer"
};


console.log(student.name);
console.log(student.major);
console.log(student.school);
console.log(student.goal);




// Pass parameters in

function greet(student) {
    console.log("Hello " + student.name + "! Welcome to the " + student.school + " project.");
}           

greet(student.name, student.school);



