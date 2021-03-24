let paths = {
  introduction: "videos/1.IntroductionFatima.mp4",
  ending: "videos/5.2EndingScreen.mp4",
  definition: {
    0: {
      thumbnail: "images/tnDefinitionCT.png",
      video: "videos/CT/3.DefinitionConspiracyTheoriesCaro.mp4",
    },
    1: {
      thumbnail: "",
      video: "videos/FN/3.DefinitionFakeNewsFatima.mp4",
    },
  },

  conspiracy: {
    0: {
      thumbnail: "",
      video: "videos/CT/4.1HistoryConspiracyTheoriesVicky.mp4",
    },
    1: {
      thumbnail: "",
      video: "videos/CT/4.2ExampleConspiracyTheoriesCaro.mp4",
    },
    2: {
      thumbnail: "",
      video: "videos/CT/4.3UncoverConspiracyTheoriesVicky.mp4",
    },
  },
  fakeNews: {
    0: { thumbnail: "", video: "videos/FN/4.1HistoryFakeNewsFatima.mp4" },
    1: { thumbnail: "", video: "videos/FN/4.2ExampleFakeNewsEric.mp4" },
    2: { thumbnail: "", video: "videos/FN/4.3UncoverFakeNewsEric.mp4" },
  },
};

let person = {
  BastianAlbrecht: {
    name: "Bastian Albrecht",
    text:
      "passionate drummer & radio activist - This is Basti, 23 years old and from the beautiful Thuringia. He is a student at Mittweida University of Applied Sciences and since February he has also been the programme director at 99drei Radio Mittweida. Besides his studies, he plays drums in two bands. He is also very interested in sports. This includes handball and football, for example.",
  },

  ChiaraSkiba: {
    name: "Chiara Skiba",
    text:
      "loves to write - She has her own blog, where she reports on festivals, concerts, music and much more. She is also very interested in sports.",
  },

  CarolinStellaWiegand: {
    name: "Carolin Stella Wiegand",
    text:
      "26 years old and Media Management student at the University of Applied Sciences Mittweida - Previously, she completed an apprenticeship in Management Assistant for Wholesale and Foreign Trade. After her apprenticeship, she worked as a digital editor at first moment Fotografie GmbH & Co. KG for one year. However, she then decided to pursue a personal development and decided to study at the HSMW. Her creative hobbies and ambition characterize her as well as her open-mindedness.",
  },

  EricSchiller: {
    name: "Eric Schiller",
    text:
      "20 years old optimist, from Zittau, near the Dreiländereck - In three words, he would describe himself as ambitious, funny and honest. His professional goal is to become a newscaster on television.",
  },

  VictoriaObermanns: {
    name: "Victoria Obermanns",
    text:
      "creative and communicative powerwoman - She studies Media Management in the journalism major at Mittweida University of Applied Sciences. There she is involved in the student council in the area of public relations and works as a reporter for 99,3 Radio Mittweida. Outside of her studies, she is passionate about sports, art and theater. In the past she worked at several cultural festivals.",
  },

  FatimaMaged: {
    name: "Fatima Maged",
    text:
      "25 year old cat lady from Lebanon - She is studying Media Management in Mittweida. She had her first journalism-experience at the age of 15 in a local radio named SAEK. Currently she is working as a volunteer in another local radio named Radio T. Besides that she wrote articles for the social media magazine light_up. Now she is writing for the social media magazine Good News Magazin. In her free time she likes to go to concerts and festivals. She also likes to play wheelchair basketball and goes hiking. Her plan for the future is to work as a freelance journalist. She wants to focus on the topics: animal rights and human rights.",
  },

  VanessaJacob: {
    name: "Vanessa Jacob",
    text:
      "bookworm with & kind hearted - Before her studies, she graduated with a specialization in design. Her interests are books, movies and music. As part of her studies she is a member of the lecturer’s office of medienMITTWEIDA and has already published a few posts. In the future she wants to work in a library or a publishing house.",
  },

  AnnaKoutsidis: {
    name: "Anna Koutsidis",
    text:
      "Erzgebirgerin & real sunshine - She is the editor-in-chief of medienMITTWEIDA. Right now she is studying Media Management at the HSMW in her fourth semester. Her dream is to become a journalist. In addition to her studies, she works for the Freie Presse, where she also wants to complete her internship in the future.",
  },

  LuzieCarolaRietschel: {
    name: "Luzie Carola Rietschel",
    text:
      "creative person & art lover - She studies Media Management at the HSMW and works as a graphic designer for an online magazine named Good News Magazin. In her past she worked as: a video editor, a cameraman and visual editor for Chop and Change, designer for light up! news and product designer. In the future she wants to create an art collective for artist who need support with their work and stay true to her creative self.",
  },
};

let previousVideos = [];
let counter = 0;

const videoContainer = document.getElementById("videoContainer");
const video = document.getElementById("video");
const allHotspots = document.querySelectorAll(".hotspotContainer .hotspot");
const modal = document.getElementById("modal");

video.volume = 0.3;

function toggleFullscreen() {
  let video_player = document.getElementById("videoContainer");
  if (fs_status()) {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    document.getElementById("fullscreen").className = "icon-resize-full-2";
  } else {
    if (video_player.requestFullScreen) {
      video_player.requestFullScreen();
    } else if (video_player.webkitRequestFullScreen) {
      video_player.webkitRequestFullScreen();
    } else if (video_player.mozRequestFullScreen) {
      video_player.mozRequestFullScreen();
    }
    document.getElementById("fullscreen").className = "icon-resize-normal";
  }
}

function fs_status() {
  if (
    document.fullscreenElement ||
    document.webkitFullscreenElement ||
    document.mozFullScreenElement
  )
    return true;
  else return false;
}

async function changeVideo(hotspot) {
  removeHotspots();
  previousVideos.push("videos" + video.src.split("/videos")[1]);
  ++counter;
  video.src = hotspot.firstElementChild.src;
  video.play();
}

const hideHotspots = (mainSource) => {
  if (video.duration - video.currentTime > 0) {
    removeHotspots();
  }
};

function swingItBack() {
  video.src = previousVideos[counter - 1];
  video.play();
  counter--;
  previousVideos.pop();
}

const showHotspots = (mainSource) => {
  mainSource = "videos" + mainSource.split("/videos")[1];
  let index = 0;
  switch (mainSource) {
    case paths.introduction:
      allHotspots.forEach((hotspot) => {
        if (paths.definition[index]) {
          hotspot.firstElementChild.src = paths.definition[index].video;
          hotspot.firstElementChild.poster = paths.definition[index].thumbnail;
          hotspot.style.display = "inline";
          ++index;
        }
      });
      break;
    case paths.definition[0].video:
      allHotspots.forEach((hotspot) => {
        if (paths.conspiracy[index]) {
          hotspot.firstElementChild.src = paths.conspiracy[index].video;
          hotspot.firstElementChild.poster = paths.conspiracy[index].thumbnail;
          hotspot.style.display = "inline";
          ++index;
        }
      });
      break;
    case paths.definition[1].video:
      allHotspots.forEach((hotspot) => {
        if (paths.fakeNews[index]) {
          hotspot.firstElementChild.src = paths.fakeNews[index].video;
          hotspot.firstElementChild.poster = paths.fakeNews[index].thumbnail;
          hotspot.style.display = "inline";
          ++index;
        }
      });
      break;
    case paths.conspiracy[0].video:
    case paths.conspiracy[1].video:
    case paths.conspiracy[2].video:
    case paths.fakeNews[0].video:
    case paths.fakeNews[1].video:
    case paths.fakeNews[2].video:
      removeHotspots();
      video.src = paths.ending;
      video.play();
      break;

    default:
      document.getElementById("restart").style.display = "inline";
  }
};

function removeHotspots() {
  allHotspots.forEach((hotspot) => {
    hotspot.removeAttribute("style");
  });
}

const openModal = (elem, name) => {
  var img = "./images" + elem.src.split("/images")[1];
  document.getElementById("bigAvatar").firstElementChild.src = img;
  document.querySelector("#description h1").innerHTML = person[name].name;
  document.querySelector("#description p").innerHTML = person[name].text;
  modal.style.display = "block";
  document.getElementById("fp-nav").style.pointerEvents = "none";
  document.getElementById("close").focus();
};

const closeModal = (e) => {
  console.log(e);
  if (!e || e.target === modal) {
    modal.style.display = "none";
    document.getElementById("fp-nav").style.pointerEvents = "all";
  }
};
