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

let previousVideos = [];
let counter = 0;

const video = document.getElementById("video");
const allHotspots = document.querySelectorAll(".hotspotContainer .hotspot");

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
