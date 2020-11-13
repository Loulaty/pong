//creer les raquettes avec une seule classe pour 2
class Raquette{
    constructor($html){
        this.$html=$html;
        this.haut=parseInt(this.$html.css("top"));
        this.hauteur=parseInt(this.$html.css("height"));
        this.gauche=parseInt(this.$html.css("left"));
        this.vitesse=1;
        this.direction=-1;
    }
    majHTML(){
        this.$html.css("top",this.haut);
    }
    changeDirection(){
        this.direction *= -1;
    }
}
