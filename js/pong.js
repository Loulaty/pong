/*parametres de la balle
let largeur = $("#balle").width();
let gauche = parseInt($("#balle").css("left"));
let haut = parseInt($("#balle").css("top"));*/

//relier un objet a la class
let raquette1=new Raquette($("#raquette1"))
raquette1.descend();

let raquette2=new Raquette($("#raquette2"))
raquette2.monte();

let terrain=new Terrain($("#terrain"))
console.log(terrain);

let balle=new Balle($("#balle"))
console.log(terrain);

setInterval(function () {
    // deplacements
    balle.bouge();
    raquette1.bouge();
    raquette2.bouge();
}, 10);

//savoir touche pressée
window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) { return}
    console.log("La touche '"+event.key+ "' a été enfoncée")
    event.preventDefault();
}, true);

//savoir touche relachée
window.addEventListener("keyup", function (event) {
    if (event.defaultPrevented) { return}
    console.log("La touche '"+event.key+ "' a été relachée")
    event.preventDefault();
}, true);