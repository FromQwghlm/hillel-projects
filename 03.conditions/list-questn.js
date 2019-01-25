
// анкета 

function debugLog (param, value) {
    console.log(param + ': ' + value);
}

var calc = 0;
MIN_SCALE = 1;
MAX_SCALE = 3;

var questnArr = [
'technology stack #1',
'technology stack #2',
'technology stack #3',
'technology stack #4',
'technology stack #5',
'technology stack #6'
];

var entLevel = questnArr.length * MAX_SCALE * 0.75; // 75%

function mainDoc() {
    alert('Вам будет задано ' + questnArr.length +
    ' вопросов\nОцените свой skill по шкале от ' + MIN_SCALE + ' до ' + MAX_SCALE);

    for (var i=0; i < questnArr.length; i++) {
        questPrompt = +prompt(questnArr[i]);
        while (!(questPrompt >= MIN_SCALE) || !(questPrompt <= MAX_SCALE)) {
            questPrompt = +prompt('Будтье внимтельны:\nШкала оценки от ' + MIN_SCALE + ' до ' + MAX_SCALE); 
        }
        calc = calc + questPrompt;
        debugLog('calc ' + (1 + i), calc);         
    }
    debugLog('entLevel ', entLevel);
    if (entLevel < calc) {
        console.log('Рекомендован к принятию на работу');   
    } else {
        console.log('текущий результат недостаточен');
    }
    alert('Спасибо. Мы свяжемся с вами позднее.');
}

var age = +prompt('Введите ваш возраст');
if (isNaN(age)) {
    alert('Введенные данные некорректны');
} else if (age < 30) {
    alert('Данная вакансия предназначена для лиц старше 30 лет');
} else {
    mainDoc();
}