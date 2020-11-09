// parametres de la balle
let largeur=$("#balle").width();
let gauche=parseInt($("#balle").css("left"));
let haut=parseInt($("#balle").css("top"));


// creer une classe terrain et une classe balle
class Terrain{
    constructor($element){
        this.$element=$element;
        this.largeur= $element.width();
        this.hauteur=$element.height();
    }
}
class Balle{
    constructor($element){
        this.$element=$element;
        this.haut=parseInt($element.css("top"));
        this.gauche=parseInt($element.css("left"));
        this.vitesseX=2;
        this.vitesseY=0.5;
    }
    majHTML(){
        this.$element.css("left",balle.gauche);
        this.$element.css("top",balle.haut); 
    }
}


// creer un objet en le reliant a la classe 
let terrain=new Terrain($("#terrain"))
console.log(terrain);

let balle=new Balle($("#balle"))
console.log(balle);

// faire rebondir la balle sur le bords du terrain
let i=0;
setInterval(function(){
    balle.gauche=balle.gauche+balle.vitesseX;
    balle.haut=balle.haut+balle.vitesseY;

    if(balle.gauche>terrain.largeur){
        balle.gauche=terrain.largeur;
        balle.vitesseX=balle.vitesseX*-1;
    }
    if(balle.gauche<0){
        balle.gauche=0;
        balle.vitesseX=balle.vitesseX*-1;
    }
    if(balle.haut>terrain.hauteur){
        balle.haut=terrain.hauteur;
        balle.vitesseY=balle.vitesseY*-1;
    }
    if(balle.haut<0){
        balle.haut=0;
        balle.vitesseY=balle.vitesseY*-1;
    }

    balle.majHTML();

}, 10);