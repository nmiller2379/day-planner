//$(document).ready(function() {





//})
//create a dynamic, updatable and savable day planner

//declare variables
    //time
    //variables for local storage Wk 4 activity 28 (localStorage.set item, localStorage.get item)


//put inside document.ready

//function to load local storage (wk 4 activity 28)


//function that compares timblock to current time (should come after local storage has been loaded)

//click function for the save button

//When the user clicks save use local storage to retain information
    //Grab info in text area 
    //Grab hour
    //Put them in storage

//Assess current time and based on time change color of text areas
//(Loop through HTML elements like an array. Use .each to loop through them)
//Loop through each hour area -- use if/else statement to compare to current time using the api
    //if time < current time add class past, etc

    //data attribute on timeblock element in 24-hour time
    //use moment in 24-hour time
    //(google jquerry read time attribute)






var time = $(".time-block") 
var calendarTime = (document.querySelector(".hour"))
var computerTime = parseInt(moment().format("HH"))
// console.log(computerTime)
console.log(calendarTime)



//event listener for save button

// 
// console.log(moment().format("HH"))
// console.log(calendarTime.dataset.time)
// console.log(typeof moment().format("HH"))
console.log(calendarTime.dataset.time)

// if (calendarTime === moment().format("HH")) {
//     console.log("In the present");
    
// } else {console.log("Not in the present")
    
// }

// if (calendarTime.dataset.time < computerTime) {console.log("In the past.")
    
// } else {console.log("Not in the past.")
    
// }

function checkTime() {
    if (calendarTime.dataset.time < computerTime) {$(".time-check").addClass("past")}
    if (calendarTime.dataset.time > computerTime) {$(".time-check").addClass("future")}
    if (calendarTime.dataset.time === computerTime) {$(".time-check").addClass("present")}
    
}

checkTime()
// connect o momentsjs API for time/date info

// use time/date info to dynamically update page

// 1. figure out how to get time
// 2. Save button
// 3. Put info in local stoarge
// 4. Reading from local storage
//
