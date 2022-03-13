var currentDay = $("#currentDay").text(moment().format("MMMM Do YYYY"));
var currentTime = moment().format("LT");


// function for time blocks

timeBlocks = function () {
    $("#10").val(localStorage.getItem("10"));
    //if (time)
    for (let i = 0; i < $(".time-block").length; i++) {
        var time = ($(".time-block")[i].id.split("-")[1])
        if (time < currentTime) {
            
        }
        
    }
}



// function for save button
$(".saveBtn").click(function() {
    console.dir($(this));
    localStorage.setItem($(this)[0].previousElementSibling.id, $(this)[0].previousElementSibling.value.trim());
  });



timeBlocks();