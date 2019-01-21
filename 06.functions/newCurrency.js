function exchange(from, to) {
    var rates = {
        UAH : {
            UAH: 1,
            USD: 0.036,
            EUR: 0.031,
        },
        USD : {
            USD: 1,
            UAH: 27.747,
            EUR: 0.879,
        },
        EUR : {
            EUR : 1,
            USD : 1.136,
            UAH : 31.478,
        }
    }

    if(rates[from] && rates[from][to]){
        currencyValue = +prompt('Количество ' + from + ' для обмена: ', 100);
        while (currencyValue % 1 !== 0 || currencyValue === null) {
            currencyValue = +prompt('Повторите ввод');
        }            
        return (payValue = currencyValue * rates[from][to]);
    } else {
        alert('Введенные валюты не поддерживаются');
    }   
}

var payValue;
var fromCurrency = prompt('Из какой валюты конвертировать? (UAH, USD, EUR)', 'USD');
var toCurrency = prompt('В какую валюту конвертировать? (UAH, USD, EUR)', 'EUR');
exchange(fromCurrency, toCurrency);
alert('Получите ' + payValue + ' ' + toCurrency);