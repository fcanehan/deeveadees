$(document).ready(function () {
    
    var ul = $("<ul>");                         // creation de la variable ul qui cree la balise "ul"
    
    for ( i = 0 ; i < 10 ; i++){                // boucle qui cree une balise "li" imprimant le text "lien + valeur de i+1"
        var li=$("<li>").text("lien" + (i+1));  // tant que la valeur de i n'est pas atteinte
        $(ul).append(li);                       // link jquery pour rattacher la variable li à la balise ul
    }
    
    

    $("#content").append($("<div>").text("putain si ca "));
    
    var albator = $("<div>").text("albator");
    
    $("#content").append(albator);
    
    $("#content").append(ul);                   // impression de la variable ul
});