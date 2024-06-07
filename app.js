let gpa = 0;
let add_button = document.getElementById("add-btn");
let added_grades_div = document.getElementById("added-grades");
let div_grades = document.querySelectorAll("grade");
let calculate_grades_button = document.getElementById("calculate");
let name_input = document.getElementById("name-input");
let grade_input = document.getElementById("grade-input");


add_button.onclick = () => {
  let class_container = document.createElement("div");
  class_container.classList.add("class-container");
  let className = document.createElement("div");
  className.classList.add("name");
  className.innerHTML = name_input.value;
  let classGrade = document.createElement("div");
  classGrade.classList.add("grade");
  classGrade.innerHTML = grade_input.value;

  class_container.appendChild(className);
  class_container.appendChild(classGrade);
  console.log(class_container);
  console.log(added_grades_div)
  added_grades_div.appendChild(class_container)



};


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
};