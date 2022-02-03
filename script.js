$("button").click(function() {
    var question1 = $(".answer1").val();
    var question2 = $(".answer2").val();
     $(".Final").text("You were born in " + question1 + " and your sign is " + question2 + " Which indicates that you are like the season");
    $(".Final").show();
    console.log(".Final");
});