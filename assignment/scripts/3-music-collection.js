console.log('***** Music Collection *****')
let collection = [];
let albumElements = {
    title: '',
    artist: '',
    yearPublished: 0,
}

function addToCollection (title, artist, yearPublished) {
    let albumElements = {
        title: title,
        artist: artist,
        yearPublished: yearPublished,
    }    
        collection.push(albumElements);
        return albumElements;
    }

console.log('You just added ', addToCollection("Oil of Every Pearl's Undersides", 'SOPHIE', 2018));
console.log('You just added ', addToCollection("EP2", 'Yaeji', 2017));
console.log('You just added ', addToCollection('Live!', 'Bob Marley', 1975));
console.log('You just added ', addToCollection('Dreamland', 'Black Box', 1990));
console.log('You just added ', addToCollection('Little Dragon', 'Little Dragon', 2007));
console.log('You just added ', addToCollection('Channel Tres', 'Channel Tres', 2018));

console.log(collection);

//Add a function named showCollection. This function should:
// Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.)
// Console.log the number of items in the array.
// Loop over the array and console.log each album's information formatted like: TITLE by ARTIST, published in YEAR.

function showCollection (array) {
    for (let i =0; i<array.length; i++){
        array[i];
        console.log(array[i]);
    }
}
//Test the showCollection function. 
console.log(showCollection(collection));

// Add a function named findByArtist. This function should:
// Take in artist (a string) parameter
// Create an array to hold any results, empty to start
// Loop through the collection and add any objects with a matching artist to the array.
// Return the array with the matching results. If no results are found, return an empty array.
// Test the findByArtist function. Make sure to test with an artist you know is in the collection, 
// as well as an artist you know is not in your collection. Check that for artists with multiple matches, all are found.

let artists = [];

function findByArtist (artist){
    let i = 0;

    while (i < collection.length) {
        console.log(collection[i]);
        i++;
        artists.push(artist);
        if (artist === artists) {
            return artists;
        }  
    }  return 'null';
}

console.log(findByArtist('Black Box'));
console.log(findByArtist('Smash Mouth'));