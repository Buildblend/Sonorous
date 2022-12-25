var Sonorous = {
  Visit: 0,
  LastVisit: new Date(-1).getTime(),
  Viewing: -1,
  Overview: document.querySelector("#Overview"),
  Pages: document.querySelectorAll(".Pages"),
  Configuration: {
    UnusedPlaylistBackground: `Media/Create.png`
  }
}, S = Sonorous;

if (localStorage.getItem("Visit") == null) {
  localStorage.setItem("Visit", 1);
} else {
  localStorage.setItem("Visit", Number(localStorage.getItem("Visit")) + 1);
  Sonorous.Visit = Number(localStorage.getItem("Visit"));
}

function UpdateClock() {
  if (new Date().getHours() >= 18) {
    document.querySelector("#IntroHeading").innerHTML = `Good evening!`;
  } else if (new Date().getHours() >= 12) {
    document.querySelector("#IntroHeading").innerHTML = `Good afternoon!`;
  } else if (new Date().getHours() >= 3) {
    document.querySelector("#IntroHeading").innerHTML = `Good morning!`;
  } else if (new Date().getHours() >= 0) {
    document.querySelector("#IntroHeading").innerHTML = `Still awake?!`;
  } else {
    document.querySelector("#IntroHeading").innerHTML = `Hello!`;
  }
}

UpdateClock();

localStorage.setItem("LastVisit", Number(new Date().getTime()));
Sonorous.LastVisit = Number(localStorage.getItem("LastVisit"));

function Overview() {
  for (let i = 0; i < Sonorous.Pages.length; i++) {
    Sonorous.Pages[i].style.display = "none";
  }
  Sonorous.Overview.style.display = "block";
  UpdatePlaylistStorage();
  UpdatePlaylistsDisplay();
}

function Livecheck() {
  SavePlayer();
  UpdatePlaylistStorage();
  UpdateClock();
  UpdateDataUsage();
}

Sonorous.Livecheck = setInterval(Livecheck, 2500);

function CalculateData() {
  let Datalist = [
    localStorage.Visit,
    localStorage.LastVisit,
    localStorage.PlaylistData,
    localStorage.LastPlayed
  ];
  return new Blob(Datalist).size;
}

function SpaceNumber(Num) {
  var String = Num.toString();
  let Part1, Part2, Part3;
  if (String.length == 4) {
    Part1 = String.slice(0, 1); Part2 = String.slice(1, 4); Part3 = ``;
  } else if (String.length == 5) {
    Part1 = String.slice(0, 2); Part2 = String.slice(2, 5); Part3 = ``;
  } else if (String.length == 6) {
    Part1 = String.slice(0, 3); Part2 = String.slice(3, 6); Part3 = ``;
  } else if (String.length == 7) {
    Part1 = String.slice(0, 1); Part2 = String.slice(1, 4); Part3 = String.slice(4, 7);
  } else {
    Part1 = String; Part2 = ``; Part3 = ``;
  }
  return `${Part1} ${Part2} ${Part3}`.trim();
}

function CleanData() {
  if (prompt(`You are about to clean all your data on Sonorous. This includes songs, playlists, analytics. You will be treated as a new user. To confirm, please type "Clean My Data" in the input below.`).search(/(Clean|Remove|Reset|Clear|Delete) (My|All) (Data|Info|Stuff)/gim) != -1) {
    localStorage.clear();
    alert(`All data has been cleaned.`);
  } else {
    alert(`You have typed "Clean My Data" incorrectly, so data has not been cleaned. Please try again and type it again carefully.`);
  }
}

function UpdateDataUsage() {
  var DataUsed = CalculateData();
  document.querySelector("#DataUsedMeter").style.backgroundImage = `linear-gradient(90deg, orange 0 ${(((DataUsed / 5000000) * 100).toFixed(3))}%, white 0)`;
  document.querySelector("#DataUsed").innerHTML = DataUsed;
  document.querySelector("#DataUsedPercent").innerHTML = (((DataUsed / 5000000) * 100).toFixed(3)) + `%`;
  document.querySelector("#DataRemaining").innerHTML = SpaceNumber(5000000 - DataUsed);
}

UpdateDataUsage();

function ShowSettings() {
  Overview();
  document.querySelector(`#Overview`).style.display = `none`;
  document.querySelector(`#SettingsView`).style.display = `block`;
  Sonorous.Viewing = -2;
}