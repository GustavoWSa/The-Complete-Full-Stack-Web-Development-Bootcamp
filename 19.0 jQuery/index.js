$("h1").css("color", "red");
$("button").css("color", "orange");
$("body").on("keydown",function (event){
    $("h1").text(event.key);
});