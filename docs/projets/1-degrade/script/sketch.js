/* Dans ce script, le fond de la toile changera de couleur.
En informatique, les couleurs peuvent être définies de nombreuses manières. L'une d'elle est le système RGB:
    On utilise un mélange de rouge, vert et bleu pour créer une couleur parmis 16 millions. Ces trois couleurs sont dosées entre 0 (rien du tout) et 255 (le plus possible).
    C'est comme ça que les écrans affichent les couleurs: chaque pixel affiche ces trois couleurs dans différentes quantités et l'oeil humain se charge de les mélanger.
Ce script va donc passer parmis les 16 millions de couleurs si la vitesse vaut 1. A raison de 60 couleurs par secondes, il faudrait 3 jours pour toutes les voir.*/

//Les variables suivantes représentent la quantité de rouge, vert et bleu.
let rouge = 0;
let vert = 0;
let bleu = 0;

//Cette variable permet de régler la vitesse de changement. Plus la valeur est importante, plus on ira vite. Attention à ne pas dépasser 255.
let vitesse = 5;

function setup() {
    //Permet de créer la zone de dessin.
    createCanvas(500, 500);
}


//Cette fonction est exécutée après setup, à intervalle régulier (par défaut 60 fois par secondes)
function draw() {
    //On ajoute vitesse à la quantité de rouge.
    rouge = rouge + vitesse;
    if (rouge > 255) {
        //Si rouge dépasse 255 (ce n'est plus valide), on le remet à 0 et on ajoute 1 au vert.
        rouge = 0;
        vert = vert + vitesse;

        if (vert > 255) {
            //Comme pour le rouge, si les vert dépasse 255, on ajoute au bleu
            vert = 0;
            bleu = bleu + vitesse;

            if (bleu > 255) {
                //Si bleu dépasse 255, il revient à 0 aussi et on recommence
                bleu = 0;
            }
        }
    }
    //Change la couleur du fond
    background(rouge, vert, bleu)

}
