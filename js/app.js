"use strict";


var numAns = 0;

// var Name = prompt('tell us what is your name');
// //console.log(Name);

// alert('Welcome ' + Name);

//  Declaring functions : 

function questions(x) {
    if (x.toLowerCase() === 'yes' || x.toUpperCase() === 'y') {
        //console.log('you are correct');
        alert('you are correct');
        numAns++ ; 
    } else if (x.toLowerCase() === 'no' || x.toUpperCase() === 'n')  {
        //console.log('nope, that is wrong');
        alert('nope, that is wrong');
    }else {
        alert ('Please answer yes or no') ; 
 
    }
}

var owner = prompt(' My name is Ihab?');
//console.log(owner);
questions(owner) ; 

var Degree = prompt('Do I have a degree in AIS?');
//console.log(Degree);

questions(Degree) ; 


var experience = prompt('Do you think I worked as a teacher?');
//console.log(experience);
questions (experience) ; 








// if (owner.toLowerCase() === 'yes' || owner.toLowerCase() === 'y') {

//     alert('you are correct');
//     numAns = numAns + 1;

// } else {

//     alert('nope, that is wrong');
// }

// var Degree = prompt('Do I have a degree in AIS?');
// //console.log(Degree);

// if (Degree.toLowerCase() === 'yes' || Degree.toLowerCase() === 'y') {

//     alert('you are correct');
//     numAns = numAns +1;

// } else {

//     alert('nope, that is wrong');
// }

// var experience = prompt('Do you think I worked as a teacher?');
// //console.log(experience);
// if (experience.toLowerCase() === 'yes' || experience.toLowerCase() === 'y') {

//     alert('you are correct');
//     numAns = numAns +1;

// } else {

//     alert('nope, that is wrong');
// }

// var goal = prompt('Do I want to be a software developer?');
// //console.log(goal);
// if (goal.toLowerCase() === 'yes' || goal.toLowerCase() === 'y') {

//     alert('you are correct');
//     numAns = numAns +1;

// } else {

//     alert('nope, that is wrong');
// }
// var lastquestion = prompt('are you reading the questions before answering?');
// //console.log(lastquestion);
// if (lastquestion.toLowerCase() === 'yes' || lastquestion.toLowerCase() === 'y') {

//     alert('you are correct');
//     numAns = numAns +1;

// } else {

//     alert('nope, that is wrong');
// }


// alert('welcome to my site' + " " + Name + " " + 'your answers in order were:' + " " + owner + " " + Degree + " " + experience + " " + goal + " " + lastquestion + " " + 'hope you are having a great day');


// var bday;

// var i;

// for (i = 0; i < 4; i++) {

//     bday = prompt('I was born in October, but which day?');



//     if (bday > 2) {

//         alert("too high");

//     } else

//         if (bday < 2) {

//             alert('too low');

//         } else {
//             alert('correct');
//             i = i + 3;
//             numAns = numAns +1;
//         }
// }

// var j;

// var userinput;

// var question7 = ["water", "coffee", "milk", "tea", "Niscafe"];

// for (j = 0; j < 6; j++) {
//     userinput = prompt('guess what is my favourite drink?');

//     if (question7.indexOf(userinput.toLowerCase()) < 0 || question7.indexOf(userinput.toLowerCase()) > 4) {

//         alert('Wrong');
//     }
//     else {

//         alert('Correct');

//         j = j+6;

//         numAns = numAns +1;
//     }
// }


// alert("you could have picked one of these :water, coffee, milk, tea, Niscafe");

// alert("The number of the question you answered correctly is " + numAns + "out of 7 questions ");