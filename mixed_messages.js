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
const arrayVerb=['run','eat','walk','sleep',"practice","call","laugh","jump","digest ","overrate"];
const arrayObject=['the universe', 'the ocean', 'pollution', 'clouds', 'to go vegan', 'in the air', 'you', 'everyone', 'bees', 'Nashville, TN'];

const randomPersonIndex = Math.floor((Math.random()*9));
const randomPerson = arrayPerson[randomPersonIndex].name;
const personType = arrayPerson[randomPersonIndex].type;


const randomVerb=arrayVerb[Math.floor(Math.random()*9)];
const randomObject = () => {
    return arrayObject[Math.floor(Math.random()*9)];
};

const object = randomObject();

function mix () {
    if(personType==='singular with s'){
        if(randomVerb==='walk' || randomVerb==='jump'){
        document.write(`${randomPerson} ${randomVerb}s on ${object}`);
        }
        else{
            return (`${randomPerson} ${randomVerb}s ${object}`);
        }
    }
    else{

         if(randomVerb==='walk' || randomVerb==='jump'){

            return (`${randomPerson} ${randomVerb} on ${object}`);
        }
        else{
            return (`${randomPerson} ${randomVerb} ${object}`);
        }
    }
}

document.write(mix());
