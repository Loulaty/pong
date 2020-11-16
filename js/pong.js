//parametres de la balle
let largeur = $("#balle").width();
let gauche = parseInt($("#balle").css("left"));
let haut = parseInt($("#balle").css("top"));

//relier un objet a la class
let raquette1=new Raquette($("#raquette1"))
raquette1.descend();

let raquette2=new Raquette($("#raquette2"))
raquette2.monte();

let terrain=new Terrain($("#terrain"))
console.log(terrain);

let balle=new Balle($("#balle"))
console.log(terrain);


//faire une boucle rebond
let i=0;
setInterval(function () {
    balle.gauche = balle.gauche +balle.vitesseX;
    balle.haut = balle.haut + balle.vitesseY;
    if (balle.gauche > terrain.largeur - balle.diametre) {
        balle.gauche = terrain.largeur - balle.diametre;
        balle.vitesseX = balle.vitesseX*-1;
    }

    if (balle.gauche <0 ) {
        balle.gauche = 0;
        balle.vitesseX = balle.vitesseX*-1;
    }
    if (balle.haut > terrain.hauteur - balle.diametre) {
        balle.haut = terrain.hauteur- balle.diametre;
        balle.vitesseY = balle.vitesseY*-1;

    }
    if (balle.haut <0 ) {
        balle.haut = 0;
        balle.vitesseY = balle.vitesseY*-1;
    }

    // deplacement des raquettes
    raquette1.bouge();
    raquette2.bouge();

    console.log(raquette1.direction);

    balle.majHTML();

}, 10);