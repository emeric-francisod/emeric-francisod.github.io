//Les deux variables suivantes contiennent l'abscisse et l'ordonnée du dernier point dessiné.
let precedentsPointsX = null;
let precedentPointsY = null;

//Les deux variables suivantes stockent la taille et la couleur de la brosse.
let size = 10;
let color = "black";

//Les trois variables suivantes vont contenir les éléments permettant de sélectionner la taille et la couleur de la brosse.
let sizeSlider;
let sizeValueWrapper;
let colorPicker;


//Cette fonction est exécutée au chargement de la page.
function setup() {
    //Permet de créer la zone de dessin.
    createCanvas(500, 500);
    //Donne la couleur blanche à la zone de dessin. 255 correspond à blanc, 0 à noir. Tous les autres chiffres correspondent à des gris plus ou moins foncé.
    background(255);

    //Les lignes suivantes permettent d'insérer des éléments dans la page. Ces élémets vont servir à controler la taille et la couleur. Nous verrons ces notions plus tard.
    let controlWrapper = createDiv();
    controlWrapper.class("control-wrapper");

    let sizeBlock = createDiv();
    sizeBlock.class("control");
    let sizeLabel = createSpan("Taille : ");
    sizeBlock.child(sizeLabel);
    sizeSlider = createSlider(1, 100, 10, 1);
    sizeBlock.child(sizeSlider);
    sizeValueWrapper = createSpan(size);
    sizeBlock.child(sizeValueWrapper);
    controlWrapper.child(sizeBlock);

    let colorBlock = createDiv();
    colorBlock.class("control");
    let colorLabel = createSpan("Couleur : ");
    colorBlock.child(colorLabel);
    colorPicker = createColorPicker("black");
    colorBlock.child(colorPicker);
    controlWrapper.child(colorBlock);
}


//Cette fonction est exécutée après setup, à intervalle régulier (par défaut 60 fois par secondes)
function draw() {
    //Dans cette fonction, on récupère la nouvelle taille et la nouvelle couleur, et on les stocke dans les variables size et color.
    size = sizeSlider.value();
    sizeValueWrapper.html(size);
    color = colorPicker.color();

}

//Cette fonction est exécutée quand on clique sur la zone de dessin. On dessinera un cercle dont la taille est stockée dans size.
function mouseClicked() {
    //On choisi l'épaisseur du contour (0)
    strokeWeight(0);
    //On donne la couleur à utiliser, stockée dans color
    fill(color);
    //On trace le cercle. MouseX et mouseY correspondent aux coordonnées du click. Size est la taille du cercle.
    circle(mouseX, mouseY, size);
}

//Cette fonction est exécutée quand on relache le clic. Elle permet de stocker d'oublier les dernières coordonnées.
function mouseReleased() {
    precedentsPointsX = null;
    precedentsPointsY = null;
}

//Cette fonction est exécutée quand on bouge la souris avec le bouton appuyé. Elle permet de dessiner. Pour dessiner, on trace un ligne entre la position de la souris et la position précédente de la souris.
function mouseDragged() {
    //L'élément suivant est une condition. C'est ce que nous verrons la prochaine fois.
    if (precedentsPointsX !== null && precedentPointsY !== null) {
        //On choisir la couleur de la ligne
        stroke(color);
        //On choisir la taille de la ligne
        strokeWeight(size);
        //On trace la ligne entre les coordonnées précédentes et les coordonnées actuelles
        line(precedentsPointsX, precedentPointsY, mouseX, mouseY);
    } else {
        //Ce code est exécuté si il n'y a pas de coordonnées précédentes (si les coordonnées valent null). Comme on ne peut pas tracer de ligne, on marque un point.
        //On donner la taille du contour.
        strokeWeight(0);
        //On donne la couleur du cercle.
        fill(color);
        //On trace le cercle.
        circle(mouseX, mouseY, size);
    }
    //Pour terminer, on garde en mémoire les nouvelles coordonnées.
    precedentsPointsX = mouseX;
    precedentPointsY = mouseY;
}
