let paths = {
  introduction: "videos/1.IntroductionFatima.mp4",
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
  hideHotspots();
  previousVideos.push("videos" + video.src.split("/videos")[1]);
  ++counter;
  video.src = hotspot.firstElementChild.src;
  video.play();
}

const toggleHotspots = (mainSource) => {
  if (video.duration - video.currentTime > 0) {
    hideHotspots();
  } else {
    mainSource = new URL(mainSource).pathname.substring(1);
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
      default:
        document.getElementById("restart").style.display = "inline";
    }
  }
};

function swingItBack() {
  setTimeout(console.log("Wait"), 2000);
  video.src = previousVideos[counter - 1];
  counter--;
}

function hideHotspots() {
  allHotspots.forEach((hotspot) => {
    hotspot.removeAttribute("style");
  });
}
