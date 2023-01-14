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
function addToCollection(title, artist, yearPublished, tracks) {
    let albumElements = {
        title,
        artist,
        yearPublished,
        tracks,
    }
    collection.push(albumElements);
    console.log('This is to check what is in the collection now: ', collection);
    return albumElements;
}

console.log('You just added: ', addToCollection("Oil of Every Pearl's Un-sides", 'SOPHIE', 2018,
    [{ name: "It's Okay to Cry", duration: "3:15" },
    { name: 'Ponyboy', duration: "3:25" },
    { name: "Immaterial", duration: '4:15' },
    { name: "Not Okay", duration: '5:25' }])); 

console.log('You just added ', addToCollection('EP2', 'Yaeji', 2017, 
    [{ name:"Feelings Change", duration: "2:35"}, 
    { name:"Raingurl", duration: "3:57"}, 
    { name: "Drink I'm Sippin On", duration: "3:21"}, 
    { name: "After That", duration: "3:38"}]));

console.log('You just added ', addToCollection('Live!', 'Bob Marley', 1975, 
    [{name: "Lively Up Yourself", duration: "4:33"}, 
    {name: "Get Up Stand Up (live)", duration: "6:36"}, 
    {name: "Trenchtown Rock", duration:"4:23"}, 
    {name: "Them Belly Full", duration: "4:30"}, 
    {name: "I Shot the Sheriff (Live)", duration:"5:18"}]));

console.log('You just added ', addToCollection('Dreamland', 'Black Box', 1990, 
        [{name: "Dreamland", duration: "2:04"}, 
        {name: "Open Your Eyes", duration: "5:21"}, 
        {name: "I Don't Know Anybody Else", duration: "4:35"}, 
        {name: "Ride on Time", duration: "4:33"}, 
        {name: "Everybody Everybody", duration: "5:23"}]));

console.log('You just added ', addToCollection('Little Dragon', 'Little Dragon', 2007, 
    [{name: "Twice", duration: "3:06"}, 
    {name: "Turn Left", duration: "4:05"}, 
    {name: "No Love", duration: "4:26"}, 
    {name: "Recommendation", duration: "3:52"}, 
    {name: "Constant Surprises", duration: "4:33"}]));

console.log('You just added ', addToCollection('Channel Tres', 'Channel Tres', 2018, 
    [{name: "St. Julian (intro)", duration: "1:29"}, 
    {name: "Controller", duration: "3:28"}, 
    {name: "Jet Black", duration: "4:33"}, 
    {name: "Topdown", duration:"3:50"}]));

console.log(collection);

        //Add a function named showCollection. This function should:
        // Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.)
        // Console.log the number of items in the array.
        // Loop over the array and console.log each album's information formatted like: TITLE by ARTIST, published in YEAR.

        function showCollection(array) {
            console.log("All items in collection array: ", array);
            for(let i = 0; i<array.length; i++) {
    let currentAlbum = array[i];
    console.log(`${currentAlbum.title} by ${currentAlbum.artist} published in ${currentAlbum.yearPublished} featuring tracks ${currentAlbum.tracks}`);
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
    if (allTracks.indexOf(trackToSearch) !== -1) {
        return true;
    }
    return false
}

function search(searchObject, collection) {
    if (Object.keys(searchObject).length === 0) {
        return collection;
    }
    let newArray = [];
    for (let album of collection) {
        if (searchObject.artist === album.artist && searchObject.yearPublished === album.yearPublished && isThisTrackIncluded(album.tracks, searchObject.tracks)) {
            newArray.push(album);
        }
    }
    return newArray;
}// end function

let searchObject = {
    artist: 'Bob Marley',
    yearPublished: 1975,
    tracks: ["Trenchtown Rock", "4:23"]
}
console.log(search(searchObject, collection)); 
