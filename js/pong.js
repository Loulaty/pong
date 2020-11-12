// parametres de la balle
let largeur=$("#balle").width();
let gauche=parseInt($("#balle").css("left"));
let haut=parseInt($("#balle").css("top"));


// creer un objet en le reliant a la classe 
let raquette1=new Raquette($("#raquette1"))
console.log(raquette1);

let raquette2=new Raquette($("#raquette2"))
console.log(raquette2);
raquette2.direction = 1

let terrain=new Terrain($("#terrain"))
console.log(terrain);

let balle=new Balle($("#balle"))
console.log(balle);

// faire une boucle (rebond de la balle + mouvement des raquettes)
let i=0;
setInterval(function(){
    balle.gauche=balle.gauche+balle.vitesseX;
    balle.haut=balle.haut+balle.vitesseY;
console.log(terrain.largeur)
    if(balle.gauche>terrain.largeur){
        balle.gauche=terrain.largeur;
        balle.gauche = terrain.largeur-balle.diametre;
        balle.vitesseX=balle.vitesseX*-1;
    }
    if(balle.gauche<0){
        balle.gauche=0;
        balle.vitesseX=balle.vitesseX*-1;
    }
    if(balle.haut>terrain.hauteur){
        balle.haut=terrain.hauteur;
        balle.haut=terrain.hauteur-balle.diametre;
        balle.vitesseY=balle.vitesseY*-1;
    }
    if(balle.haut<0){
        balle.haut=0;
        balle.vitesseY=balle.vitesseY*-1;
    }


    raquette1.haut=raquette1.haut+raquette1.vitesse*raquette1.direction;
    raquette2.haut=raquette2.haut+raquette2.vitesse*raquette2.direction;


    if(raquette1.haut>terrain.hauteur){
        raquette1.haut=terrain.hauteur;
        raquette1.direction=raquette1.direction*-1;
    }
    if(raquette1.haut<0){
        raquette1.haut=0;
        raquette1.direction=raquette1.direction*-1;
    }
    if(raquette2.haut>terrain.hauteur){
        raquette2.haut=terrain.hauteur;
        raquette2.direction=raquette2.direction*-1;
    }
    if(raquette2.haut<0){
        raquette2.haut=0;
        raquette2.direction=raquette2.direction*-1;
    }

    balle.majHTML();
    raquette1.majHTML();
    raquette2.majHTML();


}, 10);
