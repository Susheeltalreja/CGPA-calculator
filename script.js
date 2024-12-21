let points = 0;
let CHR = [];
let totalCHR = 0;
let marks = [];
let Courses = [];
let totalPoints = 0;
let gradeValue = 0;
let getCourse;
let totalCourses;
let CGPA = 0;
let all_course;
function getCourses() {
  let btn = document.querySelector(".btn");
  getCourse = document.querySelector(".total_courses");
  btn.addEventListener("click", () => {
    totalCourses = document.getElementById("courses_input").value;
    getCourse.innerHTML = "";
    //loop use for add feilds on the basis of courses
    for (let j = 1; j <= totalCourses; j++) {
      getCourse.innerHTML += `         <div class="feilds">
                    <label for="course_name_input${j}">Course ${[j]}: </label>
                    <input type="text" placeholder="Enter course name" id="course_name_input${j}">
                    <label for="course_marks_input${j}">Marks</label>
                    <input type="number" placeholder="Enter marks" id="course_marks_input${j}">
                    <label for="course_creditHour_input${j}">Credit Hour</label>
                    <input type="number" placeholder="Enter credit hour" id="course_creditHour_input${j}">
                    <div class="seprator">
                    </div>
                </div>`;
    }
  });
  btn.addEventListener("keypress",function(event){
    if (event.key === "Enter") {
      event.preventDefault();
    totalCourses = document.getElementById("courses_input").value;
    getCourse.innerHTML = "";
    //loop use for add feilds on the basis of courses
    for (let j = 1; j <= totalCourses; j++) {
      getCourse.innerHTML += `         <div class="feilds">
                    <label for="course_name_input${j}">Course ${[j]}: </label>
                    <input type="text" placeholder="Enter course name" id="course_name_input${j}">
                    <label for="course_marks_input${j}">Marks</label>
                    <input type="number" placeholder="Enter marks" id="course_marks_input${j}">
                    <label for="course_creditHour_input${j}">Credit Hour</label>
                    <input type="number" placeholder="Enter credit hour" id="course_creditHour_input${j}">
                    <div class="seprator">
                    </div>
                </div>`;
    }
  }
  });
}
function course_details() {
  //function use for push courses marks and credit hours in array
  totalCourses = document.getElementById("courses_input").value;
  //array an other declare use for previouse null
  Courses = [];
  marks = [];
  CHR = [];
  //loop use for push values in array one by one
  for (let i = 1; i <= totalCourses; i++) {
    let course_name = document.getElementById(`course_name_input${i}`).value;
    //float use for making field float/int/double
    let marks_input = parseFloat(
      document.getElementById(`course_marks_input${i}`).value
    );
    let credit_hour_input = parseFloat(
      document.getElementById(`course_creditHour_input${i}`).value
    );
    Courses.push(course_name);
    marks.push(marks_input);
    CHR.push(credit_hour_input);
  }
  displayCourseDetails();
}
function displayCourseDetails() {
  //loop use for checking the condition for all courses
  all_course = document.getElementsByTagName("ul")[0];
  all_course.innerHTML = "";
  for (let i = 0; i < Courses.length; i++) {
    if (marks[i] >= 60 && marks[i] <= 66) {
      all_course.innerHTML += `<li><h5 class="course_align">Your ${Courses[i]} course is pass with C grade and marks is ${marks[i]}</h5></li>`;
      gradeValue = 2;
      points += gradeValue;
      console.log("Total point: " + points);
    } else if (marks[i] > 66 && marks[i] <= 73) {
      all_course.innerHTML += `<li><h5 class="course_align">Your ${Courses[i]} course is pass with C+ grade and marks is ${marks[i]}</h5></li>`;
      gradeValue = 2.5;
      points += gradeValue;
      console.log("Total point: " + points);
    } else if (marks[i] > 73 && marks[i] <= 80) {
      all_course.innerHTML += `<li><h5 class="course_align">Your ${Courses[i]} course is pass with B grade and marks is ${marks[i]}</h5></li>`;
      gradeValue = 3.0;
      points += gradeValue;
      console.log("Total point: " + points);
    } else if (marks[i] > 80 && marks[i] <= 87) {
      all_course.innerHTML += `<li><h5 class="course_align">Your ${Courses[i]} course is pass with B+ grade and marks is ${marks[i]}</h5></li>`;
      gradeValue = 3.5;
      points += gradeValue;
      console.log("Total point: " + points);
    } else if (marks[i] > 87 && marks[i] <= 100) {
      all_course.innerHTML += `<li><h5 class="course_align">Your ${Courses[i]} course is pass with A grade and marks is ${marks[i]}</h5></li>`;
      gradeValue = 4;
      points += gradeValue;
      console.log("Total point: " + points);
    } else {
      all_course.innerHTML += `<li><h5 class="course_align">Your ${Courses[i]} course is fail and marks is ${marks[i]}</h5></li>`;
      gradeValue = 0;
      points += gradeValue;
      console.log("Total point: " + points);
    }
    //Formula of total points
    totalPoints += gradeValue * CHR[i];
    console.log(totalPoints)
  }
  totalCHR = CHR.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  ); 
  //Formula of CGPA
  //reduce function use for addition in array
  CGPA = totalPoints / totalCHR;
  document.getElementById(
    "TC"
  ).innerHTML = `Your total credit hours is: ${totalCHR}`;
  document.getElementById(
    "TQ"
  ).innerHTML = `Your total Quality point is: ${totalPoints}`;
  // GPA
  let Final_CGPA = CGPA.toFixed(2); 
  document.getElementById("CG").innerHTML = `Your CGPA is: ${Final_CGPA}`;
  document.querySelector(".total_CGPA").innerHTML = `CGPA: ${Final_CGPA}`;
  //this function use for perform addition in array
  let total_marks = marks.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  document.querySelector(
    ".total_marks"
  ).innerHTML = `Total marks: ${total_marks}`;
}
getCourses();
//add eventlistner for submit and check result
let screenWidth = document.querySelector(".contain").offsetWidth;
let vw70 = window.innerWidth * 0.7;
let btn2 = document.querySelector(".btn2");
let IsClicked = false;
btn2.addEventListener("click", () => {
  if(!IsClicked){
    course_details();
    IsClicked = true;
  }
});
//add eventlistner for clear
let btn3 = document.querySelector(".btn3");
btn3.addEventListener("click", () => {
  IsClicked = !IsClicked;
  Courses = [];
  marks = [];
  CHR = [];
  totalCHR = 0;
  totalPoints = 0;
  gradeValue = 0;
  CGPA = 0;
  getCourse.innerHTML = "";
  totalCourses.value = "";
  all_course.innerHTML = "";
  document.getElementById("courses_input").value = "";
  document.getElementById(
    "TC"
  ).innerHTML = `Your total credit hours is: 0`;
  document.getElementById(
    "TQ"
  ).innerHTML = `Your total Quality point is: 0`;
  // GPA 
  document.getElementById("CG").innerHTML = `Your CGPA is: 0`;
  document.querySelector(
    ".total_marks"
  ).innerHTML = `Total marks: 0`;
  document.querySelector(".total_CGPA").innerHTML = `CGPA: 0`;
});
document.querySelector(".btn_main").addEventListener("click", () =>{
  let completeDetailsLeft = screenWidth >= vw70 ? "8px" : "528px";
  document.querySelector(".complete_details").style.left = completeDetailsLeft;
})
document.getElementById("x").addEventListener("click",()=>{
  document.querySelector(".complete_details").style.left = "-100%";
})