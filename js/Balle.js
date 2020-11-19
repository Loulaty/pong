//creation de la classe balle
class Balle {
    constructor($html) {
        this.$html = $html;
        this.largeur = $html.width()
        this.haut = parseInt($html.css("top"));
        this.gauche = parseInt($html.css("left"));
        this.vitesseX = 3;
        this.vitesseY = 0.1;
        this.diametre = $html.height()
        this.direction = 1;
    }

    get bas() {
        return this.haut + this.largeur;
    }
    set bas(value) {
        this.haut = value - this.diamtre;
    }
    get droite() {
        return this.gauche + this.largeur;
    }
    set droite(value) {
        this.gauche = value - this.diametre;
    }

    bouge() {
        this.gauche += Math.cos(this.angle) * this.vitesseX;
        this.haut += Math.sin(this.angle) * this.vitesseY;
        this.limiteMouvements();
        this.majHTML();
    }

    demitourD() {
        this.vitesseX = -1;
    }
    demitourG(){
        this.vitesseY = -1;
    }
    monte(){
        this.direction = -1;
    }
    descend(){
        this.direction = 1;
    }

    limiteMouvements() {
        if (this.gauche < terrain.largeur - this.diametre) {
            this.gauche = terrain.largeur - this.diametre;
            this.demitourD();
        }
        console.log(this.droite)
        if (this.droite > terrain.largeur - this.diametre) {
            this.droite = terrain.largeur - this.diametre;
            this.demitourD;
        }
        if (this.haut < terrain.hauteur - this.diametre) {
            this.haut = terrain.hauteur - this.diametre;
            this.descend();

        }
        console.log(this.bas)
        if (this.bas > terrain.hauteur - this.diametre) {
            this.bas = terrain.hauteur - this.diametre;
            this.monte();
        }
    }
}