//_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_//
function random(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

//_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_//
function generateWords(wordsLength, minCharsAmount, maxCharsAmount, template) {
    var min = minCharsAmount || 1,
        max = maxCharsAmount ? maxCharsAmount : min + 9,
        currentTemplate = template || 'abcdefghijklmnopqrstuvwxyz';
    var obj = {};

    for (var i = 0; i < wordsLength; i++) {
        var chars = random(min, max);
        var temp = '';

        for (var j = 0; j < chars; j++) {
            temp += currentTemplate[random(0, currentTemplate.length - 1)];
        }
        var createdArray = [temp];
        obj[chars] = obj[chars] ? obj[chars].concat(createdArray) : createdArray
    }
    return obj;
}

const wordsObject = generateWords(10, 6, 10);
console.table(wordsObject);