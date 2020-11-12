// parametres de la balle
let largeur=$("#balle").width();
let gauche=parseInt($("#balle").css("left"));
let haut=parseInt($("#balle").css("top"));

let largeur=$("#raquette1").width();
let haut=parseInt($("#raquette1").css("top"));

let largeur=$("#raquette2").width();
let haut=parseInt($("#raquette2").css("top"));


// creer une classe terrain et une classe balle (majuscules)
class Terrain{
    constructor($html){
        this.$html=$html;
        this.largeur= $("terrain").width();
        this.hauteur=$("terrain").height();
    }
}
class Balle{
    constructor($html){
        this.$html=$html;
        this.haut=parseInt($("balle").css("top"));
        this.gauche=parseInt($("balle").css("left"));
        this.vitesseX=0.5;
        this.vitesseY=2;
    }
    majHTML(){
        this.$html.css("left",balle.gauche);
        this.$html.css("top",balle.haut); 
    }
}

class Raquette1{
    constructor($html){
        this.$html=$html;
        this.haut=parseInt($("raquette1").css("top"));
        this.gauche=parseInt($("raquette1").css("left"));
        this.vitesse=1;
    }
    majHTML(){
        this.$html.css("top",raquette1.haut);
 
    }
}
class Raquette2{
    constructor($html){
        this.$html=$html;
        this.haut=parseInt($("raquette2").css("top"));
        this.gauche=parseInt($("raquette2").css("left"));
        this.vitesse=1;
    }
    majHTML(){
        this.$html.css("top",raquette2.haut);
 
    }
}




// creer un objet en le reliant a la classe 
let raquette1=new Raquette1($("#raquette1"))
console.log(raquette1);

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
