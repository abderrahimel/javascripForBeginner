if (true){

console.log("this is the first script js on visual studio");
}

let spaceship = {
    crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
}; 

// Write your code below
for (let key in spaceship.crew){
  console.log(`${spaceship.crew[key].name}:${key}`);
}
console.log('-----------------------------------');

for (let crewMember in spaceship.crew) {
  console.log(`${spaceship.crew[crewMember].name}: ${spaceship.crew[crewMember].degree}`)
}
//-------------------------------------------------------------------
// object are collections of related data and functionality.
// We store that functionality in methods on our objects
// for example
const goat = {
    dietType: 'herbivore',
    makeSound() {
        console.log('this is called method');    },
    diet(){
        console.log(this.dietType);
    }
};
// we invoke the diet() methode
goat.diet()

// access to the object's property by the 'this' keyword 
const robot = {
    model: '1E78V2',
    energyLevel: 100,
    provideInfo(){
      return ` I am ${this.model} and my current energy level is ${this.energyLevel}.`;
    }
  };
  console.log(robot.provideInfo());
// One common convention is to place an underscore _ before the name of a property to mean that the property should not be altered.
// this keyword
const object = {
    firstName: 'MyName',
    lastName: 'MyLastName',
    printFirstName(){
        console.log(`My first Name is ${this.firstName}`);
    },
    printLastName(){
        console.log(`My last name is ${this.lastName}`);
    }
}

object.printFirstName()
object.printLastName()

/*Getters
Getters are methods that get and return the internal properties of an object.
 But they can do more than just retrieve the value of a property! Let’s take a look at a getter method: */
 const robot1 = {
    _model: '1E78V2',
    _energyLevel: 100,
    get energyLevel(){
     if (typeof this._energyLevel === 'number'){
       return `My current energy level is ${this._energyLevel}`;
     }else{
       return `System malfunction: cannot retrieve energy level`;
     }
    }
  };
  
  console.log(robot1.energyLevel);
/*
Notice that in the getter method above:

We use the get keyword followed by a function.
We use an if...else conditional to check if both _firstName and _lastName exist 
(by making sure they both return truthy values) and then return a different value depending on the result.
We can access the calling object’s internal properties using this. 
In fullName, we’re accessing both this._firstName and this._lastName.
In the last line we call fullName on person. In general, getter methods do not need to be called with a set of parentheses. 
Syntactically, it looks like we’re accessing a property.
*/
/*
Setters
Along with getter methods, we can also create setter methods which reassign values of existing properties within an object.
 Let’s see an example of a setter method:
*/

const robot2 = {
    _model: '1E78V2',
    _energyLevel: 100,
    _numOfSensors: 15,
    get numOfSensors(){
      if(typeof this._numOfSensors === 'number'){
        return this._numOfSensors;
      } else {
        return 'Sensors are currently down.'
      }
    },
    set numOfSensors(num){
      if(typeof this._numOfSensors === 'number' && num >= 0){
        this._numOfSensors = num;
      }else {
        console.log('Pass in a number that is greater than or equal to 0');
      }
    }
    
  };

  robot2.numOfSensors = 100
  
  console.log(robot2.numOfSensors)
  /*
  Factory Functions 
So far we’ve been creating objects individually, but there are times where we want to create 
many instances of an object quickly. 
Here’s where factory functions come in.
  */
 const robotFactory = (model, mobile) => {
    return {
      model: model,
      mobile: mobile,
      beep(){
        console.log('Beep Boop')
      }
    }
   }
   const tinCan = robotFactory('P-500', true)
   
   tinCan.beep()
// Property Value Shorthand
function robotFactory1(model, mobile){
    return {
      model,
      mobile,
      beep() {
        console.log('Beep Boop');
      }
    }
  }
  
  // To check that the property value shorthand technique worked:
  const newRobot = robotFactory1('P-501', false)
  console.log(newRobot.model)
  console.log(newRobot.mobile)
  const robot3 = fonction = (name, serie) =>{
    return {
      name,serie,
      printName(){
        console.log(this.name)
      }
    }
  }

// Destructured Assignment
/*
We often want to extract key-value pairs from objects and save them as variables.
 Take for example the following object:
*/
const vampire = {
    name: 'Dracula',
    residence: 'Transylvania',
    preferences: {
      day: 'stay inside',
      night: 'satisfy appetite'
    }
  };
  const { residence } = vampire; // like const residence = vampire.residence; 
  console.log(residence); // Prints 'Transylvania' 

  const { day } = vampire.preferences; 
console.log(day); // Prints 'stay inside'
// ------------------------------------------------------------------------------------------------

const robot4 = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// What is missing in the following method call?
// we are missing the argument of the method keys()
// 1 - Method keys(nameOfObject) return array of keys
const robotKeys = Object.keys(robot4);

console.log(robotKeys);

// Declare robotEntries below this line:
// 2 - entries() return [[key, value], ...]
const robotEntries = Object.entries(robot4);

console.log(robotEntries);

// Declare newRobot below this line:
const source = {laserBlaster: true, voiceRecognition: true};
// 3 - assign(two array) return array = array1 + array2
const newRobot3 = Object.assign(source, robot4);

console.log(newRobot3);
/*
Review
Congratulations on finishing Advanced Objects!

Let’s review the concepts covered in this lesson:

The object that a method belongs to is called the calling object.
The this keyword refers the calling object and can be used to access properties of the calling object.
Methods do not automatically have access to other internal properties of the calling object.
The value of this depends on where the this is being accessed from.
We cannot use arrow functions as methods if we want to access other internal properties.
JavaScript objects do not have built-in privacy, rather there are conventions to follow to notify other developers about the intent of the code.
The usage of an underscore before a property name means that the original developer did not intend for that property to be directly changed.
Setters and getter methods allow for more detailed ways of accessing and assigning properties.
Factory functions allow us to create object instances quickly and repeatedly.
There are different ways to use object destructuring: one way is the property value shorthand and another is destructured assignment.
As with any concept, it is a good skill to learn how to use the documentation with objects!
*/

const menu = {
         _courses: {
           appetizers:[],
           mains: [],
           desserts: []
         },
        get appetizers(){ 
          return this._courses.appetizers
        },
        get mains(){ 
          return this._courses.mains
        },
      get desserts(){ 
          return this._courses.mains
        },
      set appetizers(appetizers){
         this.appetizers = appetizers
      },
      set mains(mains){
        this.mains = mains
      },
      set desserts(desserts){
        this.desserts = desserts
      },
      get courses(){ 
        return {
          appetizers: this.appetizers,
          mains: this.mains,
          desserts: this.desserts
        }
      },
      addDishToCourse(courseName, dishName, dishPrice){
        let dish = {
          name: dishName,
          price: dishPrice
        };
      this._courses[courseName].push(dish);  
      },
      getRandomDishFromCourse(courseName){
       let dishes = this._courses[courseName];  
       let randomIndex = Math.floor(Math.random() * dishes.length);
      return dishes[randomIndex];    
      },
     generateRandomMeal: function(){
        let appetizers = this.getRandomDishFromCourse('appetizers');
        let mains = this.getRandomDishFromCourse('mains');
        let desserts = this.getRandomDishFromCourse('desserts');
        let totalPrice = appetizers.price + mains.price + desserts.price;
      return `You meal is ${appetizers.price}, ${mains.price}, ${desserts.price} The price is ${totalPrice}`;
       
}
}

menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25)
menu.addDishToCourse('mains', 'Caesar Salad', 4.25)
menu.addDishToCourse('desserts', 'Caesar Salad', 4.25)

const meal = menu.generateRandomMeal();

console.log(meal);

//================================================================================================
const team = {
  _players: [
    {
      firstName: 'Pablo',
      lastName: 'Sanchez',
      age: 11
     }
  ],
  _games: [

    {
      opponent: 'Broncos',
      teamPoints: 42,
      opponentPoints: 27
    }
  ],
  get players(){
    return this._players;
               },
  get games(){
    return this._games;
  },
  addPlayer(firstName, lastName, age){
    let player = {
      firstName: firstName,
      lastName:lastName,
      age: age
    };
    this.players.push(player);
  },
  addGame(opponent, teamPoints, opponentPoints){
let game =   {  opponent: opponent,
         teamPoints: teamPoints,
         opponentPoints: opponentPoints
      };   
   this.games.push(game);
  },

};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);
console.log(team.players);

team.addGame('silta vigo', 12, 20);
team.addGame('real betiz', 12, 20);
team.addGame('echbilya', 12, 20);
team.addGame('barca', 12, 20);
console.log(



)
console.log(team.games);
//=================================================================================================
/*
Introduction to Classes
JavaScript is an object-oriented programming (OOP) language we can use to model real-world items. 
In this lesson, you will learn how to make classes.
 Classes are a tool that developers use to quickly produce similar objects.
 */
class Dog {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }

  get name() {
    return this._name;
  }
  get behavior() {
    return this._behavior;
  }   

  incrementBehavior() {
    this._behavior ++;
  }
}

const halley = new Dog('Halley');
console.log(halley.name); // Print name value to console
console.log(halley.behavior); // Print behavior value to console
halley.incrementBehavior(); // Add one to behavior
console.log(halley.name); // Print name value to console
console.log(halley.behavior); // Print behavior value to console

//Constructor
class Surgeon {
  constructor(name, department) {
    this._name = name;
    this._department = department;
    this._remainingVacationDays = 20;
  }
  get name(){ return this._name; }
  get department(){ return this._department; }
  get remainingVacationDays(){ return this._remainingVacationDays; }
  takeVacationDays(daysOff){
    this._remainingVacationDays -= daysOff; 
  }
}

const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
const surgeonDurant = new Surgeon('Durant', 'Orthopedics');
console.log(surgeonCurry.name);
surgeonCurry.takeVacationDays(3);
console.log(surgeonCurry.remainingVacationDays);

// extends and super() keywords
/*
Notice, we call super on the first line of our constructor(),
 then set the usesLitter property on the second line. In a constructor(), 
 you must always call the super method before you can use the this keyword — 
 if you do not, JavaScript will throw a reference error. To avoid reference errors, 
it is best practice to call super on the first line of subclass constructors.
*/
class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

class Nurse extends HospitalEmployee {
       constructor(name, certifications){
         super(name)
         this._certifications = certifications
       }
       get certifications(){
         return this._certifications;
       }
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']);
console.log('name :' + nurseOlynyk.name)
console.log('certifications :' + nurseOlynyk.certifications)
console.log('remainingVacationDays: ' + nurseOlynyk.remainingVacationDays)

/*

                                  Static Methods

method is static, so you can call it directly from the class, but not from an instance of the class.

*/


/*

Way to go! Let’s review what you learned.

Classes are templates for objects.
Javascript calls a constructor method when we create a new instance of a class.
Inheritance is when we create a parent class with properties and methods that we can extend to child classes.
We use the extends keyword to create a subclass.
The super keyword calls the constructor() of a parent class.
Static methods are called on the class, but not on instances of the class.


 */

class Doctor extends HospitalEmployee {
  constructor(name){
    super()
    this._insurance = 20
 }
 get insurance(){
   return this._insurance;
 }
}

const doctor = new Doctor('Abderrahim ')
doctor.takeVacationDays(6);
console.log(doctor.remainingVacationDays)

// project


class School {
        constructor(name, level, numberOfStudents){
                   this._name = name
                   this._level = level
                   this._numberOfStudents = numberOfStudents
             }
             get name(){
               return this._name
             }
             get level(){
               return this._level
             }           
             get numberOfStudents(){
               return this._numberOfStudents
             }
             set numberOfStudents(newNumberOfStudents){
               if (typeof newNumberOfStudents == 'number' ){
                 this._numberOfStudents = numberOfStudents
                 } else {
                   console.log('Invalid input: numberOfStudents must be set to a Number.')
                 }
             }
             quickFacts(){
              console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`)
             }
             static pickSubstituteTeacher(substituteTeachers){
               let randomId = Math.floor(Math.random() * substituteTeachers.length)
               return substituteTeachers[randomId];
             }
}

class PrimarySchool extends School {
           constructor(name, numberOfStudents, pickupPolicy){
             super(name, 'primary', numberOfStudents)
             this._pickupPolicy = pickupPolicy
           }
           get pickupPolicy(){
             this._pickupPolicy = pickupPolicy
           }
}

class Middle extends School {
           constructor(name, numberOfStudents){
             super(name, 'Middle', numberOfStudents)
           }  
}

class HighSchool extends School {
           constructor(name, numberOfStudents, sportsTeams){
             super(name, 'high', numberOfStudents)
             this._sportsTeams = sportsTeams
           }    
           
           get sportsTeams(){
            console.log( this._sportsTeams)
           }

}
const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.')

lorraineHansbury.quickFacts()
School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'])


const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field'])
console.log("/////////////////////////////////////////")
alSmith.sportsTeams

/*
1 . The first step is to place your ES6 JavaScript file in a directory called src. From your root directory, the path to the ES6 file is ./src/main.js2 . you can create a package.json file by typing npm init into the terminal.

2 . you can create a package.json file by typing npm init into the terminal.
  ===> 

  project
|_ src
|___ main.js
|_ package.json

 The npm init command creates a package.json file in the root directory.
 A package.json file contains information about the current JavaScript project. Some of this information includes:

. Metadata — This includes a project title, description, authors, and more.
. A list of node packages required for the project — If another developer wants to run your project, npm looks inside package.json and downloads the packages in this list.
. Key-value pairs for command line scripts — You can use npm to run these shorthand scripts to perform some process. In a later exercise, we will add a script that runs Babel and transpiles ES6 to ES5.
NOTICE
You are not required to answer the prompts

*/
// Babel is a library devloped to transpile ES6 to ES5
// Transpilation is the process of converting one programming language to another.
// npm = node package manager 
// command 'npm run build ' 

// Install Node Packages
/*
 . We use the npm install command to install new Node packages locally.
 . The install command creates a folder called node_modules and copies the package files to it.
 . The install command also installs all of the dependencies for the given package.
*/
// We use the npm install command to install new Node packages locally
// Use npm with the -D flag to install the Babel command line package 
// and add it to the devDependencies property in package.json.
 // $ npm install babel-cli -D
// Use npm with the -D flag to install the Babel preset environment package 
// and add it to the devDependencies property in package.json.
// $ npm install babel-preset-env -D

/* The new directory structure contains the following:
project
|_ node_modules
|___ .bin
|___ ...
|_ src
|___ main.js
|_ package.json

*/

/*
.babelrc
Now that you’ve downloaded the Babel packages, you need to specify the version of the source JavaScript code.

You can specify the initial JavaScript version inside of a file named .babelrc. 
In your root directory, you can run touch .babelrc to create this file.

*/

/*
Your project directory contains the following folders and files:

project
|_ node_modules
|___ .bin
|___ ...
|_ src
|___ main.js
|_ .babelrc
|_ package.json
*/
/*

To specify that we are transpiling code from an ES6+ source, we have to add the following JavaScript object into .babelrc:

{
  "presets": ["env"]
}
 */

 /*
 Babel Source Lib
There’s one last step before we can transpile our code. We need to specify a script in package.json that initiates the ES6+ to ES5 transpilation.

Inside of the package.json file, there is a property named "scripts" that holds an object for specifying command line shortcuts. It looks like this:
 
 In the code above, the "scripts" property contains an object with one property called "test". Below the "test" property, we will add a script that runs Babel like this:

...
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "build": "babel src -d lib"
}

 */ 
/*
Build

We’re ready to transpile our code! In the last exercise, we wrote the following script in package.json:

"build": "babel src -d lib"
Now, we need to call "build" from the command line to transpile and write ES5 code to a directory called lib.

From the command line, we type:

npm run build

The command above runs the build script in package.json.

Babel writes the ES5 code to a file named main.js (it’s always the same name as the original file), inside of a folder called lib. The resulting directory structure is:
--------------------------------------------------------------------
project
|_ lib
|___ main.js
|_ node_modules
|___ .bin
|___ ...
|_ src
|___ main.js
|_ .babelrc
|_ package.json
---------------------------------------------------------------------
Notice, the directory contains a new folder named lib, with one file, called main.js.

The npm run build command will transpile all JavaScript files inside of the src folder.
 This is helpful as you build larger JavaScript projects — regardless of the number of JavaScript files,
 you only need to run one command (npm run build) to transpile all of your code.

*/
//                                                           Review
/*

In this lesson, you learned about browser compatibility and transpilation. Let’s review the key concepts:

ES5 — The old JavaScript version that is supported by all modern web browsers.
ES6 — The new(er) JavaScript version that is not supported by all modern web browsers. The syntax is more readable, similar to other programming languages, and addresses the source of common bugs in ES5.
caniuse.com — a website you can use to look up HTML, CSS, and JavaScript browser compatibility information.
Babel — A JavaScript package that transpiles JavaScript ES6+ code to ES5.
npm init — A terminal command that creates a package.json file.
package.json — A file that contains information about a JavaScript project.
npm install — A command that installs Node packages.
babel-cli — A Node package that contains command line tools for Babel.
babel-preset-env — A Node package that contains ES6+ to ES5 syntax mapping information.
.babelrc — A file that specifies the version of the JavaScript source code.
"build" script — A package.json script that you use to tranpsile ES6+ code to ES5.
npm run build — A command that runs the build script and transpiles ES6+ code to ES5.
For future reference, here is a list of the steps needed to set up a project for transpilation:

1 . Initialize your project using npm init and create a directory called src
2 . Install babel dependencies by running
3 .npm install babel-cli -D
4 . npm install babel-preset-env -D
5 . Create a .babelrc file inside your project and add the following code inside it:
{
  "presets": ["env"]
}
6 . Add the following script to your scripts object in package.json:
"build": "babel src -d lib"
6 . Run npm run build whenever you want to transpile your code from your src to lib directories.
// Babel is a node package that developers use to transpile ES6+ code to ES5c

*/
// What is the name of the organization that standardizes the JavaScript language?
//=====> Ecma international
// transpilation The process of converting one programming language to another

// Which of the following websites can you use to find browser compatibility information for HTML, CSS, and JavaScript features?

//===> caniuse.com
//========================================================================================
/*                             module.exports
 */ // ===================================================================================
 /*
 . module is a variable that represents the module,
  and exports exposes the module as an object.
 . We can get started with modules by defining a module in one file 
 and making the module available for use in another file with Node.js
  module.exports syntax. Every JavaScript file run in Node has a local module object 
 with an exports property used to define what should be exported from the file.
 
 . Below is an example of how to define a module and how to export it using the statement module.exports
 
 -----------------------------------------------------------------
 let Menu = {};
Menu.specialty = "Roasted Beet Burger with Mint Sauce";
 
module.exports = Menu; 
------------------------------------------------------------------

 */
/*
                                    require()
To make use of the exported module and the behavior we define within it, 
we import the module into another file.
 In Node.js, use the require() function to import modules.
*/
/*
----------------------------------------------------------
const Menu = require('./menu.js');
 
function placeOrder() {
  console.log('My order is: ' + Menu.specialty);
}
 
placeOrder();
----------------------------------------------------------

*/

/*
                    another way to define module 

file 1: 2-Airplane.js
-------------------------------------------
module.exports = {
  myAirplane: "CloudJet",
  displayAirplane: function(){
    return this.myAirplane;
  }
 
};
-------------------------------------------
-------------------------------------------
file 2: 2-missionControl.js ====>
---------------------------------------------------------
const Airplane = require('./2-airplane.js')

console.log(Airplane.displayAirplane());
---------------------------------------------------------
*/

//====================================================================================
/*
                                          export default

. Node.js supports require()/module.exports, but as of ES6,
 JavaScript supports a new more readable and flexible syntax for exporting modules. 
These are usually broken down into one of two techniques, default export and named exports.

. We’ll begin with the first syntax, default export.
 The default export syntax works similarly to the module.exports syntax,
  allowing us to export one module per file.

 . When using ES6 syntax, we use export default in place of module.exports.
   Node.js doesn’t support export default by default, 
   so module.exports is usually used for Node.js development
    and ES6 syntax is used for front-end development. As with most ES6 features
-----------------------------------------------------------------------
const Airplane = {
  availableAirplanes: [
      {  name: "AeroJet",
         fuelCapacity: 800
       
     },
     {
       name:"SkyJet",
       fuelCapacity: 500
     }
  ]
}
export default Airplane;
-----------------------------------------------------------------------



*/
/*
                                        import
ES6 module syntax also introduces the import keyword for importing objects
--------------------------------------------------------------------
import Airplane from './airplane';// import nameToRefer from './nameOfLocalFile'

function displayFuelCapacity(){
  Airplane.availableAirplanes.forEach(
    function(element){
   console.log(`Fuel Capacity of  ${element.name} :  ${element.fuelCapacity}`);
  }
  )
}

displayFuelCapacity()
-------------------------------------------------------------------------

*/

/*
                                                Named Exports

ES6 introduced a second common approach to export modules.
 In addition to export default, named exports allow us to export data through 
 the use of variables.
 Let’s see how this works

example ====>
 -----------------------------------------------
 let specialty = '';
function isVegetarian() {
}; 
function isLowSodium() {
}; 
 
export { specialty, isVegetarian };
------------------------------------------------
*/

/*
let availableAirplanes = [{
 availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators']  ,
 name: 'AeroJet',
 fuelCapacity: 800
}, 
{ availableStaff: ['pilots', 'flightAttendants'],
  name: 'SkyJet',
 fuelCapacity: 500
}];

let flightRequirements = {
  requiredStaff: 4
}

function meetsStaffRequirements(availableStaff, requiredStaff){
         if(availableStaff.length >= requiredStaff){
           return true;
         }else{
           return false;
         }
}

export { availableAirplanes, flightRequirements, meetsStaffRequirements };

*/
//================================================================================

/*
Named Imports
To import objects stored in a variable,
 we use the import keyword and include the variables in a set of {}

*/
// for example, we would write:

/*

import { specialty, isVegetarian } from './menu';
 
console.log(specialty);

*/

/*
import {availableAirplanes, flightRequirements,meetsStaffRequirements} from './airplane';

function displayFuelCapacity(){
  availableAirplanes.forEach(
    function(element){
   console.log(`Fuel Capacity of  ${element.name} :  ${element.fuelCapacity}`);
  }
  )
}

displayFuelCapacity()
function displayStaffStatus(){
availableAirplanes.forEach(
  function(element){
     console.log(element.name + ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff) );
  }
)
}

displayStaffStatus()

*/
//=========================================================================================

/*  a n o t h e r   w a y   t o   u s e   o b j e c t   i n   o t h e r  f i l e 

Export Named Exports
Named exports are also distinct in that they can be exported as soon as they are declared, 
by placing the keyword export in front of variable declarations.
---------------------------------------------------------
export let specialty = '';
export function isVegetarian() {
}; 
function isLowSodium() {
}; 
----------------------------------------------------------

*/
//===========================================================================================

/*
         E x p o r t   as

Named exports also conveniently offer a way to change the name of variables when we export or import them. We can do this with the as keyword.
------------------------------------------------------------------------
let specialty = '';
let isVegetarian = function() {
}; 
let isLowSodium = function() {
}; 
 
export { specialty as chefsSpecial, isVegetarian as isVeg, isLowSodium };
--------------------------------------------------------------------------

*/
//===========================================================================================
/*
                    I m p o r t  as

To import named export aliases with the as keyword, we add the aliased variable in our import statement.
-------------------------------------------------------------------
import { chefsSpecial, isVeg } from './menu';
-------------------------------------------------------------------
A n o t h e r   w a y   o f   u s i n g   a l i a s e s   i s   t o   i m p o r t   t h e   e n t i r e   m o d u l e   a s   a n   a l i a s:

----------------------------------------------------------------------
import * as Carte from './menu';
 
Carte.chefsSpecial;
Carte.isVeg();
Carte.isLowSodium(); 
----------------------------------------------------------------------
*/
//==========================================================================================
/*   C o m b i n i n g   E x p o r t   S t a t e m e n t s

export let obj = { };
let obj2 = {};
export default obj2;

----------------------------------------------------------------------
let specialty = '';
function isVegetarian() {
}; 
function isLowSodium() {
}; 
function isGlutenFree() {
};
 
export { specialty as chefsSpecial, isVegetarian as isVeg };
export default isGlutenFree;
----------------------------------------------------------------------

*/
// C o m b i n i n g   I m p o r t   S t a t e m e n t s

/*
We can import the collection of objects and functions with the same data.

We can use an import keyword to import both types of variables as such:
----------------------------------------------------------------------
import { specialty, isVegetarian, isLowSodium } from './menu';
 
import GlutenFree from './menu';
----------------------------------------------------------------------
*/
/*                          R  e  v  i  e  w

We just learned how to use JavaScript modules. Let’s review what we learned:

Modules in Node.js are reusable pieces of code that can be exported from one program and imported for use in another program.

module.exports exports the module for use in another program.
require() imports the module for use in the current program.
ES6 introduced a more flexible, easier syntax to export modules:

default exports use export default to export JavaScript objects, functions, and primitive data types.
named exports use the export keyword to export data in variables.
named exports can be aliased with the as keyword.
import is a keyword that imports any object, function, or data type

*/


//============================================================================================
/*                         J A V A S C R I P T          P R O M I S E S                     */
/* 
Promises are a way of organizing asynchronous calls that is better than using callbacks. 
The callbacks are still there, but they come with a degree of organization.
 Promises are also the basis for the next level of making async code easier to write –
  async and await.

  .then() is a higher-order function— it takes two callback functions as arguments.
   We refer to these callbacks as handlers. 
   When the promise settles, the appropriate handler will be invoked with that settled value.


   The first handler, sometimes called onFulfilled, is a success handler,

    and it should contain the logic for the promise resolving.
The second handler, sometimes called onRejected, is a failure handler, 

and it should contain the logic for the promise rejecting.


We can invoke .then() with one, both, or neither handler! This allows for flexibility, 
but it can also make for tricky debugging. If the appropriate handler is not provided, 
instead of throwing an error, .then() will just return a promise with the same settled value as the promise it was called on. 
One important feature of .then() is that it always returns a promise.


*/

/*
---------------------------------------------------------------------------------------------
let prom = new Promise((resolve, reject) => {
  let num = Math.random();
  if (num < .5 ){
    resolve('Yay!');
  } else {
    reject('Ohhh noooo!');
  }
});
 
const handleSuccess = (resolvedValue) => {
  // resolve
  console.log(resolvedValue);
};
 
const handleFailure = (rejectionReason) => {
  // reject
  console.log(rejectionReason);
};
 
prom.then(handleSuccess, handleFailure);
-------------------------------------------------------------------------------------------

*/

/*
Les promesses sont des objets qui représentent le résultat éventuel d'une opération asynchrone.


A Promise object can be in one of three states:====>

. Pending: The initial state— the operation has not completed yet.

. Fulfilled: The operation has completed successfully and the promise
 now has a resolved value. For example, a request’s promise might resolve with
  a JSON object as its value.

. Rejected: The operation has failed and the promise has a reason for the failure.
 This reason is usually an Error of some kind.
------------------------------------------
Pending: The dishwasher is running but has not completed the washing cycle.
Fulfilled: The dishwasher has completed the washing cycle and is full of clean dishes.
Rejected: The dishwasher encountered a problem (it didn’t receive soap!) and returns unclean dishes.
*/
console.log("            t h e   s e t T i m e o  u t   f u n c t i o n         ")
const usingSTO = () => {
  console.log("This line of code will log to the console last.");
};

setTimeout(usingSTO, 100);


// Keep the line below as the last line of code:
console.log("This is the first line of code in app.js.");
console.log("This is the second line of code in app.js.");
console.log("This is the third line of code in app.js.");
console.log("This is the fourth line of code in app.js.");
console.log("This is the  fifth line of code in app.js.");
//------------------------------------------------------------------------------
/*
. In at least two seconds delayedHello() will be invoked.
 But why is it “at least” two seconds and not exactly two seconds?

. This delay is performed asynchronously—the rest of our program won’t 
    stop executing during the delay.
Asynchronous JavaScript uses something called the event-loop.
    After two seconds, delayedHello() is added to a line of code waiting to be run.
   Before it can run, any synchronous code from the program will run. 
   Next, any code in front of it in the line will run.
   This means it might be more than two seconds before delayedHello() is actually 
   executed.

*/

const delayedHello = () => {
  console.log('Hi! This is an asynchronous greeting!');
};
 
setTimeout(delayedHello, 2000);
//======================================================================

let cleanRoom = function(){
  return new Promise(function(resolve, reject){
    resolve('Cleaned The Room');
  });
}

let removeGarbage = function(message){
  return new Promise(function(resolve, reject){
     resolve(message + ' remove Garbage');
  });
}

let winIcecream = function(message){
  return new Promise(function(resolve, reject){
    resolve(message + ' won Icecream');
  });
}

// run the promise
cleanRoom().then(function(result){
  return removeGarbage(result);
})
.then(function(result){
  return winIcecream(result);
})
.then(function(result){
  console.log('Finish ' + result);
})

// methode .all()
Promise.all([cleanRoom(), removeGarbage(), winIcecream()])
.then((result) => {
  console.log("another way " + result)
})
/*
                         J A V A S C R I P T P      R O M I S E S

  R e v i e w

Awesome job! Promises are a difficult concept even for experienced developers, so pat yourself on the back. You’ve learned a ton about asynchronous JavaScript and promises. Let’s review:

. Promises are JavaScript objects that represent the eventual result of an asynchronous operation.
. Promises can be in one of three states: pending, resolved, or rejected.
. A promise is settled if it is either resolved or rejected.
. We construct a promise by using the new keyword and passing an executor function to the Promise constructor method.
. setTimeout() is a Node function which delays the execution of a callback function using the event-loop.
. We use .then() with a success handler callback containing the logic for what should happen if a promise resolves.
. We use .catch() with a failure handler callback containing the logic for what should happen if a promise rejects.
. Promise composition enables us to write complex, asynchronous code that’s still readable. We do this by chaining multiple .then()‘s and .catch()‘s.
. To use promise composition correctly, we have to remember to return promises constructed within a .then().
. We should chain multiple promises rather than nesting them.
. To take advantage of concurrency, we can use Promise.all().


 */
const checkAvailability = (itemName, distributorName) => {
    console.log(`Checking availability of ${itemName} at ${distributorName}...`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (restockSuccess()) {
                console.log(`${itemName} are in stock at ${distributorName}`)
                resolve(itemName);
            } else {
                reject(`Error: ${itemName} is unavailable from ${distributorName} at this time.`);
            }
        }, 1000);
    });
};

// This is a function that returns true 80% of the time
// We're using it to simulate a request to the distributor being successful this often
function restockSuccess() {
    return (Math.random() > .2);
}


const onFulfill = (itemsArray) => {
  console.log(`Items checked: ${itemsArray}`);
  console.log(`Every item was available from the distributor. Placing order now.`);
};

const onReject = (rejectionReason) => {
	console.log(rejectionReason);
};

// Write your code below:
const checkSunglasses = checkAvailability('sunglasses', 'Favorite Supply Co.');

const checkPants = checkAvailability('pants', 'Favorite Supply Co.');

const checkBags = checkAvailability('bags', 'Favorite Supply Co.');

Promise.all([checkSunglasses, checkPants, checkBags])
.then(onFulfill)
.catch(onReject)

//                                   Q U I Z Z E S   F O R   P R O M I S E
/*
1 . What state will this promise be in after  seconds ?
{Fulfilled or Pending or Rejected}
const examplePromise = () => {
  return new Promise((resolve, reject) => {
    if(true){
      setTimeout(() => resolve('success'), 3000);
    }else {
      setTimeout(() => resolve('failed'), 5000);
    }
  });
};

2 . What value is printed to the console?

const asyncHello = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'Hello!');
});

console.log(typeof asyncHello); // Object

Correct! A Promise is an object representing the eventual completion or failure of an asynchronous operation.

3 . What is value of the argument that is passed to the onReject()?

let onFulfill = value => {console.log(value);}
let onReject = reson => {console.log(reason);};

const promise = new Promise((resolve, reject) => {
  if(false) {
    resolve('success value);
  } else {
    reject();
  }
});

promise.then(onFulfill, onReject);
===>   the result will be undefined
Correct. Because no argument is passed in when reject() is called, the value defaults to undefined.

4 . Which of the executor function's parameter is called if the asynchronous task completes successfully?

const example = new Promise((function1, function2) => { .... });

function1
Correct! The first of these functions (function1) is called when the asynchronous task completes successfully.

5 . True or False / promise1 and promise2 bothproduce the same output.

const examplePromise1 = new Promise((resolve, reject) => reject('Uh-oh!'));
const examplePromise2 = new Promise((resolve, reject) => reject('Uh-oh!'));

const onFulfill = value => { console.log(value)};
const onReject = reason => { console.log(reason)};

const promise1 = examplePromise1.then(onFulfill, onReject);

const promise2 = examplePromise2.then(onFulfill).catch(onReject);

True
Correct! .catch(onReject) is syntactic sugar for .then(undefined ,onReject).

6 . Which one of the following is NOT a state that a Promise resolves to?


Undefined

7 . What is the fulfilled value of Promise.all()?

An array
Correct! The Promise.all() method runs many promises in parallel
 and waits until all of them to resolve and returns 
 an array of results as its fulfill value.

8 . What will be printed to the console after running the code provided?

let link = state => {
  return Promise((resolve, reject) =>{
    if (state){
      resolve('success');
    }else{
      reject('error');
    }
  });
}

let promiseChain = link(true);

promiseChain
.then( data => {
  console.log(data . ' 1');
  return link(true);
})
.then( data => {
  console.log(data + ' 2');
  return link(true);
});

success 1

success 2

Correct. Asynchronous operations are chained by explicitly 
returning promises within .then()‘s executed in the correct order.

9 . True or False: The .then() method returns a Promise.

True
*/  

/*
async Callbacks is like this

setTimeout(callbackFunction)

*/
//======================================================================================
//                            A S Y N C           A W A I T
/*
                          
                                  T h e   a s y n c   K e y w o r d

                                                                                                                                                                                                      
*/
// two way to create async function

// first way
/**
The async keyword is used to write functions that handle
 asynchronous actions. We wrap our asynchronous logic 
 inside a function prepended with the async keyword. Then,
  we invoke that function.
 */
async function myFunc() {
  // Function body here
  console.log('First async function ')
};
 
myFunc();

// second Way    async function
/*
We’ll be using async function declarations throughout this lesson,
 but we can also create async function expressions:
*/
// notice that async functions always return a promise.
/*
This means we can use traditional promise syntax, like .then()
 and .catch with our async functions.
  An async function will return in one of three ways:

. If there’s nothing returned from the function, 
it will return a promise with a resolved value of undefined.
. If there’s a non-promise value returned from the function,
 it will return a promise resolved to that value.
. If a promise is returned from the function,
 it will simply return that promise
------------------------------------------------
 async function fivePromise() { 
  return 5;
}
 
fivePromise()
.then(resolvedValue => {
    console.log(resolvedValue);
  })  // Prints 5
------------------------------------------------
In the example above, even though we return 5 inside the function
 body, what’s actually returned when we invoke fivePromise() 
 is a promise with a resolved value of 5.
*/

