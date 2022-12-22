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




// ///////////////  Début En teste   /////////////////////////////////////////
// const audio = document.querySelector("audio");
// // const cover = document.querySelector(".song-info img");
// const library = document.querySelector(".library");

// const libraryLink = document.getElementById("library-link");
// let librarySongs = Array.from(document.querySelectorAll(".library-song"));
// // let playStatus = false;

// libraryLink.addEventListener("click", openLibrary);

// function openLibrary() {
//   if (library.classList.contains("library-opened")) {
//     library.classList.remove("library-opened");
//     libraryLink.classList.remove("library-opened-link");
//   } else {
//     library.classList.add("library-opened");
//     libraryLink.classList.add("library-opened-link");
//   }
// }
// librarySongs.forEach((song) => {
//   song.addEventListener("click", (e) => {
//     librarySongs.forEach((otherSong) => {
//       otherSong.classList.remove("selected");
//     });
//     e.target.classList.add("selected");
//     songId = song.id;
//     songs.filter((selectedSong) => {
//       if (selectedSong.id == song.id) {
//         playSong(selectedSong);
//       }
//     });
//   });
// });

// ///////////////  Fin En teste   /////////////////////////////////////////

/////////////////////////// à Garder

/**
 * Donner une classe de style à une balise (Avec Toggle 0/1)
 * @param {*} selecteur nom de la .class/#id (attention aux . & #) de la balise cible
 * @param {*} styl classe de style voulu 
 */
function list_recharge(selecteur, styl) {
  document.querySelector(selecteur).classList.toggle(styl);
};
/**
 * 
 * Donner une classe de style à une balise
 * @param {*} selecteur nom de la .class/#id (attention aux . & #) de la balise cible 
 * @param {*} sty classe de style voulu 
 */
function sound_charge(selecteur, sty) {
  document.querySelector(selecteur).classList.add(sty);
};

/**
 * Enlever une classe de style 
 * @param {*} selecteur nom de la .class/#id (attention aux . & #) de la balise cible 
 * @param {*} sty classe de style voulu
 */
function sound_remove(selecteur, sty) {
  document.querySelector(selecteur).classList.remove(sty);
};

let recharg = document.querySelector("#library-link");
recharg.addEventListener("click", (e) => {
  list_recharge(".con_titles_en_lecture", "C_con_titles_en_lecture");
  document.querySelector('.btn_suivante').style.display = 'none';
  document.querySelector('.btn_suivante_vert').style.display = 'block';

  document.querySelector('.btn_precedente_vert').style.display = 'block';
  document.querySelector('.btn_precedente').style.display = 'none';

}
);

//* sound control
//* sound =0 onload
document.addEventListener("DOMContentLoaded", (e) => {
  document.querySelector(".custom-slider-son").value = 0;
});
// //* sound volume control
const volume = document.querySelector(".sound-control input");
volume.addEventListener("change", (e) => {
  currentAudio.volume = volume.value / 100;
  soundIcon();
});

//* sound icon control
function soundIcon() {
  const soundValue = document.querySelector(".sound-control input").value;
  if (soundValue == 0) {
    sound_charge(".sound_off", "C_sound_show");
    sound_remove(".sound_low", "C_sound_show");
    sound_remove(".sound_hight", "C_sound_show");
    sound_remove(".sound_off", "C_sound_hidden_sound_off");
  }
  else if ((soundValue > 0) & (soundValue <= 50)) {
    sound_charge(".sound_off", "C_sound_hidden_sound_off");
    sound_remove(".sound_off", "C_sound_show");
    sound_charge(".sound_low", "C_sound_show");
    sound_remove(".sound_hight", "C_sound_show");

  }
  else if (soundValue > 50) {
    sound_remove(".sound_off", "C_sound_show");
    sound_remove(".sound_low", "C_sound_show");
    sound_charge(".sound_hight", "C_sound_show");
    return soundValue;
  }
}

/**
 * 
 * @param {*} time formater le time (current/duration)  
 * @returns (m:ss)
 */
function timeFormat(time) {
  return Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2);
}

const durationInput = document.querySelector(".player input");
const currentTime = document.querySelector(".time_avance p");

const currentAudi = document.getElementById("myAudio");

currentAudi.addEventListener("loadedmetadata", () => {
  const endTime = document.querySelector(".time_avance p:last-child");
  durationInput.value = currentAudi.currentTime;
  durationInput.setAttribute("max", currentAudi.duration);
  currentTime.innerText = `${timeFormat(currentAudi.currentTime)}`;
  endTime.innerText = `${timeFormat(currentAudi.duration)}`;
});

currentAudi.addEventListener("timeupdate", () => {
  durationInput.value = currentAudi.currentTime;
  currentTime.innerText = `${timeFormat(currentAudi.currentTime)}`;
  document.querySelector(".time_avance p:last-child").style.left = `${(currentAudi.currentTime / currentAudi.duration) * 100}%`;
});

durationInput.addEventListener("change", () => {
  currentAudi.currentTime = durationInput.value;
});

function createTrackItem(index, name, duration) {
  let trackItem = document.createElement('div');
  trackItem.setAttribute("class", "playlist-track-ctn");
  trackItem.setAttribute("id", "ptc-" + index);
  trackItem.setAttribute("data-index", index);
  document.querySelector(".con_titles_en_lecture").appendChild(trackItem);

  let playBtnItem = document.createElement('div');
  playBtnItem.setAttribute("class", "playlist-btn-play");
  playBtnItem.setAttribute("id", "pbp-" + index);
  document.querySelector("#ptc-" + index).appendChild(playBtnItem);

  let btnImg = document.createElement('i');
  btnImg.setAttribute("class", "fas fa-play");
  btnImg.setAttribute("height", "40");
  btnImg.setAttribute("width", "40");
  btnImg.setAttribute("id", "p-img-" + index);
  document.querySelector("#pbp-" + index).appendChild(btnImg);
  // pour la'affichage des info de titre ne lecture en bas à gauche       /////// en display:non pour le moment
  let trackInfoItem = document.createElement('div');
  trackInfoItem.setAttribute("class", "playlist-info-track");
  trackInfoItem.innerHTML = name
  document.querySelector("#ptc-" + index).appendChild(trackInfoItem);

  let trackDurationItem = document.createElement('div');
  trackDurationItem.setAttribute("class", "playlist-duration");
  trackDurationItem.innerHTML = duration
  document.querySelector("#ptc-" + index).appendChild(trackDurationItem);
  document.querySelector(".custom-slider-son").value = 25;

}

let listAudio = [
  {
    name: "Nettson et Léa Tchéna - Mood",
    file: "./assets/img/Nettson-Mood.mp3",
    duration: "02:26"
  },
  {
    name: "Kendji Girac - L'Ecole de la Vie",
    file: "./assets/img/Kendji-Girac-Lecole-de-la-vie.mp3",
    duration: "03:06"
  },
  {
    name: "Kendji Girac - Eva",
    file: "./assets/img/Kendji-Girac-Eva.mp3",
    duration: "03:38"
  },
  {
    name: "Vianney & Kendji Girac - Le Feu",
    file: "./assets/img/Vianney-Kendji-Girac-Le-feu.mp3",
    duration: "03:57"
  },
  {
    name: "Celine Dion - All By Myself",
    file: "./assets/img/Celine-Dion-all-by-myself.mp3",
    duration: "05:12"
  },
  {
    name: "Patrick-Sebastien - Tourner Les Serviettes",
    file: "./assets/img/Tourner-les-serviettes-patrick-sebastien.mp3",
    duration: "03:53"
  },
  {
    name: "Fairouz - Sallomeh-Alayh",
    file: "./assets/img/Fairouz-sallomeh-alayh.mp3",
    duration: "05:49"
  },
  {
    name: "Fairouz - Shaat Iskandria",
    file: "./assets/img/Fairouz-shaat-iskandria.mp3",
    duration: "03:32"
  }
]

for (let i = 0; i < listAudio.length; i++) {
  createTrackItem(i, listAudio[i].name, listAudio[i].duration);

}
var indexAudio = 0;

function loadNewTrack(index) {

  document.querySelector(".custom-slider-son").value = 25;
  soundIcon();

  var player = document.querySelector('#source-audio');
  player.src = listAudio[index].file;
  document.querySelector('.title').innerHTML = listAudio[index].name;
  this.currentAudio = document.getElementById("myAudio");
  this.currentAudio.load();
  this.toggleAudio();
  this.updateStylePlaylist(this.indexAudio, index);
  this.indexAudio = index;


}

// listAudio.forEach((song) => {
//   song.addEventListener("click", (e) => {
//     listAudio.forEach((otherSong) => {
//       otherSong.classList.remove("selected");
//     });
//     e.target.classList.add("selected");
//     songId = song.id;
//     songs.filter((selectedSong) => {
//       if (selectedSong.id == song.id) {
//         playSong(selectedSong);
//       }
//     });
//   });
// });

var playListItems = document.querySelectorAll(".playlist-track-ctn");

for (let i = 0; i < playListItems.length; i++) {
  playListItems[i].addEventListener("click", getClickedElement.bind(this));
}

function getClickedElement(event) {
  for (let i = 0; i < playListItems.length; i++) {
    if (playListItems[i] == event.target) {
      var clickedIndex = event.target.getAttribute("data-index")
      if (clickedIndex == this.indexAudio) { // alert('Same audio');
        this.toggleAudio()
      } else {
        loadNewTrack(clickedIndex);
      }
    }
  }
}


// function continuMusique(){
//  let duration= document.getElementsByClassName('duration')[0].innerHTML = this.getMinutes(this.currentAudio.duration);
//  let progress = (this.currentAudio.currentTime / this.currentAudio.duration) * 100;

// if(progress==100){
//   next();
// }
// }
document.querySelector('#source-audio').src = listAudio[indexAudio].file
document.querySelector('.title').innerHTML = listAudio[indexAudio].name

var currentAudio = document.getElementById("myAudio");

currentAudio.load()

var interval1;

function toggleAudio() {
  document.querySelector(".custom-slider-son").value = 25;
  soundIcon();
  if (this.currentAudio.paused) {
    document.querySelector('#icon-play').style.display = 'none';
    document.querySelector('#icon-pause').style.display = 'block';
    document.querySelector('#ptc-' + this.indexAudio).classList.add("active-track");
    this.playToPause(this.indexAudio)
    this.currentAudio.play();
  } else {
    document.querySelector('#icon-play').style.display = 'block';
    document.querySelector('#icon-pause').style.display = 'none';
    this.pauseToPlay(this.indexAudio)
    this.currentAudio.pause();
  }
}

function pauseAudio() {
  this.currentAudio.pause();
  clearInterval(interval1);
}

function forward() {
  this.currentAudio.currentTime = this.currentAudio.currentTime + 5

}

function rewind() {
  this.currentAudio.currentTime = this.currentAudio.currentTime - 5
}

function next() {
  if (this.indexAudio < listAudio.length - 1) {
    var oldIndex = this.indexAudio
    this.indexAudio++;
    updateStylePlaylist(oldIndex, this.indexAudio)
    this.loadNewTrack(this.indexAudio);

  }
}

function previous() {
  if (this.indexAudio > 0) {
    var oldIndex = this.indexAudio
    this.indexAudio--;
    updateStylePlaylist(oldIndex, this.indexAudio)
    this.loadNewTrack(this.indexAudio);
  }
}

function updateStylePlaylist(oldIndex, newIndex) {
  document.querySelector('#ptc-' + oldIndex).classList.remove("active-track");
  this.pauseToPlay(oldIndex);
  document.querySelector('#ptc-' + newIndex).classList.add("active-track");
  this.playToPause(newIndex)
}

function playToPause(index) {
  var ele = document.querySelector('#p-img-' + index)
  ele.classList.remove("fa-play");
  ele.classList.add("fa-pause");
}

function pauseToPlay(index) {
  var ele = document.querySelector('#p-img-' + index)
  ele.classList.remove("fa-pause");
  ele.classList.add("fa-play");
}

function toggleMute() {
  const soundValue = document.querySelector(".sound-control input").value;
  var btnMute = document.querySelector('#toggleMute');
  var voloff = document.querySelector('.sound_off');
  var vollow = document.querySelector('.sound_low');
  var volhight = document.querySelector('.sound_hight');
  if (this.currentAudio.muted == false) {
    this.currentAudio.muted = true;
    vollow.style.display = "none";
    volhight.style.display = "none";
    voloff.style.display = "block";

  } else if (this.currentAudio.muted = true & (soundValue > 0 & soundValue <= 50)) {
    this.currentAudio.muted = false;
    voloff.style.display = "none";
    vollow.style.display = "block";
    volhight.style.display = "none";
  }
  else if (this.currentAudio.muted = true & (soundValue > 50 & soundValue < 101)) {
    this.currentAudio.muted = false;
    voloff.style.display = "none";
    vollow.style.display = "none";
    volhight.style.display = "block";
  }
}


function getRandomInt(max) {
  return Math.floor(Math.random() * max);

}

function randomSong() {
  let randomNombre = getRandomInt(listAudio.length)
  indexAudio = randomNombre;
  loadNewTrack(indexAudio);
  console.log(indexAudio);

  this.loadNewTrack(this.indexAudio);

}

function replay() {
  indexAudio++;
  indexAudio--;
  console.log(indexAudio);
  loadNewTrack(indexAudio);
  this.loadNewTrack(this.indexAudio);

}


let next_album = document.querySelector(".btn_vert_Stromae_after");
next_album.addEventListener("click", (e) => {
  let cadre_stromae = document.querySelector(".cadre_stromae")
  cadre_stromae.style.backgroundImage = "url(./assets/img/Soprano.jpg)";
});

let befor_album = document.querySelector(".btn_vert_Stromae_befor");
befor_album.addEventListener("click", (e) => {
  let cadre_stromae = document.querySelector(".cadre_stromae")
  cadre_stromae.style.backgroundImage = "url(./assets/img/Wejdene.jpg)";
});

let playe_album = document.querySelector(".btn_vert_Stromae_playe");
playe_album.addEventListener("click", (e) => {
  list_recharge(".chariot_grand", "C_chariot_grand");
  list_recharge(".chariot", "C_chariot");
});

let reset = document.querySelector(".reset_playe_audio");
reset.addEventListener("click", (e) => {
  soundIcon();
  document.querySelector(".custom-slider-son").value = 0;
  document.querySelector('.btn_suivante').style.display = 'block';
  document.querySelector('.btn_suivante_vert').style.display = 'none';

  document.querySelector('.btn_precedente').style.display = 'block';
  document.querySelector('.btn_precedente_vert').style.display = 'none';
  let message = document.querySelector(".con_titles_en_lecture").innerHTML = "Please refresh the page to re-create your Playlist, <br> <br> See You Soon ! ! ";
  message.style = "text-color:black";
  let vider = document.querySelector(".con_titles_en_lecture");
  vider.style = 'background-color:#D2C5F9; padding-top:100px; padding-left:25px; padding-right:25px';
  replay();
});