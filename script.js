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
    })










    
});