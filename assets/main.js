const durationInput = document.querySelector(".player input");
const currentTime = document.querySelector(".time_avance p");
const currentAudio = document.getElementById("myAudio");


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

// Attention si je met (let indexAudio = 0;) il y a rien qui fonction !!! 
//soit mettre (var indexAudio = 0;)
//soit  (indexAudio = 0;)
indexAudio = 0;
let playListItems = document.querySelectorAll(".playlist-track-ctn");

document.querySelector('#myAudio').src = listAudio[indexAudio].file
currentAudio.load()

let interval1;
/**
 * Donner une classe de style à une balise (Avec Toggle 0/1)
 * @param {*} selecteur nom de la .class/#id (attention aux . & #) de la balise cible
 * @param {*} styl classe de style voulu 
 */
function list_recharge(selecteur, styl) {
  document.querySelector(selecteur).classList.add(styl);
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
    sound_charge(".sound_off", "C_sound_hidden_sound_off");
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

function stratSon() {
  document.querySelector(".custom-slider-son").value = 25;
  soundIcon();

}

function loadNewTrack(index) {
  let player = document.querySelector('#myAudio')
  player.src = listAudio[index].file
  this.currentAudio = document.getElementById("myAudio");
  this.currentAudio.load()
  this.toggleAudio()
  this.updateStylePlaylist(this.indexAudio, index)
  this.indexAudio = index;
  stratSon();
}

for (let i = 0; i < playListItems.length; i++) {
  playListItems[i].addEventListener("click", getClickedElement.bind());
}

function getClickedElement(event) {
  for (let i = 0; i < playListItems.length; i++) {
    if (playListItems[i] == event.target) {
      let clickedIndex = event.target.getAttribute("data-index")
      if (clickedIndex == indexAudio) { // alert('Same audio');
        toggleAudio()
      } else {
        loadNewTrack(clickedIndex);
      }
    }
  }
}



function toggleAudio() {
  document.querySelector(".custom-slider-son").value = 25;
  soundIcon();
  if (currentAudio.paused) {
    document.querySelector('#icon-play').style.display = 'none';
    document.querySelector('#icon-pause').style.display = 'block';
    document.querySelector('#ptc-' + this.indexAudio).classList.add("active-track");
    this.playToPause(this.indexAudio)
    currentAudio.play();
  } else {
    document.querySelector('#icon-play').style.display = 'block';
    document.querySelector('#icon-pause').style.display = 'none';
    this.pauseToPlay(this.indexAudio)
    currentAudio.pause();
  }
}

function pauseAudio() {
  currentAudio.pause();
  clearInterval(interval1);
}

function forward() {
  currentAudio.currentTime = currentAudio.currentTime + 5

}

function rewind() {
  currentAudio.currentTime = currentAudio.currentTime - 5
}

function next() {
  if (indexAudio < listAudio.length - 1) {
    let oldIndex = indexAudio
    indexAudio++;
    updateStylePlaylist(oldIndex, indexAudio)
    loadNewTrack(indexAudio);

  }
}

function previous() {
  if (indexAudio > 0) {
    let oldIndex = indexAudio
    indexAudio--;
    updateStylePlaylist(oldIndex, indexAudio);
    loadNewTrack(indexAudio);
  }
}

function updateStylePlaylist(oldIndex, newIndex) {
  document.querySelector('#ptc-' + oldIndex).classList.remove("active-track");
  pauseToPlay(oldIndex);
  document.querySelector('#ptc-' + newIndex).classList.add("active-track");
  playToPause(newIndex)
}

function playToPause(index) {
  let ele = document.querySelector('#p-img-' + index)
  ele.classList.remove("fa-play");
  ele.classList.add("fa-pause");
}

function pauseToPlay(index) {
  let ele = document.querySelector('#p-img-' + index)
  ele.classList.remove("fa-pause");
  ele.classList.add("fa-play");
}

function toggleMute() {
  const soundValue = document.querySelector(".sound-control input").value;
  let btnMute = document.querySelector('#toggleMute');
  let voloff = document.querySelector('.sound_off');
  let vollow = document.querySelector('.sound_low');
  let volhight = document.querySelector('.sound_hight');
  if (currentAudio.muted == false) {
    currentAudio.muted = true;
    sound_charge(".sound_off", "C_sound_show");
    sound_remove(".sound_low", "C_sound_show");
    sound_remove(".sound_hight", "C_sound_show");
    sound_remove(".sound_off", "C_sound_hidden_sound_off");

  } else if (currentAudio.muted = true && (soundValue > 0 & soundValue <= 50)) {
    currentAudio.muted = false;
    sound_charge(".sound_off", "C_sound_hidden_sound_off");
    sound_remove(".sound_off", "C_sound_show");
    sound_charge(".sound_low", "C_sound_show");
    sound_remove(".sound_hight", "C_sound_show");
  }
  else if (currentAudio.muted = true && (soundValue > 50 & soundValue < 101)) {
    currentAudio.muted = false;
    sound_charge(".sound_off", "C_sound_hidden_sound_off");
    sound_remove(".sound_off", "C_sound_show");
    sound_remove(".sound_low", "C_sound_show");
    sound_charge(".sound_hight", "C_sound_show");
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);

}
let countRandom = 0;
function randomSong() {
  countRandom++;
  let randomNombre = getRandomInt(listAudio.length);
  let oldIndex = indexAudio;
  indexAudio = randomNombre;
  updateStylePlaylist(oldIndex, indexAudio);
  loadNewTrack(indexAudio);
}

let countreplay = 0;
function replay() {
  countreplay++,
    indexAudio++;
  indexAudio--;
  loadNewTrack(indexAudio);
}

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

let replaySong = document.querySelector(".first-btn");
replaySong.addEventListener("click", (e) => {
  replay();
});

let precedentSong = document.querySelector(".second-btn");
precedentSong.addEventListener("click", (e) => {
  previous();
});

let reculSong = document.querySelector(".third-btn");
reculSong.addEventListener("click", (e) => {
  rewind();
});

let playSong = document.querySelector(".fourth-btn");
playSong.addEventListener("click", (e) => {
  toggleAudio();
});

let avanceSong = document.querySelector(".fith-btn");
avanceSong.addEventListener("click", (e) => {
  forward();
});
let nextSong = document.querySelector(".sixth-btn");
nextSong.addEventListener("click", (e) => {
  next();
});

let randSong = document.querySelector(".seventh-btn");
randSong.addEventListener("click", (e) => {
  randomSong();
});
let soundOff = document.querySelector(".sound_off");
soundOff.addEventListener("click", (e) => {
  toggleMute();
});

let soundLow = document.querySelector(".sound_low");
soundLow.addEventListener("click", (e) => {
  toggleMute();
});

let soundHieght = document.querySelector(".sound_hight");
soundHieght.addEventListener("click", (e) => {
  toggleMute();
});

currentAudio.addEventListener("loadedmetadata", () => {
  const endTime = document.querySelector(".time_avance p:last-child");
  durationInput.value = currentAudio.currentTime;
  durationInput.setAttribute("max", currentAudio.duration);
  currentTime.innerText = `${timeFormat(currentAudio.currentTime)}`;
  endTime.innerText = `${timeFormat(currentAudio.duration)}`;
});

currentAudio.addEventListener("timeupdate", () => {
  durationInput.value = currentAudio.currentTime;
  currentTime.innerText = `${timeFormat(currentAudio.currentTime)}`;
  document.querySelector(".time_avance p:last-child").style.left = `${(currentAudio.currentTime / currentAudio.duration) * 100}%`;
});

durationInput.addEventListener("change", () => {
  currentAudio.currentTime = durationInput.value;
});

let next_album = document.querySelector(".btn_vert_Stromae_after");
next_album.addEventListener("click", (e) => {
  let cadre_stromae = document.querySelector(".cadre_stromae")
  cadre_stromae.style.backgroundImage = "url(./assets/img/Soprano.jpg)";
  document.querySelector(".multitude").innerHTML = "Soprano _ Chasseur d'Étoiles";
  document.querySelector(".multitude").style = "font-size : 0.9em";
});

let befor_album = document.querySelector(".btn_vert_Stromae_befor");
befor_album.addEventListener("click", (e) => {
  let cadre_stromae = document.querySelector(".cadre_stromae")
  cadre_stromae.style.backgroundImage = "url(./assets/img/Wejdene.jpg)";
  document.querySelector(".multitude").innerHTML = "Wejdene _ Glow Up";
});

let playe_album = document.querySelector(".buy");
playe_album.addEventListener("click", (e) => {
  confirm("Please, click on [OK] to go to purchase page !" + "\r" + "\r" +
    "Or [Annuler] to stay on this page.", { okLabel: "oui" });
  if (confirm == true) {
    console.log("J'attend php, pour pouvoir envoyer l'utilisateur vers la page de paiement");
    // window.open("open.html");
  } else if (confirm == false) {
    console.log("à bientô");

  }
});

let reset = document.querySelector(".reset_playe_audio");

reset.addEventListener("click", (e) => {
  // let oldIndex = indexAudio;
  // indexAudio = 0;
  // updateStylePlaylist(oldIndex, indexAudio);
  // loadNewTrack(indexAudio);
  // toggleAudio(indexAudio);
  // document.querySelector(".custom-slider-son").value = 0;
  // soundIcon();
  location.reload();
}

);

currentAudio.addEventListener("ended", (e) => {
  if (countRandom == 1) {
    countRandom--;
    randomSong();
  } else if (countreplay == 1) {
    countreplay--,
      replay();
  }
  else if (indexAudio == listAudio.length - 1) {
    indexAudio = 0;
    loadNewTrack(indexAudio);
  }
  else {
    next();
  }
}
)

let img1 = document.querySelector(".img-title1");
img1.addEventListener("click", (e) => {
  list_recharge(".my_main", "C_main_1");
  sound_remove(".my_main", "C_main_2");
  sound_remove(".my_main", "C_main_3");
  sound_remove(".my_main", "C_main_4");
  sound_remove(".my_main", "C_main_5");
});
let img2 = document.querySelector(".img-title2");
img2.addEventListener("click", (e) => {
  sound_remove(".my_main", "C_main_1");
  list_recharge(".my_main", "C_main_2");
  sound_remove(".my_main", "C_main_3");
  sound_remove(".my_main", "C_main_4");
  sound_remove(".my_main", "C_main_5");
});
let img3 = document.querySelector(".img-title3");
img3.addEventListener("click", (e) => {
  sound_remove(".my_main", "C_main_1");
  sound_remove(".my_main", "C_main_2");
  list_recharge(".my_main", "C_main_3");
  sound_remove(".my_main", "C_main_4");
  sound_remove(".my_main", "C_main_5");
});
let img4 = document.querySelector(".img-title4");
img4.addEventListener("click", (e) => {
  sound_remove(".my_main", "C_main_1");
  sound_remove(".my_main", "C_main_2");
  sound_remove(".my_main", "C_main_3");
  list_recharge(".my_main", "C_main_4");
  sound_remove(".my_main", "C_main_5");
});
let img5 = document.querySelector(".img-title5");
img5.addEventListener("click", (e) => {
  sound_remove(".my_main", "C_main_1");
  sound_remove(".my_main", "C_main_2");
  sound_remove(".my_main", "C_main_3");
  sound_remove(".my_main", "C_main_4");
  list_recharge(".my_main", "C_main_5");
});

