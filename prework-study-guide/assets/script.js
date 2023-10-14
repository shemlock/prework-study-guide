/*
To comment out multiple lines of code you use 
forward slash astericks at the start then 
asterticks forward slash at the end 
(so this if statement from an eariler task is commented out)
if (topic === 'HTML') {
 console.log("Let's study HTML!");
} else if (topic === 'CSS') {
 console.log("Let's study CSS!");
} else if (topic === 'Git') {
 console.log("Let's study Git!");
} else if (topic === 'JavaScript') {
 console.log("Let's study JavaScript!");
} else {
 console.log('Please try again!');
}
in JavaScript to comment out a single line of code you use
just 2 forward slashes at the start, nothing at the end.
*/

var topics = ["HTML", "CSS", "Git", "JavaScript"];
for (var x = 0; x < topics.length; x++) {
    console.log(topics[x]);
}


