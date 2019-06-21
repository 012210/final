var pictures = [
    "pics/50.jpg",
    "pics/30.jpg",
    "pics/10.jpg",
    "pics/20.jpg",
]

$(document).ready(function() {
    $("input").click(function()
    {
        var numberOfListItem = $("li").length;
        var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        
        $("H1").text($("li").eq(randomChildNumber).text());
        $("img").attr("src",pictures[randomChildNumber]);
    });
});





