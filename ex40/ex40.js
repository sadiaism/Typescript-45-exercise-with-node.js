function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: "artist_name",
        title: "album_title",
    };
    if (tracks !== undefined) {
        album.track = tracks;
    }
    return album;
}
// calling function
var album1 = make_album("sara", "artist 1");
var album2 = make_album("maria", "artist 2");
var album3 = make_album("maryam", "artist 3", 5);
//print
console.log(album1);
console.log(album2);
console.log(album3);
