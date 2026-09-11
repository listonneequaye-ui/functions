// Create at least one function

const student = {

    name: "Jerry",

    major: "Digital Media",

    school: "Northwest Vista College",

    goal: "UI Designer"

};

console.log(student.name, student.major, student.school, student.goal);



// FUNCTION 1: Pass parameters IN

function greetStudent(name, major) {

    return "Hello " + name + "! Welcome to the " + major + " project.";

}

// FUNCTION 2: Pass parameters IN and OUT

function calculateProjects(completed, total) {

    let remaining = total - completed;

    return remaining;

}

// FUNCTION 3: Pass parameters IN and OUT

function createMessage(name, goal) {

    return name + " is working toward becoming a " + goal + ".";

}

// INVOKE THE FUNCTIONS

let greeting = greetStudent(student.name, student.major);

let projectsLeft = calculateProjects(3, 5);

let careerMessage = createMessage(student.name, student.goal);

// DISPLAY RESULTS ON THE WEBPAGE

document.getElementById("greeting").textContent = greeting;

document.getElementById("projects").textContent =

    "Projects remaining: " + projectsLeft;

document.getElementById("career").textContent = careerMessage;

// ==========================================

// METHOD

// ==========================================

// Using the toUpperCase() method

let schoolName = student.school.toUpperCase();

document.getElementById("school").textContent =

    "School: " + schoolName;

// ==========================================

// EVENT

// ==========================================

// Button click event

document.getElementById("myButton").addEventListener("click", function () {

    document.getElementById("eventMessage").textContent =

        "Great job! You clicked the button and triggered a JavaScript event.";

});