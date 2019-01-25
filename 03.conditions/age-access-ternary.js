// Access by age. Ternary 

var age = +prompt('Введите ваш возраст');

isNaN(age) 
? alert('Ввведите число пожалуйста!') 
: (age >= 18) ? alert('Доступ к сервису разрешен') 
: (age >= 12) ? alert('Попробуйте наш 12+ сервис') 
: alert('Доступ закрыт');