let paths = {
  introduction: "videos/1.IntroductionFatima.mp4",
  ending: "videos/5.2EndingScreen.mp4",
  definition: {
    0: "videos/CT/3.DefinitionConspiracyTheoriesCaro.mp4",
    1: "videos/FN/3.DefinitionFakeNewsFatima.mp4",
  },

  conspiracy: {
    0: "videos/CT/4.1HistoryConspiracyTheoriesVicky.mp4",
    1: "videos/CT/4.2ExampleConspiracyTheoriesCaro.mp4",
    2: "videos/CT/4.3UncoverConspiracyTheoriesVicky.mp4",
  },
  fakeNews: {
    0: "videos/FN/4.1HistoryFakeNewsFatima.mp4",
    1: "videos/FN/4.2ExampleFakeNewsEric.mp4",
    2: "videos/FN/4.3UncoverFakeNewsEric.mp4",
  },
};

let person = {
  BastianAlbrecht:
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
  ChiaraSkiba:
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
  CarolinWiegand:
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
  EricSchiller:
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
  VictoriaObermanns:
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
  FatimaMaged:
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
  VanessaJacob:
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
  AnnaKoutsidis:
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
  LuzieCarolaRietschel:
    "Luzie studies Media Management - Digital News Journalism and works as a graphic designer for an online news publisher named Good News Magazin. In her past she worked as: a video editor for the HSMW, a cameraman and visual editor for Chop and Change, designer for light up! news and product designer.",
};

let previousVideos = [];
let counter = 0;

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
}

const showHotspots = (mainSource) => {
  mainSource = "videos" + mainSource.split("/videos")[1];
  let index = 0;
  switch (mainSource) {
    case paths.introduction:
      allHotspots.forEach((hotspot) => {
        if (paths.definition[index]) {
          hotspot.firstElementChild.src = paths.definition[index];
          hotspot.style.display = "inline";
          ++index;
        }
      });
      break;
    case paths.definition[0]:
      allHotspots.forEach((hotspot) => {
        if (paths.conspiracy[index]) {
          hotspot.firstElementChild.src = paths.conspiracy[index];
          hotspot.style.display = "inline";
          ++index;
        }
      });
      break;
    case paths.definition[1]:
      allHotspots.forEach((hotspot) => {
        if (paths.fakeNews[index]) {
          hotspot.firstElementChild.src = paths.fakeNews[index];
          hotspot.style.display = "inline";
          ++index;
        }
      });
      break;
    case paths.conspiracy[0]:
    case paths.conspiracy[1]:
    case paths.conspiracy[2]:
    case paths.fakeNews[0]:
    case paths.fakeNews[1]:
    case paths.fakeNews[2]:
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
  document.getElementById("description").innerHTML = person[name];
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
