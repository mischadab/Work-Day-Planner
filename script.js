$(document).ready(function () {
    // display current day
    $("#currentDay").text(moment().format('LL'));

    // getting the button to save
    $(".saveBtn").on("click", function(){
        // grab values that are entered into the textarea
        var entry = $(this).siblings(".description").val();
        var timeBl = $(this).parent().attr("id");

        // put in local storage
        localStorage.setItem(timeBl, entry);
    });

        function colorCode(){
            // get current hour that day
            var presentHour = moment().hours();

            // loop through the time blocks using .each() method
            $(".time-block").each(function(){
                var timeSlot = parseInt($(this).attr("id").split("-")[1]);

                 // for past time coloration
                if(timeSlot < presentHour){
                    $(this).addClass("past")
                } else if (timeSlot === presentHour) {
                    $(this).removeClass("past");
                    $(this).addClass("present");
                } else {
                    $(this).removeClass("past");
                    $(this).removeClass("present");
                    $(this).addClass("future");
                }
            });
        }
        colorCode();
    
    // get items from localStorage
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));
    
});