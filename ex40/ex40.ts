function make_album(artist_name: string, album_title: string, tracks?: number) {
  let album: { artist: string; title: string; track?: number } = {
    artist: "artist_name",
    title: "album_title",
  };

  if (tracks !== undefined) {
    album.track = tracks;
  }

  return album;
}

// calling function

let album1 = make_album("sara","artist 1");

let album2 = make_album("maria","artist 2");

let album3 = make_album("maryam","artist 3",5 );


//print
console.log(album1);
console.log(album2);
console.log(album3);

