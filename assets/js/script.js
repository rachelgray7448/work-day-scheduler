var currentDay = $("#currentDay").text(moment().format("MMMM Do YYYY"));
var now = moment();
var currentTime = now.hour();

console.log(currentTime)



// function for time blocks

timeBlocks = function () {
    $("#10").val(localStorage.getItem("10"));
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