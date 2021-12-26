$(document).ready(function() {
    $(document).keypress(function(event){
        $("h1").text(event.key);
    })

    $("input").keypress(function(event) {
        console.log(event.key);
    })
});

