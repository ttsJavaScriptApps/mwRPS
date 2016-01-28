console.log(1 + 1);
console.log("I have 2 dogs.");
console.log("My dogs are Shar Peis.");
console.log("The older dog's name is Uma.");
console.log("The younger dog's name is Rico.");

var dogSentence1 = "My dogs are Shar Peis.";
var dogSentence2 = "The younger dog's name is Rico.";
console.log(dogSentence1, dogSentence2);

console.log(dogSentence1.replace('dogs', 'looney tune mutts'));

function somethingExciting(string) {
  return string + '!';
}

console.log(somethingExciting("yes, this is exciting"));
console.log(somethingExciting(dogSentence2));

dogSentence2 = somethingExciting(dogSentence2);
console.log(dogSentence2);


