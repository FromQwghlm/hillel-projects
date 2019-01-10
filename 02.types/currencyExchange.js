// Tell to user what currency is current in your system. 
// Ask him to enter custom number and then convert it to your currency.
// Don't forget to notify user about the result!

function getValue(promptNum) {
    promptNum = +prompt('Сколько драконов вы готовы обменять? '); 
    while (promptNum % 1 !== 0) {
        promptNum = +prompt('Ты не обманешь меня, чужеземец! '); 
    }
    return promptNum; 
}

STAG_VAL = 210;
var dragonsCount;
var stagCount;

next = confirm('Железный Банк Браавоса готов обменять ваши драконы Таргариенов');
if (next === true) {
    dragonsCount = getValue(dragonsCount);
    if (dragonsCount > 0) {
        stagCount = (dragonsCount * STAG_VAL);
        next = confirm('Я дам тебе ' + stagCount + ' серебрянных оленей?');

        if (next === true) {
            alert ('По рукам!');
        } else {
            alert ('На большее можешь не рассчитывать..');
        }
    } else {
        alert ('Как пожелаешь незнакомец..');
    }
} else {
    alert ('Будем рады помочь вам в следующий раз.');
}