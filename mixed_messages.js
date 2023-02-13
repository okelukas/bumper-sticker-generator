const arrayPerson=[];
const arrayVerb=[];
const arrayObject=['the universe', 'the ocean', 'pollution', 'clouds', 'to go vegan', 'in the air', 'you', 'everyone', 'bees', 'Nashville, TN'];

const randomPerson:'';
const randomVerb:'';
const randomObject = () => {
    return arrayObject[Math.floor(Math.random()*9)];
}

/* function mix () {
    
} */






console.log(randomObject());
