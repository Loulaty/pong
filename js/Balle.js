//creation de la classe balle
class Balle {
    constructor($html) {
        this.$html = $html;
        this.haut = parseInt($html.css("top"));
        this.gauche = parseInt($html.css("left"));
        this.vitesseX=3;
        this.vitesseY=0.1;
        this.diametre=$html.height()
        this.direction = 1;
    }
    get bas(){
        return this.haut+this.diametre
    }
    get droite(){
        return this.gauche+this.diamtre
    }
    //mise a jour
    majHTML(){
        this.$html.css("left", this.gauche);
        this.$html.css("top", this.haut);
    }
    monte(){
        this.direction *= -1
    }
    descend(){
        this.direction *= 1
    }
}