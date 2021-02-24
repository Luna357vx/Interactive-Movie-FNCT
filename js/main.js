let paths = {
  introduction:"videos/1.IntroductionFatima.mp4",
  conspiracy:{
      definition:"videos/CT/3.DefinitionConspiracyTheoriesCaro.mp4",
      choice:{
          0:"videos/CT/4.1HistoryConspiracTheoriesVicky.mp4",
          1:"videos/CT/4.2ExampleConspiracyTheoriesCaro.mp4",
          2:"videos/CT/4.3UncoverConspiracyTheoriesVicky.mp4",
      }
  },
  fakeNews:{
      definition:"videos/FN/3.DefinitionFakeNewsFatima.mp4",
      choice:{
          0:"videos/FN/4.1HistoryFakeNewsFatima.mp4",
          1:"videos/FN/4.2ExampleFakeNewsEric.mp4",
          2:"videos/FN/4.3UncoverFakeNewsEric.mp4",
      }
  }
};

console.log(paths.conspiracy.choice[0]);

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

function showHotspots() {
  document.querySelectorAll(".hotspotContainer .hotspot").forEach((hotspot) => {
    hotspot.style.display = "inline";
  });
}
