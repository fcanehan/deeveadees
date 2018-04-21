
var listeDeFilms = [
	{
                id:1,
		titre : "The dark night",
		jaquette : "./images/darknight.jpg",
                category: "action",
		description : "batman tape des méchants",
                acteur :"batman",
                realisateur :"robin",
                annee :"2000",
                link :"./The Dark Night.html"
	},
	{
                id:2,
		titre : "La communauté de l'anneau",
		jaquette : "./images/communautedelanneau.jpg",
                category: "aventure",
		description : "frodon part détruire l'anneau",
                acteur :"frodon",
                realisateur :"smeagol",
                annee :"2008",
                link :"./La communauté de l'anneau.html"
	},
	{
                id:3,
		titre : "le dictateur",
		jaquette : "./images/dictateur.jpg",
                category: "humour",
		description : "chaplin bosse à l'usine",
                acteur :"chaplin",
                realisateur :"adolf",
                annee :"1935",
                link :"./Le dictateur.html"
        },
	{
                id:4,
		titre : "The dark night rises",
		jaquette : "./images/darknightrises.jpg",
                category: "action",
		description : "batman tape d'autres méchants",
                acteur :"joker",
                realisateur :"batman",
                annee :"2002",
                link:"./The dark night rises.html"
        },
        {
                id:5,
		titre : "Les deux tours",
		jaquette : "./images/lesdeuxtours.jpg",
                category: "aventure",
		description : "les deux tours sont copines",
                acteur :"frodon",
                realisateur :"smeagol",
                annee :"2010",
                link:"./Les deux tours.html"
        },
        {
                id:6,
		titre : "la vie est belle",
		jaquette : "./images/vieestbelle.jpg",
                category: "humour",
		description : "un père en galère",
                acteur :"fellini",
                realisateur :"un italien",
                annee :"1990",
                link :"./La vie est belle.html"
        },
        {
                id:7,
		titre : "warrior",
		jaquette : "./images/warrior.jpg",
                category: "action",
		description : "un autre gars tape des méchants",
                acteur :"un gars",
                realisateur :"neseprononcepas",
                annee :"2007",
                link :"./Warrior.html"
        },
        {
                id:8,
		titre : "le retour du roi",
		jaquette : "./images/retourduroi.jpg",
                category: "aventure",
		description : "le roi des gentils revient",
                auteur :"boromir",
                realisateur :"smeagol",
                annee :"2012",
                link:"./Le retour du roi.html"
        },
        {
                id:9,
		titre : "intouchables",
		jaquette : "./images/intouchables.jpg",
                category: "humour",
		description : "un assistant de vie",
                acteur :"omar",
                realisateur :"fred",
                annee :"2012",
                link: "./Intouchables.html"
        }
];


var contenu = document.getElementById("content");


duplicateTemplate();


function createEverything(){
    for(var i = 0 ; i < listeDeFilms.length ; i++){
        var film = listeDeFilms[i];
        var div = document.createElement("div");
        //gestion du titre :
        var baliseTitre = document.createElement("h2");
        baliseTitre.innerHTML = film.titre;
        baliseTitre.className = "title uppercase text-centered";
        div.appendChild(baliseTitre);
        //gestion de l'image :
        var image = document.createElement("img");
        image.setAttribute("src",film.jaquette);
        image.setAttribute("class","titre");
        div.appendChild(image);
        //gestion de la description

        // après avoir fabriqué notre structure de film
        contenu.appendChild(div);
    }
}

function duplicateTemplate(){
    for(var i = 0 ; i < listeDeFilms.length ; i++){
        var film = listeDeFilms[i];
        // duplication de la balise "template"
        var template = document.getElementById("film").cloneNode(true);
        template.id = film.id;
        template.className = "";
        // recuperation des enfants de la balise
        var baliseTitre = template.children[0];
        var baliseImage = template.children[1];
        var baliseDescription = template.children[2];
        // mise a jour des données dans la vue
        baliseTitre.innerHTML = film.titre;
        baliseImage.setAttribute("src",film.jaquette);        
        baliseImage.setAttribute("onclick","show("+film.id + ");" );
        baliseDescription.innerHTML = film.description;
        
        contenu.appendChild(template);
    }
}