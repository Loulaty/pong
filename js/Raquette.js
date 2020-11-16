class Raquette {
    constructor($html) {
        this.$html = $html;
        this.haut = parseInt($html.css("top"));
        this.largeur = $html.width();
        this.hauteur = $html.height();
        this.vitesse = 1.5;
        this.direction = 1;
        console.log(this.haut)

    }
    get bas(){
        return this.haut+this.hauteur
    }
    //creation fonctions
    majHTML(){
        this.$html.css("top", this.haut);
    }
    monte(){
        this.direction = -1;
    }
    descend(){
        this.direction = 1;
    }
    // on fait bouger les raquettes
    bouge(){
        this.haut = this.haut + this.vitesse*this.direction;
        this.limiteMouvements();
        this.majHTML();
    }
    //limites raquettes
    limiteMouvements(){
        console.log(this.bas)
        if (this.bas > terrain.hauteur) {
            this.monte();

        }

        if (this.haut <0 ) {
            this.descend();

        }


    }

}
