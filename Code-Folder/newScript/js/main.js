// VERY REPETITVE WAY
// function person(name, favColor) {
//     console.log("Hello my name is " + name + " and my favorite color is " + favColor + ".")
//   }
//   person(john.name, john.favoriteColor);
//   person("Jane Smith", "green");

// OBJECT ORIENTATION METHOD (EFFECTIVE BUT NOT RECOMMENDED)
//   var john = {
//       name: "John Doe",
//       favoriteColor: "blue",
//       greet: function () {
//           console.log("Hello My name is " + john.name + " and my favorite color is " + john.favoriteColor + ".")
//       }
//   }

//   john.greet();

// CREATING A CONSTRUCTOR FUNCTION
function Person(fullName, favColor) {
    this.name  = fullName
    this.favoriteColor = favColor
    // the (this) keyword is used to refer to whichever object is being created
    this.greet = function() {
        console.log("Hello My name is " + this.name + " and my favorite color is " + this.favoriteColor + ".")
    }
}
var john = new Person("John Doe", "blue");
john.greet();

var jane = new Person("Jane Smith", "green");
jane.greet();
