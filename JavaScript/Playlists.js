var PlaylistData = [
  {
    Used: false,
    Title: `Unnamed Playlist 1`,
    Description: `My lovely collection of songs!`,
    Thumbnail: `./Media/Playlist Default.png`,
    Content: [],
    Created: new Date(-1)
  },
  {
    Used: false,
    Title: `Unnamed Playlist 2`,
    Description: `My lovely collection of songs!`,
    Thumbnail: `./Media/Playlist Default.png`,
    Content: [],
    Created: new Date(-1)
  },
  {
    Used: false,
    Title: `Unnamed Playlist 3`,
    Description: `My lovely collection of songs!`,
    Thumbnail: `./Media/Playlist Default.png`,
    Content: [],
    Created: new Date(-1)
  },
  {
    Used: false,
    Title: `Unnamed Playlist 4`,
    Description: `My lovely collection of songs!`,
    Thumbnail: `./Media/Playlist Default.png`,
    Content: [],
    Created: new Date(-1)
  },
  {
    Used: false,
    Title: `Unnamed Playlist 5`,
    Description: `My lovely collection of songs!`,
    Thumbnail: `./Media/Playlist Default.png`,
    Content: [],
    Created: new Date(-1)
  },
  {
    Used: false,
    Title: `Unnamed Playlist 6`,
    Description: `My lovely collection of songs!`,
    Thumbnail: `./Media/Playlist Default.png`,
    Content: [],
    Created: new Date(-1)
  },
  {
    Used: false,
    Title: `Unnamed Playlist 7`,
    Description: `My lovely collection of songs!`,
    Thumbnail: `./Media/Playlist Default.png`,
    Content: [],
    Created: new Date(-1)
  },
  {
    Used: false,
    Title: `Unnamed Playlist 8`,
    Description: `My lovely collection of songs!`,
    Thumbnail: `./Media/Playlist Default.png`,
    Content: [],
    Created: new Date(-1)
  },
  {
    Used: false,
    Title: `Unnamed Playlist 9`,
    Description: `My lovely collection of songs!`,
    Thumbnail: `./Media/Playlist Default.png`,
    Content: [],
    Created: new Date(-1)
  },
  {
    Used: false,
    Title: `Unnamed Playlist 10`,
    Description: `My lovely collection of songs!`,
    Thumbnail: `./Media/Playlist Default.png`,
    Content: [],
    Created: new Date(-1)
  },
];

if (localStorage.getItem("PlaylistData") == null) {
  localStorage.setItem("PlaylistData", JSON.stringify(PlaylistData));
} else {
  PlaylistData = JSON.parse(localStorage.getItem("PlaylistData"));
}

function UpdatePlaylistStorage() {
  localStorage.setItem("PlaylistData", JSON.stringify(PlaylistData));
  UpdatePlaylistsDisplay();
}

function PlaylistClick(Playlist) {
  Playlist = Playlist - 1;
  if (PlaylistData[Playlist].Used == true) {
    ShowPlaylist(Playlist);
  } else {
    CreatePlaylist(Playlist);
  }
}

function UpdatePlaylistsDisplay() {
  for (let i = 0; i < PlaylistData.length; i++) {
    if (PlaylistData[i].Used == false) {
      document.querySelector(`#PlaylistItem` + (i + 1)).style.backgroundImage = `url('${Sonorous.Configuration.UnusedPlaylistBackground}')`;
      continue;
    }
    document.querySelector(`#PlaylistItem` + (i + 1)).style.backgroundImage = `url('${PlaylistData[i].Thumbnail}')`;
  }
}

UpdatePlaylistsDisplay();

function ShowPlaylist(Playlist) {
  document.querySelector(`#Overview`).style.display = `none`;
  document.querySelector(`#PlaylistsView`).style.display = `block`;
  document.querySelector(`#PlaylistsView_Title`).innerHTML = PlaylistData[Playlist].Title;
  document.querySelector(`#PlaylistsView_Description`).innerHTML = PlaylistData[Playlist].Description;
  Sonorous.Viewing = Playlist;
  ResetAudioList();
}

function CreatePlaylist(Playlist) {
  PlaylistData[Playlist].Used = true;
  UpdatePlaylistStorage();
}

function DeletePlaylist(Playlist) {
  PlaylistData[Playlist].Used = false;
  UpdatePlaylistStorage();
  UpdatePlaylistsDisplay();
  Overview();
}