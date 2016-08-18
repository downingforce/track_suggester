$(document).ready(function(){
  $("#launch_survey").click(function(event) {
    $("#cover_image").hide();
    $("#survey").show();
  });

  $("#survey").submit(function(event) {
    var name = $("input#user_name").val();
    var answer1 = $("#question1 option:selected").text()
    var answer2 = $("#question2 option:selected").val()
    var answer3 = $("#question3 option:selected").val()
    var answer4 = $("#question4 option:selected").val()
    var answer5 = $("#question5 option:selected").val()
    $(".name").text(name);

    var android_total = 0;
    var design_total = 0;
    var ruby_total = 0;
    var net_total = 0;

    if (answer1 === "Yes") {
      design_total += 1;
    } else {
      android_total, ruby_total, net_total += 1
    };

    if (answer2 === "Java") {
      android_total += 1;
    } else if (answer2 === "CSS"){
      design_total += 1
    } else if (answer2 === "Ruby"){
      ruby_total += 1
    } else if (answer2 === "C#"){
      net_total += 1
    };

    if (answer3 === "Enterprise") {
      android_total, net_total += 1;
    } else {
      design_total, ruby_total +=1
    };

    if (answer4 === "Mobile") {
      android_total += 1;
    } else {
      design_total, ruby_total, net_total +=1
    };

    if (answer5 === "Mobile Apps") {
      android_total += 1;
    } else if (answer5 === "Business Apps"){
      net_total += 1
    } else if (answer5 === "Web Apps"){
      ruby_total += 1
    } else if (answer5 === "Websites"){
      design_total += 1
    };

    var total_array = [android_total, design_total, ruby_total, net_total];
    var winning_result = 0;

    for (i = 0; i < total_array.length; i++) {
      if (total_array[i] > winning_result) {
        winning_result = total_array[i];
      };
    };

    if (winning_result === android_total) {
      $("#android_track").show();
    } else if (winning_result === design_total) {
      $("#design_track").show();
    } else if (winning_result === ruby_total) {
      $("#ruby_track").show();
    } else if (winning_result === net_total) {
      $("#net_track").show();
    } else {
      $("#empty").show();
    };

    event.preventDefault();
  });
});
