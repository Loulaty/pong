//creer la classze balle
class Balle{
    constructor($html){
        this.$html=$html;
        this.haut=parseInt($html.css("top"));
        this.gauche=parseInt($html.css("left"));
        this.vitesseX=Math.random() * 3;
        this.vitesseY=Math.random() * 2;
        this.diametre=$html.height();
    }
    majHTML(){
        this.$html.css("left",balle.gauche);
        this.$html.css("top",balle.haut); 
    }
}