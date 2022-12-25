var AudioPlayer = {
  Element: document.querySelector(`#AudioPlayer`),
  Paused: true,
  Ended: false,
  Position: 0,
  Duration: 0,
  Remaining: 0
}

function SavePlayer() {
  localStorage.setItem("LastPlayed", JSON.stringify(AudioPlayer));
}

//function Play();
//function Pause();
//function ConvertTimestamp();
//function UpdateTimestamp();
//function Scan();