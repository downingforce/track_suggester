$(document).ready(function(){
  $("#launch_survey").click(function(event) {
    $("#cover_image").hide();
    $("#survey").show();
  });
  $("#survey").submit(function(event) {
    var name = $("input#user_name").val();
    var answer1 = $( "#question1 option:selected" ).text()
    var answer2 = $( "#question2 option:selected" ).text()
    var answer3 = $( "#question3 option:selected" ).text()
    var answer4 = $( "#question4 option:selected" ).text()
    var answer5 = $( "#question5 option:selected" ).text()
    $(".name").text(name);
    if (answer1 === "Yes") {
      $("#design_track").show();
    } else if (answer1 === "No" && answer2 === "Java" || answer4 === "Mobile") {
      $("#android_track").show();
    } else if (answer1 === "No" && answer2 === "C#" || answer4 === "Games") {
      $("#net_track").show();
    } else if (answer1 === "No" && answer2 === "Ruby" || answer4 === "Web Apps") {
      $("#ruby_track").show();
    } else {
      $("#wrong").show();
    }
    event.preventDefault();
  });
});
