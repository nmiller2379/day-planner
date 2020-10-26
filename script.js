//Document.ready function to ensure all the page elements load before jquery begins any DOM manipulation
$( document ).ready(function() {













var time = $(".time-block") 
var calendarTime = (document.querySelector(".hour"))
var computerTime = parseInt(moment().format("HH"))
var currentDay = (moment().format("MMMM Do YYYY"))
// console.log(computerTime)
// console.log(calendarTime.dataset.time)
//console.log(currentDay)
//Display the current day at the top of the app based on moment()
$("#currentDay").text(currentDay)



//event listener for save button

// 
// console.log(moment().format("HH"))
// console.log(calendarTime.dataset.time)
// console.log(typeof moment().format("HH"))
// console.log(calendarTime.dataset.time)

// if (calendarTime === moment().format("HH")) {
//     console.log("In the present");
    
// } else {console.log("Not in the present")
    
// }

// if (calendarTime.dataset.time < computerTime) {console.log("In the past.")
    
// } else {console.log("Not in the past.")
    
// }
//Declare function used to determine relationship between current time and the timeblock on the calendar
// function checkTime() {
//     if (calendarTime.dataset.time < computerTime) {$(".time-check").addClass("past")}
//     if (calendarTime.dataset.time > computerTime) {$(".time-check").addClass("future")}
//     if (calendarTime.dataset.time === computerTime) {$(".time-check").addClass("present")}
    
// }
//Change timeblocks color depending on the time of the day
//checkTime()

// use time/date info to dynamically update page
$(".hour").each(function(i) {
    if (calendarTime.dataset.time > computerTime) {$(".time-check").addClass("past")
        
    } else if (calendarTime.dataset.time > computerTime) {$(".time-check").addClass("future")
        
    } else {$(".time-check").addClass("present")}
    
}
)
});




// 1. figure out how to get time: Done
// 2. Save button??
// 3. Put info in local stoarge
// 4. Reading from local storage
//
