//creation de la classe balle
class Balle {
    constructor($html) {
        this.$html = $html;
        this.haut = parseInt($html.css("top"));
        this.gauche = parseInt($html.css("left"));
        this.vitesseX = 1;
        this.vitesseY = 3;
        this.diametre = $html.height()
        this.direction = -1;
    }

    get bas() {
        return this.haut + this.largeur;
    }

    get droite() {
        return this.gauche + this.largeur;
    }

    bouge() {
        balle.gauche+=balle.vitesseY*balle.direction;
        balle.haut+=balle.vitesseX*balle.direction;
        this.limiteMouvements();
        this.majHTML();
    }
    majHTML(){
        this.$html.css("left",balle.gauche);
        this.$html.css("top",balle.haut);
        //this.$html.css("width",balle.haut);
        
    }

    limiteMouvements() {
        if(this.gauche>terrain.largeur+this.diametre){
            this.direction*=-1}
        if(this.haut>terrain.hauteur-this.diametre){
            this.direction*=-1}
        if(balle.gauche<0){
            this.direction*=1;}
        if(balle.haut<0){
            this.direction*=-1;}
        }
    }
