// "happy" while & do examples
// UnOfficial 

var userIsHappy = true;
var currrentNumber = 0;

while ((currrentNumber < 5) && (userIsHappy !== false)){
    userIsHappy = confirm('Are you happy that number is ' + (currrentNumber++) + '?') 
}

alert('Ok. No silly numbers, only happiness');

for (var number = 0, userIsHappy = true; userIsHappy; number++) {
    userIsHappy = confirm('Still happy?');
}

alert('Happy ' + number + ' times');
