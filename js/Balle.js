//Création de la Balle
class Balle
{
    constructor($element)
    {
        this.$element = $element;

        this.largeur = $element.width();

        this.haut = parseInt($element.css("top"));
        this.gauche = parseInt($element.css("left"));

        this.vitesseX = 2;
        this.vitesseY = 0.6;

        this.balleRayon = 20;
        this.angle = Math.random()*360 * Math.PI / 180;
    }

    get bas()
    {
        return this.haut + this.largeur;
    }

    set bas(value)
    {
        this.haut = value - this.balleRayon;
    }

    get droite()
    {
        return this.gauche + this.largeur;
    }

    set droite(value)
    {
        this.gauche = value - this.balleRayon;
    }

//Mouvement de la balle
    bouger()
    {
        this.gauche += Math.cos(this.angle) * this.vitesseX;
        this.haut += Math.sin(this.angle) * this.vitesseY;
        this.limite();
        this.majHTML();
    }

//detection des lilmites du terrain
    limite()
    {
//Droit
        if(this.droite > terrain.largeur)
        {
            this.recentrer();
            terrain.tiltEchecD();
        }
        
//Bas
        if(this.bas > terrain.hauteur)
        {
            this.vitesseY *= -1;
            this.bas = terrain.hauteur;
            terrain.tiltBas();
        }
//Haut
        if (this.haut <= 0)
        {
            this.vitesseY *= -1;
            this.haut = 0;
            terrain.tiltHaut();
        }
//Gauche
        if (this.gauche <= 0)
        {
            terrain.tiltEchecG();
            this.recentrer();
        }

        this.rebond();
        this.majHTML();
    }

//faire rebondir la balle sur les raquettes
    rebond()
    {
        if (this.droite > raquetteD.gauche) {
            if (this.bas > raquetteD.haut) {
                if (this.haut < raquetteD.bas) {
                    this.vitesseX *= -1.1;
                    console.log(1)
                }
            }
        }

        if (this.gauche < raquetteG.droite) {       
            if (this.bas > raquetteG.haut) {        
                if (this.haut < raquetteG.bas) {
                    this.vitesseX *= -1.1;
                    console.log(2)
                }
            }
        }
    }

    recentrer()
    {
        this.haut = terrain.hauteur/2
        this.gauche = terrain.largeur/2
    }
    majHTML()
    {
        this.$element.css("left", this.gauche);
        this.$element.css("top", this.haut);
    }

}