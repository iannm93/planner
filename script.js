var hoursData = {
    9:'',
    10: '',
    11: '',
    12: '' ,
    13: '',
    14: '',
    15: '',
    16: '',
    17: ''
}
// check to see if there's anything in local storage
// update hoursData if localstorage isn't empty
var currentHour = parseInt(moment().format("H"))
console.log(currentHour)
// create a variable that stores the current time
var currentTime = (moment().format("MMMM Do YYYY, h:mm:ss a"))
console.log(currentTime)
// create a variable that stores a DIV
var divTime = $("<div>").text(currentTime)
// create a variable that puts the current time inside the div|
// append the divTime to the html
$("#currentDay").append(divTime)
 console.log(divTime)

// put the

// $(".lead").moment().format('MMMM Do YYYY, h:mm:ss a');

var timeBlockElements = $(".time-block")

// for each hour

timeBlockElements.each(function(){

    var timeBlock = parseInt(this.id.split("-")[1]);
    
// get the hour of the block
    var description = hoursData[timeBlock.toString()];

    // in hours data object
    // get the text area 
    $(this).find("textarea").val(description);

    // find current time
    // if current

    if (timeBlock < currentHour){
        // give past class to hour
        $(this).addClass("past")
    } else if (timeBlock === currentHour){
        // give present class to the hours
        $(this).addClass("present")
    } else {
        // give future class to hour
        $(this).addClass("future")
    }
})


// append the text they type in the form to the form
// also, when they clcik save,
// save it to local storage
$(".saveBtn").on("click", function () {
    var descriptionText = $(this).siblings(".description").val();
    localStorage.setItem("descriptionText", JSON.stringify(descriptionText));
    console.log(descriptionText) //add parent's id
});
var descriptionInput = JSON.parse(localStorage.getItem("descriptionText")); //add parent's id
$(".description").text(descriptionInput);
