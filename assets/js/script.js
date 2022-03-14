var currentDay = $("#currentDay").text(moment().format("MMMM Do YYYY"));
var now = moment();
var currentTime = now.hour();

// function for time blocks

timeBlocks = function () {
    $("#9").val(localStorage.getItem("9"));
    $("#10").val(localStorage.getItem("10"));
    $("#11").val(localStorage.getItem("11"));
    $("#12").val(localStorage.getItem("12"));
    $("#1").val(localStorage.getItem("1"));
    $("#2").val(localStorage.getItem("2"));
    $("#3").val(localStorage.getItem("3"));
    $("#4").val(localStorage.getItem("4"));
    $("#5").val(localStorage.getItem("5"));

    for (let i = 0; i < $(".time-block").length; i++) {
        var time = ($(".time-block")[i].id.split("-")[1])
        if (time < currentTime) {
            $(".time-block")[i].classList.add("past");
        }
        else if (time == currentTime) {
            $(".time-block")[i].classList.add("present");
        }
        else {
            $(".time-block")[i].classList.add("future");
        }   
    }
}

// function for save button
$(".saveBtn").click(function() {
    console.dir($(this));
    localStorage.setItem($(this)[0].previousElementSibling.id, $(this)[0].previousElementSibling.value.trim());
  });

  1
timeBlocks();