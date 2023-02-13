// refactored repeated values into meaningful constants,
// by convention WE_NAME_CONSTANTS_LIKE_THIS
const TYPE_SINGULAR_WITH_S = 0;
const TYPE_SINGULAR_WITHOUT_S = 1;
const TYPE_PLURAL = 2;

const persons = [
    {
        name: "The universe",
        type: TYPE_SINGULAR_WITH_S,
    },
    {
        name: "Ismail",
        type: TYPE_SINGULAR_WITH_S,
    },
    {
        name: "Oke",
        type: TYPE_SINGULAR_WITH_S,
    },
    {
        name: "The cars",
        type: TYPE_PLURAL,
    },
    {
        name: "The monkey",
        type: TYPE_SINGULAR_WITH_S,
    },
    {
        name: "The neighbours of the aunt of the best friend of my sister's boyfriend",
        type: TYPE_PLURAL,
    },
    {
        name: "The general",
        type: TYPE_SINGULAR_WITH_S,
    },
    {
        name: "Elon Musk",
        type: TYPE_SINGULAR_WITH_S,
    },
    {
        name: "Ikea's fans",
        type: TYPE_PLURAL,
    },
    {
        name: "You",
        type: TYPE_SINGULAR_WITHOUT_S,
    },
];

const verbs = [
    "run",
    "eat",
    "walk",
    "sleep",
    "practice",
    "call",
    "laugh",
    "jump",
    "digest ",
    "overrate",
];

const objects = [
    "the universe",
    "the ocean",
    "pollution",
    "clouds",
    "to go vegan",
    "in the air",
    "you",
    "everyone",
    "bees",
    "Nashville, TN",
];

const getRandomIndex = (max) => Math.floor(Math.random() * max)
const getRandomElement = (array) => array[getRandomIndex(array.length)];

const makePhrase = () => {
    const person = getRandomElement(persons);
    const verb = getRandomElement(verbs);
    const object = getRandomElement(objects);

    return `${person.name} ${verb}${person.type === TYPE_SINGULAR_WITH_S ? 's' : ''} ${(verb === 'walk' || verb === 'jump') ? 'on' : ''} ${object}`;
}

//Generate phrase and insert it in the document
const mix = () => {
    document.getElementById("phrase-container").innerHTML = makePhrase();
}

//bind click event
document.getElementById("mix").addEventListener('click', mix);