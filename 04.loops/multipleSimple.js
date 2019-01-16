// Запросить у пользователя значение, кратное которому 
// будут выводиться числа - вывести их в консоль.

var maxNum = 20;
var multiple = +prompt('Введите число от 1 до ' + maxNum + ' к которому \nбудем выводить кратные числа', 2);

// FOR SECTION
for (var i = 1; i <= maxNum; i++) {
	if (i % multiple === 0) console.log(i);	
}

// WHILE SECTION
var i = 1;
while (i <= maxNum) {
	if (i % multiple === 0) console.log(`${i} кратно ${multiple}`);
	i++;
}