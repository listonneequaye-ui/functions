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

function greet(name, school) {
    console.log("Hello " + name + "!. Welcome to " + school + ".");        
}

greet(student.name, student.school);


function project(major, goal) {
    console.log("Pursuing " + major + "! & I want to be a " + goal + ".");
}

project(student.major, student.goal);






// Pass parameters out

function adder(num1, num2) {
    console.log (num1 + num2);
}       

adder(5, 10);



function toUpper(num4, num5) {
    console.log (num4 + num5);
}       

toUpper(20, 80);


function subtractor(num4, num5) {
    console.log (num4 - num5);
}   

subtractor(20, 80);




// Creating more fuctions by exploring rows!!

const Programmers = {
    total: "5",
    class: "Advanced",
    Year: "2026",
    Weeks: "3-4 weeks",
};

console.log(Programmers.total, Programmers.class, Programmers.Year, Programmers.Weeks);



const Programers = {
    total: "5",
    class: "Advanced",
    Year: "2026",
    Weeks: "3-4 weeks"
};

console.log(Programers.total),
console.log(Programers.class),
console.log(Programers.Year),
console.log(Programmers.Weeks);


