class Raquette{
    constructor($html){
        this.$html=$html;
        this.haut=parseInt(this.$html.css("top"));
        this.gauche=parseInt(this.$html.css("left"));
        this.vitesse=1;
        this.direction=-1;
    }
    majHTML(){
        this.$html.css("top",this.haut);
    }
}