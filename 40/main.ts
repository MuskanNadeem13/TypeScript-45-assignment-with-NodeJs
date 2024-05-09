// Define the make_album function
function make_album(artist_name: string, album_title: string, tracks?: number){
    let album: {artist: string, title: string, tracks?:  number} = {
        artist: artist_name,
        title: album_title,
    };

    if(tracks !==  undefined){
       album.tracks = tracks;
    }

    return album;

}

// Calling three functions with different values

let album1 = make_album("Muskan", "Album title 1");

let album2 = make_album("Ayesha", "Album title 2");

// Calling a make _album function with third parameter
let album3 = make_album("Alisha", "Album title 3", 10);


// Printing the variables

console.log(album1);
console.log(album2);
console.log(album3);

