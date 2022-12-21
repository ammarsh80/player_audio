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



// let audios = [
//     {"./assets/img/Nettson-Mood.mp3"}
//     {"./assets/img/Kendji-Girac-Lecole-de-la-vie.mp3"},
//     {"./assets/img/Kendji-Girac-Eva.mp3"},
//     {"./assets/img/Vianney-Kendji-Girac-Le-feu.mp3"},
//     {"./assets/img/Celine-Dion-all-by-myself.mp3"}
// ];

// function createTrackItem(index,name,duration){
//     let trackItem = document.createElement('div');
//     trackItem.setAttribute("class", "playlist-track-ctn");
//     trackItem.setAttribute("id", "ptc-"+index);
//     trackItem.setAttribute("data-index", index);
//     // document.querySelector(".playlist-ctn").appendChild(trackItem);
//     document.querySelector(".con_titles_en_lecture").appendChild(trackItem);

//     let playBtnItem = document.createElement('div');
//     playBtnItem.setAttribute("class", "playlist-btn-play");
//     playBtnItem.setAttribute("id", "pbp-"+index);
//     document.querySelector("#ptc-"+index).appendChild(playBtnItem);

//     let btnImg = document.createElement('i');
//     btnImg.setAttribute("class", "fas fa-play");
//     btnImg.setAttribute("height", "40");
//     btnImg.setAttribute("width", "40");
//     btnImg.setAttribute("id", "p-img-"+index);
//     document.querySelector("#pbp-"+index).appendChild(btnImg);

//     let trackInfoItem = document.createElement('div');
//     trackInfoItem.setAttribute("class", "playlist-info-track");
//     trackInfoItem.innerHTML = name
//     document.querySelector("#ptc-"+index).appendChild(trackInfoItem);

//     let trackDurationItem = document.createElement('div');
//     trackDurationItem.setAttribute("class", "playlist-duration");
//     trackDurationItem.innerHTML = duration
//     document.querySelector("#ptc-"+index).appendChild(trackDurationItem);
//   }

// let listAudio = [
//     {
//       name:"Nettson et Léa Tchéna - Mood",
//       file:"./assets/img/Nettson-Mood.mp3",
//       duration:"02:26"
//     },
//     {
//       name:"Kendji Girac - L'Ecole de la Vie",
//       file:"./assets/img/Kendji-Girac-Lecole-de-la-vie.mp3",
//       duration:"03:06"
//     },
//     {
//       name:"Kendji Girac - Eva",
//       file:"./assets/img/Kendji-Girac-Eva.mp3",
//       duration:"03:38"
//     },
//     {
//       name:"Kendji Girac - Le Feu",
//       file:"./assets/img/Vianney-Kendji-Girac-Le-feu.mp3",
//       duration:"03:57"
//     },
//     {
//       name:"Celine Dion - All By Myself",
//       file:"./assets/img/Celine-Dion-all-by-myself.mp3",
//       duration:"05:12"
//     },
//     {
//       name:"Patrick-Sebastien - Tourner Les Serviettes",
//       file:"./Tourner-les-serviettes-patrick-sebastien.mp3",
//       duration:"03:53"
//     },
//     {
//       name:"Fairouz - Sallomeh-Alayh",
//       file:"./Fairouz-sallomeh-alayh.mp3",
//       duration:"05:49"
//     },
//     {
//       name:"Fairouz - Shaat Iskandria",
//       file:"./Fairouz-shaat-iskandria.mp3",
//       duration:"03:32"
//     }
//   ]

//   for (let i = 0; i < listAudio.length; i++) {
//     createTrackItem(i,listAudio[i].name,listAudio[i].duration);
// }

//   let indexAudio = 0;

//   function loadNewTrack(index){
//     let player = document.querySelector('#source-audio')
//    player.src = listAudio[index].file;
//     document.querySelector('.title').innerHTML = listAudio[index].name;
//     this.currentAudio = document.getElementById("myAudio");
//     this.currentAudio.load();
//     this.toggleAudio();
//     this.updateStylePlaylist(this.indexAudio,index);
//     this.indexAudio = index;
//   }


//   let playListItems = document.querySelectorAll(".playlist-track-ctn");
//   for (let i = 0; i < playListItems.length; i++){
//     playListItems[i].addEventListener("click", getClickedElement.bind(this));
//   }

//   function getClickedElement(event) {
//     for (let i = 0; i < playListItems.length; i++){
//       if(playListItems[i] == event.target){
//         let clickedIndex = event.target.getAttribute("data-index")
//         if (clickedIndex == this.indexAudio ) { // alert('Same audio');
//             this.toggleAudio()
//         }else{
//             loadNewTrack(clickedIndex);
//         }
//       }
//     }
//   }

//   document.querySelector('#source-audio').src = listAudio[indexAudio].file
//   document.querySelector('.title').innerHTML = listAudio[indexAudio].name

//   let currentAudio = document.getElementById("myAudio");

//   currentAudio.load()

//   // currentAudio.onloadedmetadata = function() {
//   //       document.getElementsByClassName('duration')[0].innerHTML = this.getMinutes(this.currentAudio.duration)
//   // }.bind(this);
//   let interval1;

//   function toggleAudio() {

//     if (this.currentAudio.paused) {
//       document.querySelector('#icon-play').style.display = 'none';
//       document.querySelector('#icon-pause').style.display = 'block';
//       // document.querySelector('#ptc-'+this.indexAudio).classList.add("active-track");
//       this.playToPause(this.indexAudio)
//       this.currentAudio.play();
//     }else{
//       document.querySelector('#icon-play').style.display = 'block';
//       document.querySelector('#icon-pause').style.display = 'none';
//       this.pauseToPlay(this.indexAudio)
//       this.currentAudio.pause();
//     }
//   }

//   function pauseAudio() {
//     this.currentAudio.pause();
//     clearInterval(interval1);
//   }
//   let timer = document.getElementsByClassName('timer')[0]

//   let barProgress = document.getElementById("myBar");


//   let width = 0;

//   function onTimeUpdate() {
//     var t = this.currentAudio.currentTime
//     timer.innerHTML = this.getMinutes(t);
//     this.setBarProgress();
//     if (this.currentAudio.ended) {
//       document.querySelector('#icon-play').style.display = 'block';
//       document.querySelector('#icon-pause').style.display = 'none';
//       this.pauseToPlay(this.indexAudio)
//       if (this.indexAudio < listAudio.length-1) {
//           var index = parseInt(this.indexAudio)+1
//           this.loadNewTrack(index)
//       }
//     }
//   }

//   function setBarProgress(){
//     let progress = (this.currentAudio.currentTime/this.currentAudio.duration)*100;
//     document.getElementById("myBar").style.width = progress + "%";
//   }

//   function getMinutes(t){
//     let min = parseInt(parseInt(t)/60);
//     let sec = parseInt(t%60);
//     if (sec < 10) {
//       sec = "0"+sec
//     }
//     if (min < 10) {
//       min = "0"+min
//     }
//     return min+":"+sec
//   }

// let progressbar = document.querySelector('#myProgress');
//   progressbar.addEventListener("click", seek.bind(this));

//   function seek(event) {
//     let percent = event.offsetX / progressbar.offsetWidth;
//     this.currentAudio.currentTime = percent * this.currentAudio.duration;
//     barProgress.style.width = percent*100 + "%";
//   }


//   function forward(){
//     this.currentAudio.currentTime = this.currentAudio.currentTime + 5
//     this.setBarProgress();
//   }

//   function rewind(){
//     this.currentAudio.currentTime = this.currentAudio.currentTime - 5
//     this.setBarProgress();
//   }


//   function next(){
//     if (this.indexAudio <listAudio.length-1) {
//         let oldIndex = this.indexAudio
//         this.indexAudio++;
//         updateStylePlaylist(oldIndex,this.indexAudio)
//         this.loadNewTrack(this.indexAudio);
//     }
//   }

//   function previous(){
//     if (this.indexAudio>0) {
//         let oldIndex = this.indexAudio
//         this.indexAudio--;
//         updateStylePlaylist(oldIndex,this.indexAudio)
//         this.loadNewTrack(this.indexAudio);
//     }
//   }

//   function updateStylePlaylist(oldIndex,newIndex){
//     document.querySelector('#ptc-'+oldIndex).classList.remove("active-track");
//     this.pauseToPlay(oldIndex);
//     document.querySelector('#ptc-'+newIndex).classList.add("active-track");
//     this.playToPause(newIndex)
//   }

//   function playToPause(index){
//     let ele = document.querySelector('#p-img-'+index)
//     ele.classList.remove("fa-play");
//     ele.classList.add("fa-pause");
//   }

//   function pauseToPlay(index){
//     let ele = document.querySelector('#p-img-'+index)
//     ele.classList.remove("fa-pause");
//     ele.classList.add("fa-play");
//   }

//   function toggleMute(){
//     let btnMute = document.querySelector('#toggleMute');
//     let volUp = document.querySelector('#icon-vol-up');
//     let volMute = document.querySelector('#icon-vol-mute');
//     if (this.currentAudio.muted == false) {
//        this.currentAudio.muted = true
//        volUp.style.display = "none"
//        volMute.style.display = "block"
//     }else{
//       this.currentAudio.muted = false
//       volMute.style.display = "none"
//       volUp.style.display = "block"
//     }
//   }
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

// let play = document.querySelector(".btn_play");
// let playStatus = false;
// let audio = new Audio("./assets/img/Kendji-Girac-Lecole-de-la-vie.mp3");

// let play_stop = document.querySelector("#play_stop");
// let countMyliste = 0;

// play_stop.addEventListener("click", (e) => {
//     playStop();

// });
// /**
//  * démarrer/arrêter la musique
//  */
// function playStop() {
//     if ((playStatus === false) & (countMyliste % 2 == 1)) {
//         document.querySelector(".custom-slider-son").value = 25;
//         play_stop.className = "pause"
//         audio.play();
//         playStatus = true;
//         soundIcon();

//     } else if (playStatus === true) {
//         play_stop.className = "play"
//         audio.pause();
//         playStatus = false;
//     }
// };

// /**
//  * Donner une classe de style à une balise (Avec Toggle 0/1)
//  * @param {*} selecteur nom de la .class/#id (attention aux . & #) de la balise cible
//  * @param {*} styl classe de style voulu 
//  */
// function list_recharge(selecteur, styl) {
//     countMyliste++;
//     document.querySelector(selecteur).classList.toggle(styl);
// };
// /**
//  * 
//  * Donner une classe de style à une balise
//  * @param {*} selecteur nom de la .class/#id (attention aux . & #) de la balise cible 
//  * @param {*} sty classe de style voulu 
//  */
// function sound_charge(selecteur, sty) {
//     document.querySelector(selecteur).classList.add(sty);
// };
// /**
//  * Enlever une classe de style 
//  * @param {*} selecteur nom de la .class/#id (attention aux . & #) de la balise cible 
//  * @param {*} sty classe de style voulu
//  */
// function sound_remove(selecteur, sty) {
//     document.querySelector(selecteur).classList.remove(sty);
// };

// let recharg = document.querySelector("#library-link");
// recharg.addEventListener("click", (e) => {
//     list_recharge(".con_titles_en_lecture", "C_con_titles_en_lecture");
// }
// );

// //* sound control
// //* sound =0 onload
// document.addEventListener("DOMContentLoaded", (e) => {
//     document.querySelector(".custom-slider-son").value = 0;
// });
// //* sound volume control
// const volume = document.querySelector(".sound-control input");
// volume.addEventListener("change", (e) => {
//     audio.volume = volume.value / 100;
//     soundIcon();
// });

// //* sound icon control
// function soundIcon() {
//     const soundValue = document.querySelector(".sound-control input").value;
//     if (soundValue == 0) {
//         sound_charge(".sound_off", "C_sound_show");
//         sound_remove(".sound_low", "C_sound_show");
//         sound_remove(".sound_hight", "C_sound_show");
//         sound_remove(".sound_off", "C_sound_hidden_sound_off");
//     }
//     else if ((soundValue > 0) & (soundValue <= 50)) {
//         sound_charge(".sound_off", "C_sound_hidden_sound_off");
//         sound_remove(".sound_off", "C_sound_show");
//         sound_charge(".sound_low", "C_sound_show");
//         sound_remove(".sound_hight", "C_sound_show");

//     }
//     else if (soundValue > 50) {
//         sound_remove(".sound_off", "C_sound_show");
//         sound_remove(".sound_low", "C_sound_show");
//         sound_charge(".sound_hight", "C_sound_show");
//         return soundValue;
//     }
// }

// /**
//  * 
//  * @param {*} time formater le time (current/duration)  
//  * @returns (m:ss)
//  */
// function timeFormat(time) {
//     return Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2);
// }

// const durationInput = document.querySelector(".player input");
// const currentTime = document.querySelector(".time_avance p");

// audio.addEventListener("loadedmetadata", () => {
//     const endTime = document.querySelector(".time_avance p:last-child");
//     durationInput.value = audio.currentTime;
//     durationInput.setAttribute("max", audio.duration);
//     currentTime.innerText = `${timeFormat(audio.currentTime)}`;
//     endTime.innerText = `${timeFormat(audio.duration)}`;
// });

// audio.addEventListener("timeupdate", () => {
//     durationInput.value = audio.currentTime;
//     currentTime.innerText = `${timeFormat(audio.currentTime)}`;
//     document.querySelector(".time_avance p:last-child").style.left = `${(audio.currentTime / audio.duration) * 100}%`;
// });

// durationInput.addEventListener("change", () => {
//     audio.currentTime = durationInput.value;
// });


// //*skipping back/forward
// const back = document.getElementsByClassName("btn_precedente");
// const forward = document.getElementsByClassName("btn_suivante");

// // back.addEventListener("click", () => skipSong("backward"));
// // forward.addEventListener("click", () => skipSong("forward"));
// audio.addEventListener("ended", () => skipSong("forward"));


// function skipSong(direction) {
//   const selectedSong = document.querySelector(".selected");
//   selectedSongIndex = librarySongs.indexOf(selectedSong);

//   selectedSong.classList.remove("selected");
//   if (direction === "backward") {
//     previousSong = librarySongs[selectedSongIndex - 1];
//     if (librarySongs.indexOf(previousSong) === -1) {
//       previousSong = librarySongs[librarySongs.length - 1];
//     }
//     previousSong.classList.add("selected");
//     songs.filter((song) => {
//       if (song.id == previousSong.id) {
//         playSong(song);
//       }
//     });
//   } else if (direction === "forward") {
//     nextSong = librarySongs[selectedSongIndex + 1];

//     if (librarySongs.indexOf(nextSong) === -1) {
//       nextSong = librarySongs[0];
//     }
//     nextSong.classList.add("selected");
//     songs.filter((song) => {
//       if (song.id == nextSong.id) {
//         playSong(song);
//       }
//     });
//   }
// }




/////////////////////////// testtttttttttttttttttttttttt


// let play = document.querySelector(".btn_play");
let playStatus = false;
// let audio = new Audio("./assets/img/Kendji-Girac-Lecole-de-la-vie.mp3");

// let play_stop = document.querySelector("#play_stop");
let countMyliste = 0;

// play_stop.addEventListener("click", (e) => {
//     playStop();

// });
/**
 * démarrer/arrêter la musique
 */
// function playStop() {
//     if ((playStatus === false) & (countMyliste % 2 == 1)) {
//         document.querySelector(".custom-slider-son").value = 25;
//         play_stop.className = "pause"
//         audio.play();
//         playStatus = true;
//         soundIcon();

//     } else if (playStatus === true) {
//         play_stop.className = "play"
//         audio.pause();
//         playStatus = false;
//     }
// };

/**
 * Donner une classe de style à une balise (Avec Toggle 0/1)
 * @param {*} selecteur nom de la .class/#id (attention aux . & #) de la balise cible
 * @param {*} styl classe de style voulu 
 */
function list_recharge(selecteur, styl) {
  countMyliste++;
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

// function soundIconToggle() {
//   const soundValue = document.querySelector(".sound-control input").value;
//     sound_charge_toggle(".sound_off", "C_sound_show");
//     sound_remove(".sound_low", "C_sound_show");
//     sound_remove(".sound_hight", "C_sound_show");
//     sound_remove(".sound_off", "C_sound_hidden_sound_off");
// }


// function sound_charge_toggle(selecteur, st) {
//   document.querySelector(selecteur).classList.toggle(st);
// };


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

// function soundIcon() {
//   const soundValue = document.querySelector(".sound-control input").value;
//   if (soundValue) {
//       sound_charge(".sound_off", "C_sound_show");
//       sound_remove(".sound_low", "C_sound_show");
//       sound_remove(".sound_hight", "C_sound_show");
//       sound_remove(".sound_off", "C_sound_hidden_sound_off");
//   }
// else if ((soundValue > 0) & (soundValue <= 50)) {
//     sound_charge(".sound_off", "C_sound_hidden_sound_off");
//     sound_remove(".sound_off", "C_sound_show");
//     sound_charge(".sound_low", "C_sound_show");
//     sound_remove(".sound_hight", "C_sound_show");

// }
// else if (soundValue > 50) {
//     sound_remove(".sound_off", "C_sound_show");
//     sound_remove(".sound_low", "C_sound_show");
//     sound_charge(".sound_hight", "C_sound_show");
//     return soundValue;
// }

// /**
//  * 
//  * @param {*} time formater le time (current/duration)  
//  * @returns (m:ss)
//  */
// function timeFormat(time) {
//     return Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2);
// }

// const durationInput = document.querySelector(".player input");
// const currentTime = document.querySelector(".time_avance p");

// audio.addEventListener("loadedmetadata", () => {
//     const endTime = document.querySelector(".time_avance p:last-child");
//     durationInput.value = audio.currentTime;
//     durationInput.setAttribute("max", audio.duration);
//     currentTime.innerText = `${timeFormat(audio.currentTime)}`;
//     endTime.innerText = `${timeFormat(audio.duration)}`;
// });

// audio.addEventListener("timeupdate", () => {
//     durationInput.value = audio.currentTime;
//     currentTime.innerText = `${timeFormat(audio.currentTime)}`;
//     document.querySelector(".time_avance p:last-child").style.left = `${(audio.currentTime / audio.duration) * 100}%`;
// });

// durationInput.addEventListener("change", () => {
//     audio.currentTime = durationInput.value;
// });





















function createTrackItem(index, name, duration) {
  var trackItem = document.createElement('div');
  trackItem.setAttribute("class", "playlist-track-ctn");
  trackItem.setAttribute("id", "ptc-" + index);
  trackItem.setAttribute("data-index", index);
  // document.querySelector(".playlist-ctn").appendChild(trackItem);

  document.querySelector(".con_titles_en_lecture").appendChild(trackItem);

  var playBtnItem = document.createElement('div');
  playBtnItem.setAttribute("class", "playlist-btn-play");
  playBtnItem.setAttribute("id", "pbp-" + index);
  document.querySelector("#ptc-" + index).appendChild(playBtnItem);

  var btnImg = document.createElement('i');
  btnImg.setAttribute("class", "fas fa-play");
  btnImg.setAttribute("height", "40");
  btnImg.setAttribute("width", "40");
  btnImg.setAttribute("id", "p-img-" + index);
  document.querySelector("#pbp-" + index).appendChild(btnImg);

  var trackInfoItem = document.createElement('div');
  trackInfoItem.setAttribute("class", "playlist-info-track");
  trackInfoItem.innerHTML = name
  document.querySelector("#ptc-" + index).appendChild(trackInfoItem);

  var trackDurationItem = document.createElement('div');
  trackDurationItem.setAttribute("class", "playlist-duration");
  trackDurationItem.innerHTML = duration
  document.querySelector("#ptc-" + index).appendChild(trackDurationItem);
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
    name: "Kendji Girac - Le Feu",
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


for (var i = 0; i < listAudio.length; i++) {
  createTrackItem(i, listAudio[i].name, listAudio[i].duration);
}
var indexAudio = 0;

function loadNewTrack(index) {
  var player = document.querySelector('#source-audio')
  player.src = listAudio[index].file
  document.querySelector('.title').innerHTML = listAudio[index].name
  this.currentAudio = document.getElementById("myAudio");
  this.currentAudio.load()
  this.toggleAudio()
  this.updateStylePlaylist(this.indexAudio, index)
  this.indexAudio = index;
  let myindex = indexAudio;
  console.log(myindex);
}

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

document.querySelector('#source-audio').src = listAudio[indexAudio].file
document.querySelector('.title').innerHTML = listAudio[indexAudio].name


var currentAudio = document.getElementById("myAudio");

currentAudio.load()

currentAudio.onloadedmetadata = function () {
  document.getElementsByClassName('duration')[0].innerHTML = this.getMinutes(this.currentAudio.duration)
}.bind(this);

var interval1;

function toggleAudio() {

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

var timer = document.getElementsByClassName('timer')[0]

var barProgress = document.querySelector(".custom-slider-avance");


var width = 0;

function onTimeUpdate() {
  var t = this.currentAudio.currentTime
  timer.innerHTML = this.getMinutes(t);
  this.setBarProgress();
  if (this.currentAudio.ended) {
    document.querySelector('#icon-play').style.display = 'block';
    document.querySelector('#icon-pause').style.display = 'none';
    this.pauseToPlay(this.indexAudio)
    if (this.indexAudio < listAudio.length - 1) {
      var index = parseInt(this.indexAudio) + 1
      this.loadNewTrack(index)
    }
  }
}


function setBarProgress() {
  var progress = (this.currentAudio.currentTime / this.currentAudio.duration) * 100;
  document.querySelector(".custom-slider-avance").style.width = progress + "%";
}


function getMinutes(t) {
  var min = parseInt(parseInt(t) / 60);
  var sec = parseInt(t % 60);
  if (sec < 10) {
    sec = "0" + sec
  }
  if (min < 10) {
    min = "0" + min
  }
  return min + ":" + sec
}

var progressbar = document.querySelector('#myProgress')
progressbar.addEventListener("click", seek.bind(this));


function seek(event) {
  var percent = event.offsetX / progressbar.offsetWidth;
  this.currentAudio.currentTime = percent * this.currentAudio.duration;
  barProgress.style.width = percent * 100 + "%";
}

function forward() {
  this.currentAudio.currentTime = this.currentAudio.currentTime + 5
  this.setBarProgress();
}

function rewind() {
  this.currentAudio.currentTime = this.currentAudio.currentTime - 5
  this.setBarProgress();
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

  } else if (this.currentAudio.muted = true || (soundValue > 0 & soundValue <= 50)) {
    this.currentAudio.muted = false;
    voloff.style.display = "none";
    vollow.style.display = "block";
    volhight.style.display = "none";
  }
  else if (this.currentAudio.muted = false || (soundValue > 50 & soundValue < 101)) {
    this.currentAudio.muted = false;
    voloff.style.display = "none";
    vollow.style.display = "none";
    volhight.style.display = "block";
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// console.log(getRandomInt(randomNombre));

function randomSong() {
  let randomNombre = getRandomInt(listAudio.length)
  indexAudio = randomNombre;
  loadNewTrack(indexAudio);
}

function replay() {
  indexAudio++;
  indexAudio--;
  console.log(indexAudio);
  loadNewTrack(indexAudio);
}