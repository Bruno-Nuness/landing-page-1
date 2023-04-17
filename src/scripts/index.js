function play() {
  const boxVideoOne = document.querySelector("#play-video-One");
  const playButtonOne = document.querySelector("#btn-play-One");

  playButtonOne.addEventListener("click", () => {
    boxVideoOne.play();
  
    playButtonOne.style.display = "none";
  });

}
play();
