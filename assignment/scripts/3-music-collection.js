console.log('***** Music Collection *****')
let collection = [];

function addToCollection (title, artist, yearPublished) {
    let albumElements = {
        albumTitle: '',
        albumArtist: '',
        albumYearPublished: 0,
    } 
    collection.push(albumElements);
    return albumElements
    }
