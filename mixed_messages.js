const arrayPerson=[
    {
        name:'The universe',
        type:'singular with s',
    },
    {
        name:'Ismail',
        type:'singular with s',
    },
    {
        name:'Oke',
        type:'singular with s',
    },
    {
        name:'The cars',
        type:'plural',
    },
    {
        name:'The monkey',
        type:'singular with s',
    },
    {
        name:"The neighbours of the aunt of the best friend of my sister's boyfriend",
        type:'plural',
    },
    {
        name:'The general',
        type:'singular with s',
    },
    {
        name:'Elon Musk',
        type:'singular with s',
    },
    {
        name:"Ikea's fans",
        type:'plural',
    },
    {
        name:'You',
        type:'singular without s',
    },
];
const arrayVerb=['run','eat','walk on','sleep',"practice","call","laugh","cry","digest ","overrate"];
const arrayObject=['pancakes'];

const randomPersonIndex = Math.floor((Math.random()*9));
const randomPerson = arrayPerson[randomPersonIndex].name;
const personType = arrayPerson[randomPersonIndex].type;



console.log(randomPerson);

const randomVerb=arrayVerb[Math.floor(Math.random()*9)];
const randomObject='pancakes';

function mix () {
    
   console.log(`${randomPerson} ${randomVerb} ${randomObject}`);

}

mix();