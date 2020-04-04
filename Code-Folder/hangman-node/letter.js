var prompt = require('prompt');
var inquirer = require('inquirer');

function Letter (value) {
    this.value = '_'
    this.show = false
    // this.letterHit = function () {
    //     if (letterGuessed) {
            
    //     }
    // }
    
    // console.log(this.show)
    // console.log(this.value)
//////////////////////////////
letterGuessed();
   
}

Letter()

function letterGuessed () {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Enter a letter',
            name: 'letter',
            validate: function(let) {
            var regEx = new RegExp('^[a-zA-Zs]{1,1}$');
            return regEx.test(let);
            }
        }
    ]).then(function(guess) {
     console.log(guess)
    })
}

module.exports = Letter;
