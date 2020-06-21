let nombreCible = null;
let chaineNombre = "";

let min = 0;
let max = 1000;

let attenteEntreeUtilisateur = true;
let afficherErreurType = false;
let afficherErreurTaille = false;
let victoire = false;


function setup() {
	createCanvas(500, 500);
	nouveauJeu();
}

function draw() {
	background(50);
	textAlign(CENTER, CENTER);
	textSize(50);
	fill(230);
	if (attenteEntreeUtilisateur) {
		text(chaineNombre, width / 2, height / 2);
		if (afficherErreurTaille) {
			textSize(16);
			text("Saisie impossible, le nombre entré est trop grand.", width / 2, 5 * height / 6);
		} else if (afficherErreurType) {
			textSize(16);
			text("Saisie impossible, le caractère choisi n'est pas un nombre.", width / 2, 5 * height / 6);

		}
	} else {
		if (parseInt(chaineNombre) > nombreCible) {
			text("C'est moins", width / 2, height / 2);
		} else if (parseInt(chaineNombre) < nombreCible) {
			text("C'est plus", width / 2, height / 2);
		} else {
			text("Gagné!!!", width / 2, height / 2);
			victoire = true;
		}
	}
}

function keyPressed() {
	if (attenteEntreeUtilisateur) {
		if (keyCode === BACKSPACE && chaineNombre !== "") {
			chaineNombre = chaineNombre.substring(0, chaineNombre.length - 1);
			afficherErreurType = false;
			afficherErreurTaille = false;
		} else if (keyCode === ENTER && chaineNombre !== "") {
			attenteEntreeUtilisateur = false;
			afficherErreurType = false;
			afficherErreurTaille = false;
		} else if (key >= 0 && key <= 9 && parseInt(chaineNombre + key) >= min && parseInt(chaineNombre + key) <= max) {
			chaineNombre += key;
			afficherErreurType = false;
			afficherErreurTaille = false;
		} else if (parseInt(chaineNombre + key) < min || parseInt(chaineNombre + key) > max) {
			afficherErreurTaille = true;
			afficherErreurType = false;
		} else {
			afficherErreurType = true;
			afficherErreurTaille = false;
		}
	} else if (keyCode === ENTER) {
		attenteEntreeUtilisateur = true;
		chaineNombre = "";
		if (victoire) {
			victoire = false;
			nouveauJeu();
		}
	}
}

function nouveauJeu() {
	nombreCible = round(random(min, max));
}
