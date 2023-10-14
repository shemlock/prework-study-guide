/*
To comment out multiple lines of code you use 
forward slash astericks at the start
then 
asterticks forward slash at the end 

in JavaScript to comment out a single line of code you use
just 2 forward slashes at the start, nothing at the end.
*/

// example single line comment 

var topics = ["HTML", "CSS", "Git", "JavaScript"];

var randomTopic = topics[Math.floor(Math.random() * topics.length)];

function listTopics() {
    for (var x = 0; x < topics.length; x++) {
        console.log(topics[x]);
    }
}

function selectTopic() {
    if (randomTopic === 'HTML') {
        console.log("Let's study HTML!");
   } else if (randomTopic === 'CSS') {
        console.log("Let's study CSS!");
   } else if (randomTopic === 'Git') {
         console.log("Let's study Git!");
   } else if (randomTopic === 'JavaScript') {
        console.log("Let's study JavaScript!");
   } else {
        console.log('Please try again!');
   }
}
console.log("Here are the topics we learned through Prework:");
listTopics()

console.log("Which topic should we study first?");
selectTopic()
