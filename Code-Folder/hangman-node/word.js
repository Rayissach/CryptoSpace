// var letter = require('./letter.js');
var prompt = require('prompt');
var inquirer = require('inquirer');
var wordLine = [];
var words = ['hello', "jagger", "monotonic"]
var randomize = words[Math.floor(Math.random() * words.length)];
// var randomWord = words[randomize];

function Word () {
    
    for(i=0; i < words.length; i++) {
        for(j=0; j < words[i].length; j++) {
            wordLine.push("_"); 
        }
        console.log(words[j])
        console.log("-------------------------")
        console.log(words[i])
    }
    
    console.log(randomize)
}

Word();

console.log('Word: ' + wordLine.join(' '));