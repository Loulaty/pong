//parametres du terrain
class Terrain{
    constructor($element)
    {
        this.$element = $element;
        this.largeur=$element.width();
        this.hauteur=$element.height();
    }
//pour que les bords changent de couleurs
    tiltHaut()
    {
        this.$element.addClass("tiltHaut");
        let ici = this;

        setTimeout(
            function()
            {
                ici.$element.removeClass("tiltHaut");
            },300
        );
    }

    tiltBas()
    {
        this.$element.addClass("tiltBas");
        let ici = this;

        setTimeout(
            function()
            {
                ici.$element.removeClass("tiltBas");
            },300
        );
    }

    tiltEchecG()
    {
        this.$element.addClass("tiltEchecG");
        let ici = this;

        setTimeout(
            function()
            {
                ici.$element.removeClass("tiltEchecG");
            },100
        );
    }

    tiltEchecD()
    {
        this.$element.addClass("tiltEchecD");
        let ici = this;

        setTimeout(
            function()
            {
            ici.$element.removeClass("tiltEchecD");
            },100
        );

    }
    
}