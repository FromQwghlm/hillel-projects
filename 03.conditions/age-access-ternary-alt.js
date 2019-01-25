// Access by age. Ternary 

var age = +prompt('Введите ваш возраст');

var message = isNaN(age) 
? 'Ввведите число пожалуйста!'
: (age >= 18) ? 'Доступ к сервису разрешен'
: (age >= 12) ? 'Попробуйте наш 12+ сервис'
: 'Доступ закрыт';

alert(message);