"use strict";

var Name = prompt('tell us what is your name');
//console.log(Name);

alert('Welcome ' + Name);

var owner = prompt('Is my name is Ihab?');
//console.log(owner);

if (owner.toLowerCase() === 'yes' || owner.toLowerCase() === 'y') {

    alert('you are correct')

} else {

    alert('nope, that is wrong')
}

var Degree = prompt('Do i have a degree in AIS?');
//console.log(Degree);

if (Degree.toLowerCase() === 'yes' || Degree.toLowerCase() === 'y') {

    alert('you are correct')

} else {

    alert('nope, that is wrong')
}

var experience = prompt('Do you think i worked as a teacher?');
//console.log(experience);
if (experience.toLowerCase() === 'yes' || experience.toLowerCase() === 'y') {

    alert('you are correct')

} else {

    alert('nope, that is wrong')
}

var goal = prompt('Do i want to be a software developer?');
//console.log(goal);
if (goal.toLowerCase() === 'yes' || goal.toLowerCase() === 'y') {

    alert('you are correct')

} else {

    alert('nope, that is wrong')
}
    var lastquestion = prompt('are you reading the questions before answering?');
    //console.log(lastquestion);
    if (lastquestion.toLowerCase() === 'yes' || lastquestion.toLowerCase() === 'y') {

        alert('you are correct')

    } else {

        alert('nope, shame on you')
    }


alert('welcome to my site' + " " + Name + " " + 'you answers in order were:' + " " + owner + " " + Degree + " " + experience + " " + goal + " " + lastquestion + " "+ 'hope you are having a great day');

