console.log('***** Music Collection *****')
// Create a variable collection that starts as an empty array.
// Add a function named addToCollection. This function should:
// Take in the album's title, artist, yearPublished as input parameters
// Create a new object having the above properties
// Add the new object to the end of the collection array
// Return the newly created object
// Test the addToCollection function:
// Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
// Console.log each album as added using the returned value.
// After all are added, console.log the collection array.

let collection = [];
function addToCollection(title, artist, yearPublished, tracksWithDuration) {
    let albumElements = {
        title,
        artist,
        yearPublished,
        tracksWithDuration,
    }
    collection.push(albumElements);
    console.log('This is to check what is in the collection now: ', collection);
    return albumElements;
}

console.log('You just added ', addToCollection("Oil of Every Pearl's Un-sides", 'SOPHIE', 2018, [["It's Okay to Cry", "3:15"], ['Ponyboy', "3:25"], ["Immaterial", '4:15'], ["Not Okay", '5:25']]));
console.log('You just added ', addToCollection('EP2', 'Yaeji', 2017, [["Feelings Change", "2:35"], ["Raingurl", "3:57"], ["Drink I'm Sippin On", "3:21"], ["After That", "3:38"], ["Passionfruit", "2:55"]]));
console.log('You just added ', addToCollection('Live!', 'Bob Marley', 1975, [["Lively Up Yourself", "4:33"], ["Get Up Stand Up (live)", "6:36"], ["Trenchtown Rock", "4:23"], ["Them Belly Full", "4:30"], ["I Shot the Sheriff (Live)", "5:18"]]));
console.log('You just added ', addToCollection('Dreamland', 'Black Box', 1990, [["Dreamland", "2:04"], ["Open Your Eyes", "5:21"], ["I Don't Know Anybody Else", "4:35"], ["Ride on Time", "4:33"], ["Everybody Everybody", "5:23"]]));
console.log('You just added ', addToCollection('Little Dragon', 'Little Dragon', 2007, [["Twice", "3:06"], ["Turn Left", "4:05"], ["No Love", "4:26"], ["Recommendation", "3:52"], ["Constant Surprises", "4:33"]]));
console.log('You just added ', addToCollection('Channel Tres', 'Channel Tres', 2018, [["St. Julian (intro)", "1:29"], ["Controller", "3:28"], ["Jet Black", "4:33"], ["Topdown", "3:50"]]));

console.log(collection);

//Add a function named showCollection. This function should:
// Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.)
// Console.log the number of items in the array.
// Loop over the array and console.log each album's information formatted like: TITLE by ARTIST, published in YEAR.

function showCollection(array) {
    console.log("All items in collection array: ", array);
    for (let i = 0; i < array.length; i++) {
        let currentAlbum = array[i];
        console.log(currentAlbum.title, 'by',currentAlbum.artist, 'published in', currentAlbum.yearPublished, currentAlbum.tracksWithDuration);
    }
}
//Test the showCollection function. 
showCollection(collection);

// Add a function named findByArtist. This function should:
// Take in artist (a string) parameter
// Create an array to hold any results, empty to start
// Loop through the collection and add any objects with a matching artist to the array.
// Return the array with the matching results. If no results are found, return an empty array.
// Test the findByArtist function. Make sure to test with an artist you know is in the collection, 
// as well as an artist you know is not in your collection. Check that for artists with multiple matches, all are found.

let artists = [];

function findByArtist(artist, collection) {
    for (i = 0; i < collection.length; i++) {
        if (collection[i].artist === artist) {
            artists.push(artist);
            return artists;
        }
    } return [];
}

findByArtist('Black Box', collection);
findByArtist('SOPHIE', collection);
findByArtist('Smash Mouth', collection);
findByArtist('Backstreet Boys', collection);

//STRETCH GOALS

// Create a function called search. This function should:
// Take an input parameter for a search criteria object. Create your solution based on a search object that has these properties:
// { artist: 'Ray Charles', year: 1957 }
// The returned output from search should meet these requirements:
// Return a new array of all items in the collection matching all of the search criteria.
// If no results are found, return an empty array.
// If there is no search object or an empty search object provided as input, then return all albums in the collection.

function isThisTrackIncluded(allTracks, trackToSearch) {
    // This function needs to see if trackToSearch exists in allTracks - search an array and return a boolean.
    if (allTracks.indexOf(trackToSearch) !== -1); {
        return true;
    } 
}

function search (searchObject, collection){
    if(Object.keys(searchObject).length === 0) {
    return collection;
    }
    let newArray = [];
    for(let album of collection) {
        if (searchObject.artist === album.artist && searchObject.yearPublished === album.yearPublished && searchObject.tracksWithDuration === album.trackswithDuration){
        newArray.push(album);
        } 
    } 
    return newArray;
}// end function

let searchObject = {
    artist: 'Bob Marley',
    yearPublished: 1975,
    tracksWithDuration: ["Get Up Stand Up (live)", "6:36"]
}
console.log(search(searchObject, collection)); 

// Add an array of tracks to your album objects. Each track should have a name and duration. You will need to update the functions to support this new property:
// Update the addToCollection function to also take an input parameter for the array of tracks.
// Update search to allow a trackName search criteria.
// Update the showCollection function to display the list of tracks for each album with its name and duration.
//     TITLE by ARTIST, published in YEAR:
//     1. NAME: DURATION
//     2. NAME: DURATION
//     3. NAME: DURATION
//     TITLE by ARTIST, published in YEAR:
//     1. NAME: DURATION
//     2. NAME: DURATION