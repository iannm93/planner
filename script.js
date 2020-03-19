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