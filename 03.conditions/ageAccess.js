// Access by age

var age = +prompt('Введите ваш возраст');

if (isNaN(age)) {
    alert('Ввведите число пожалуйста!');
} else {
    if (age >= 18) {
        alert('Доступ к сервису разрешен');
    } else if (age >= 12) { 
        alert('Попробуйте наш 12+ сервис');
    } else {
        alert('Доступ закрыт');
    }
}