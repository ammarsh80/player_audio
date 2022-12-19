// un message pour les anciens navigateurs qui ne prennent pas en charge cette balise.
// <audio src=”fichier_son”>Votre navigateur ne supporte pas la balise audio</audio>

// L’adressage du fichier audio suppose ici que celui-ci se trouve dans le même 
// répertoire que le fichier HTML contenant la balise audio.


// Les attributs de la balise <audio> sont :
// src
// Obligatoire. Définis l’adresse du fichier son.
// Vous pouvez mettre autant de fichier source que nécessaire afin d'être certain que le navigateur de 
// votre visiteur prendra en charge le format du fichier son.
// autoplay
//  Définit la lecture automatique du fichier audio dès que celui-ci sera disponible, soit au chargement de 
// la page.
// <audio src=”son.ogg” autoplay>
// La notation XHTML de l’attribut autoplay="autoplay" est également acceptée.
// loop
// Spécifie que le fichier son sera joué en boucle. Ainsi, le morceau sonore est joué à nouveau lorsqu’il se 
// termine.
// <audio src=”son.ogg” loop>
// La notation loop="loop" est aussi acceptée

// preload
// Indique au navigateur qu’il doit télécharger le fichier audio au chargement de la page de sorte qu’il soit 
// disponible pour une lecture immédiate lors de la demande de l’utilisateur.
// <audio src=”son.ogg” preload>
// Cet attribut peut être précisé :
// - preload="none" : pas de préchargement.
// - preload="metadata" : préchargement des métadonnées (metadata) attachées au fichier.
// - preload="auto" : préchargement automtique.
// Cet attribut preload est ignoré si l’attribut autoplay est présent.


// let play = document.querySelector(".btn_play");
let playStatus = false;
let audio = new Audio("./assets/img/Vianney-Kendji-Girac-Le-feu.mp3");
let play_stop = document.querySelector("#play_stop");
play_stop.addEventListener("click", (e) => {
    playStop();
});

function playStop() {
    if (playStatus === false) {
        play_stop.className = "pause"
        audio.play();
        playStatus = true;

    } else {
        play_stop.className = "play"
        audio.pause();
        playStatus = false;
    }
};

function list_recharge(selecteur, styl) {
    document.querySelector(selecteur).classList.toggle(styl);
};

let recharg = document.querySelector("#library-link");
recharg.addEventListener("click", (e) => {
    list_recharge(".con_titles_en_lecture", "C_con_titles_en_lecture");
}
);



//* sound volume control
const volume = document.querySelector(".sound-control input");
volume.addEventListener("change", () => {
  audio.volume = volume.value / 100;
});

//*defining audio and song info
//format current/duration time
function timeFormat(time) {
  return Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2);
}
// const libraryLink = document.getElementById("library-link");
// libraryLink.addEventListener("click", openLibrary);
// const library = document.querySelector(".library");

// function openLibrary() {
//     if (library.classList.contains("library-opened")) {
//       library.classList.remove("library-opened");
//       libraryLink.classList.remove("library-opened-link");
//     } else {
//       library.classList.add("library-opened");
//       libraryLink.classList.add("library-opened-link");
//     }
//   }
