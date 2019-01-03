const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

function addName(planet) {
    let planetEl = document.getElementById("planets");
    planetEl.innerHTML += `<p>${planet}</p>`   
}
planets.forEach(addName)
/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/

function getCaps(planet) {
    let gc = planet.toUpperCase();
    return gc
}

function mapPlanets() {
    let mp = planets.map(getCaps);
    return mp
}

let planetE2 = document.getElementById("planets");
planetE2.innerHTML += `<p>${mapPlanets()}</p>`
/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.
*/

function getLetterE(planet) {
    return planet.includes("e");
}


function filterPlanets() {
    return planets.filter(getLetterE);
}

let planetE3 = document.getElementById("planets");
planetE3.innerHTML += `<p>${filterPlanets()}</p>`
/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.
*/


// Use the reduce method to create a sentence from the words in the following array
const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]
const sentence = words.reduce(
    function (sentenceFragment, next) {
        return sentenceFragment + " " + next
    }
)
let planetE4 = document.getElementById("planets");
planetE4.innerHTML += `<p>${sentence}</p>`
