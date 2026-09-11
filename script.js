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


<br></br>

// Pass parameters in

function greet(name, school) {
    console.log("Hello " + name + "! Welcome to the " + school + " project.");
}           

greet(student.name, student.school);



// Pass parameters out

function calculateProjects(completed, total) {
    let remaining = total - completed;
    return remaining;
}


let projectsRemaining = calculateProjects(5, 10);




