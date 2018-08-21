$(document).ready(function(){

    var vehicles = ["police car", "sports car", "ambulance", "monster truck", "dirt bike", "motorcyle"]

    function createButtons() {
        for (var i = 0; i < vehicles.length; i++) {
            var newGif = $("<button>");
            newGif.attr("data-search", vehicles[i]);
            newGif.addClass("btn");
            newGif.addClass("vehicleGifs");
            newGif.text(vehicles[i]);
            $("#buttonsContainer").append(newGif);
        }
    }

    function userSearch() {
        var userSearch = $("#submitBox").val();

        vehicles.push(userSearch);
        var gifButton = $('<button>')
        gifButton.attr("data-search", userSearch);
        gifButton.addClass("btn");
        gifButton.addClass("vehicle")
        gifButton.text(userSearch);
        $("#buttonsContainer").append(gifButton);
    }
    
    function getGifs() {
        $("#gifs").empty();
        var userTerm = $(this).data('search');
        var key = "&api_key=13u4QGJFdRPWoQBsRno7p7pYIFeOuUCo";
        var limit="&limit=15";
        var queryURL = "https://api.giphy.com/v1/gifs/search?q" + userTerm + limit + key;

        console.log("URL structure is:" + queryURL);

        $.ajax({
            url: queryURL,
            method: "GET",
        }).done(function(response) { 
            for (var j = 0; j < response.data.length; j++){
                var newgifContainer = $('<div>');
                newgifContainer.addClass('gifContainer');
                var rating = response.data[i].rating;
                console.log(rating);
                var rSpan = $('<p>');
                rSpan.addClass('gRating');
                rSpan.text('Rating' + rating);
                var newGif = $('<img>');
                newGif.attr('src', stillLink);
                newGif.attr('data-animate', animateLink);
                newGif.attr('data-still', stillLink);
                newGif.attr('data-state', "still");
                newGif.addClass('gif');
                gifContain.prepend(rSpan);
                gifContain.append(newGif);
                $('#gifs').append(gifContain);
            }
        });
    }

    function clear() {
        $("#gifs").empty();
    }

    createButtons(vehicles);

    $("#submitTerm").click(getGifs());
    $(document).on('click', '.vehicleGifs', getGifs());
});