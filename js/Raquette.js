//parametres de la raquette
class Raquette
{
    constructor($element)
    {
        this.$element = $element;
//faire bouger les raquettes avec les touches
        /**
         *
         * @type {number}
         */
        this.haut = parseInt($element.css("top"));

        /**
         *
         * @type {number}
         */
        this.gauche = parseInt($element.css("left"));

        /**
         *
         * @type {number}
         */
        this.vitesseY = 1.5;
        this.hauteur = $element.height();

        this.largeur = $element.width();

        this.direction = 0;
    }

    get bas()
    {
        return this.haut+this.hauteur;
    }

    set bas(value)
    {
        this.haut = value - this.hauteur;
    }

    get droite()
    {
        return this.gauche+this.largeur;
    }

    set droite(value)
    {
        this.gauche = value - this.largeur;
    }
//deplacement de la raquette
    bouger()
    {
        this.haut += this.vitesseY * this.direction;
        this.limite();
        this.majHTML();
    }

    monter()
    {
        this.direction = -1;
    }

    descendre()
    {
        this.direction = 1;
    }

    arret()
    {
        this.direction = 0;
    }


//les collisions de la raquette
    limite()
    {
        if(this.bas > terrain.hauteur)
        {
            this.bas = terrain.hauteur;
        }

        if (this.haut < 0)
        {
            this.haut = 0;
        }
    }

    majHTML()
    {
        this.$element.css("top", this.haut);
    }

}