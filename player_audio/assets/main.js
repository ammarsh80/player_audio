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

function sound_charge(selecteur, sty) {
    document.querySelector(selecteur).classList.add(sty);
};


function sound_remove(selecteur, sty) {
    document.querySelector(selecteur).classList.remove(sty);
};


sound_charge(".sound_off","C_sound_show");

let recharg = document.querySelector("#library-link");
recharg.addEventListener("click", (e) => {
    list_recharge(".con_titles_en_lecture", "C_con_titles_en_lecture");
}
);





// console.log(volumeValue);
function soundIcon(){
    const soundValue = document.querySelector(".sound-control input").value;
    if (soundValue==0){
        sound_charge(".sound_off","C_sound_show");
        sound_remove(".sound_low","C_sound_show");
        sound_remove(".sound_hight","C_sound_show");
        sound_remove(".sound_off","C_sound_hidden_sound_off");
    }
    else if((soundValue >0) & (soundValue <=50)){
        sound_charge(".sound_off","C_sound_hidden_sound_off");
        sound_remove(".sound_off","C_sound_show");
        sound_charge(".sound_low","C_sound_show");
        sound_remove(".sound_hight","C_sound_show");

    }
    else if(soundValue >50){
        sound_remove(".sound_off","C_sound_show");
        sound_remove(".sound_low","C_sound_show");
        sound_charge(".sound_hight","C_sound_show");
    }
}

//* sound volume control
const volume = document.querySelector(".sound-control input");
volume.addEventListener("change", () => {
    let volumeValue = document.querySelector(".sound-control input").value;
console.log(volumeValue);
    audio.volume = volume.value / 100;
    soundIcon();
});
//*defining audio and song info
//format current/duration time
function timeFormat(time) {
  return Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2);
}


const durationInput = document.querySelector(".player input");
const currentTime = document.querySelector(".player span");


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
