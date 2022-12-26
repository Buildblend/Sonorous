function AppendAudioList(Array = []) {
  for (let i = 0; i < Array.length; i++) {
    var NewRow = document.createElement("tr");
    NewRow.innerHTML = `<td><img src="${Array[i].Image || `Media/Music.png`}"></img></td><td>${Array[i].Title}</td><td>${Array[i].Album}</td><td>${Array[i].Artist}</td><td>${Array[i].Genres}</td><td>${Array[i].Year}</td>`;
    document.querySelector("#PlaylistsView_TBody").appendChild(NewRow);
  }
}

function ResetAudioList() {
  document.querySelector("PlaylistsView_TBody").innerHTML = `
  <tr>
    <th>Title</th>
    <th>Artist</th>
    <th>Year</th>
  </tr>`;
}

AppendAudioList([{
  Title: "a",
  Album: "aaa",
  Artist: "Lol",
  Genres: "WTF",
  Year: 2022
}, {
  Title: "xd",
  Album: "xddd's",
  Artist: "Lol",
  Genres: "Desi",
  Year: 2023
}, {
  Title: "xddd",
  Album: "L0L",
  Artist: "Xdd",
  Genres: "Desi",
  Year: 1560
}]);

function AppendJSONCode() {
  document.querySelector("#PlaylistsView_JSON").innerHTML = JSON.stringify(PlaylistData[Sonorous.Viewing].Content);
}