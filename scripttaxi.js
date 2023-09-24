"use strict";

let santémental= 10 //définir la santé santé mental de la perssonne
let nbrchangement= 0 // définir le nombre de changement de taxi

function choixmusique(){
    nbrchangement++;

    const musique = Math.floor(Math.random()* 5) +1; // générer un nombre aléatoire entre 1 et 5 pour les musique

    if (musique === 3){
        santémental -= 3; //la musique 3 enlève 3 de santé mentale au joueur
    }

    return musique;
}

while (santémental > 0 && nbrchangement < 30) {
    const feurouge = choixmusique(); //change de musique à chaque feu rouge
    console.log(`arrivé au feu rouge radio choisi musique ${feurouge}. Santé mentale actuelle : ${santémental}`); // affiche la musique choisi aléatoirement et affiche la santé mental restante
}

if (santémental <= 0) { 
    console.log("Le joueur à explosé car il n'avait plus de santé mentale"); // s'affiche si le joueur n'a plus de santé mentale
} else {
    console.log("le joueur est bien arrivé santé mentale restante " + santémental)// s'affiche si le joueur arive a bon port
}

console.log(`Nombre de changement effectués pour arriver : ${nbrchangement}`); // s'affiche pour savoir le nombre de changement