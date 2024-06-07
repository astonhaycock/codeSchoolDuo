let gpa = 0;
let add_button = document.getElementById("add-btn");
let added_grades_div = document.querySelector("added-grades");
let div_grades = document.querySelectorAll("grade");
let calculate_grades_button = document.getElementById("calculate");
let getGPA = () => {
    div_grades.forEach((input) => {
        if (parseInt(input.value) >= 90) {
            gpa += 4;
        } else if (parseInt(input.value) >= 80) {
            gpa += 3;
        } else if (parseInt(input.value) >= 70) {
            gpa += 2;
        } else if (parseInt(input.value) >= 60) {
            gpa++;
        }
    });
    return gpa;
};
calculate_grades_button.onclick = () => {
    
};