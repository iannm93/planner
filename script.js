
var currentHour = parseInt(moment().format("H"))

// create a variable that stores the current time
var currentTime = (moment().format("MMMM Do YYYY, h:mm:ss a"))

// create a variable that stores a DIV
var divTime = $("<div>").text(currentTime)
// create a variable that puts the current time inside the div|
// append the divTime to the html
$("#currentDay").append(divTime)








// for each hour
$(".time-block").each(function(){
    

    var timeBlock = parseInt(this.id.split("-")[1]);
    

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
    // stores my element's ID
    var myId = this.id;
    // gets information local storage
    var textInput = JSON.parse(localStorage.getItem(myId));
   
    // finds the text area of child element and sets text value
    $(this).find("textarea").val(textInput)
})


$(".saveBtn").on("click", function () {
    
    
    var parentID = $(this).parent().attr("id");
    var descriptionText = $(this).siblings(".description").val();
    localStorage.setItem(parentID, JSON.stringify(descriptionText));
    
    // save it to local storage
});
   