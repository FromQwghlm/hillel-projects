// Запросить у пользователя значение, кратное которому 
// будут выводиться числа - вывести их в консоль.

function debugLog (param, value) {
    console.log(param + ': ' + value);
}

/* var multiple = 2;

for (let i = 0; i < 10; i++) {
    test = Number(i%6);
    //console.log(`2%i = ${(2%i)}`);
    debugLog ('test', test);

    
} */

var multiple = +prompt('Введите число, к котором будем выводить кратные числа');
var multipleList = [];

//for
// for (let i = 1; i <= 100; i++) {
// 	if (i % num) continue;
// 	result.push(i);	
// }

//while
var i = 1;
while (i <= 10) {
	if (i % multiple === 0) {
        console.log(`${i} / ${multiple} = ${i / multiple} (add ${i} to multipleList)`);
        multipleList.push(i);
    }
	i++;
}

console.log(multipleList);

