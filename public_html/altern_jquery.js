$(document).ready(function () {
    for(var i = 0 ; i < listeDeFilms.length ; i++){
        var film = listeDeFilms[i];
        $("#content").append(
            $("<div>")
            .append($("<h2>").addClass("title uppercase text-centered").text(film.titre))
            .append($("<img />").addClass("title").attr("src",film.jaquette))
            .append($("<p>").text(film.description).addClass("text-centered")) 
            );
    }    
});