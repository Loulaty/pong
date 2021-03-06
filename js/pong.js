//mise en lien des objets
let terrain = new Terrain($("#terrain"));
let balle = new Balle($("#balle"));
let raquetteD = new Raquette($("#droite"), $("#J1"));
let raquetteG = new Raquette($("#gauche"),$("#J2"));
let demarrer = false
//faire bouger les objets
setInterval(function()
{
    if(demarrer){
    balle.bouger();
    raquetteG.bouger();
    raquetteD.bouger();
    }
}, 10);

$("#btn-jouer").on("mouseup", function (event) {
    event.preventDefault();
    demarrer = true;
    $("#ecran-debut").addClass("invisible");
});

//faire deplacer les raquettes avec les touches
//detecter une touche pressée
window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {return}
    if (event.key === "a" || event.key === "A")
    {
        raquetteG.monter();
    }

    else if (event.key === "q" || event.key === "Q")
    {
        raquetteG.descendre();
    }

    else if (event.key === "p" || event.key === "P")
    {
        raquetteD.monter();
    }

    else if (event.key === "m" || event.key === "M")
    {
        raquetteD.descendre();
    }

    event.preventDefault();
}, true);

//detecter une touche lachée
window.addEventListener("keyup", function (event)
{
    if (event.defaultPrevented) {return}
    if (event.key === "a"
        || event.key === "A"
        || event.key === "q"
        || event.key === "Q")
    {
        raquetteG.arret();
    }

    else if (event.key === "q" || event.key === "Q")
    {
        raquetteG.arret();
    }

    if (event.key === "p"
        || event.key === "P"
        || event.key === "m"
        || event.key === "M")
    {
        raquetteD.arret();
    }

    event.preventDefault();
}, true);