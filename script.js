$(document).ready(function () {
  const currentDate = moment().format("MMMM Do, YYYY");

  $("#currentDay").text(currentDate);

  //   color code based on time
  function colorCode() {
    let currentHour = moment().hour();

    $(".time-block").each(function () {
      const blockHour = parseInt($(this).attr("id").split("-")[1]);

      if (blockHour < currentHour) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      } else if (blockHour === currentHour) {
        $(this).removeClass("past");
        $(this).removeClass("future"),
        $(this).addClass("present");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }

  colorCode(); 

  const interval = setInterval(colorCode, 60)

  // button functionality
  $(".saveBtn").click(function () {
    let task = $(this).siblings(".task").val();
    let time = $(this).parent().attr("id");

    localStorage.setItem(time, task);
  });

  // create local storage
  $("#hour-0 .task").val(localStorage.getItem("hour-0"));
  $("#hour-1 .task").val(localStorage.getItem("hour-1"));
  $("#hour-2 .task").val(localStorage.getItem("hour-2"));
  $("#hour-3 .task").val(localStorage.getItem("hour-3"));
  $("#hour-4 .task").val(localStorage.getItem("hour-4"));
  $("#hour-5 .task").val(localStorage.getItem("hour-5"));
  $("#hour-6 .task").val(localStorage.getItem("hour-6"));
  $("#hour-7 .task").val(localStorage.getItem("hour-7"));
  $("#hour-8 .task").val(localStorage.getItem("hour-8"));
  $("#hour-9 .task").val(localStorage.getItem("hour-9"));
  $("#hour-10 .task").val(localStorage.getItem("hour-10"));
  $("#hour-11 .task").val(localStorage.getItem("hour-11"));
  $("#hour-12 .task").val(localStorage.getItem("hour-12"));
  $("#hour-13 .task").val(localStorage.getItem("hour-13"));
  $("#hour-14 .task").val(localStorage.getItem("hour-14"));
  $("#hour-15 .task").val(localStorage.getItem("hour-15"));
  $("#hour-16 .task").val(localStorage.getItem("hour-16"));
  $("#hour-17 .task").val(localStorage.getItem("hour-17"));
  $("#hour-18 .task").val(localStorage.getItem("hour-18"));
  $("#hour-19 .task").val(localStorage.getItem("hour-19"));
  $("#hour-20 .task").val(localStorage.getItem("hour-20"));
  $("#hour-21 .task").val(localStorage.getItem("hour-21"));
  $("#hour-22 .task").val(localStorage.getItem("hour-22"));
  $("#hour-23 .task").val(localStorage.getItem("hour-23"));
});
