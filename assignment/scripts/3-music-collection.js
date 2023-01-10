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