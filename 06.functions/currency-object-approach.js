function exchange(from, to) {
    var payValue = 0,
        from = from.toUpperCase(),
        to = to.toUpperCase(),
        rates = {
        UAH : {
            UAH: 1,
            USD: 0.036,
            EUR: 0.031
        },
        USD : {
            UAH: 27.747,
            USD: 1,
            EUR: 0.879
        },
        EUR : {
            UAH : 31.478,
            USD : 1.136,
            EUR : 1
        }
    }
    console.table(rates); // for some reason
    if(rates[from] && rates[from][to]){
        currencyValue = +prompt('Количество ' + from + ' для обмена: ', 100);
        while (currencyValue % 1 !== 0 || currencyValue === null) {
            currencyValue = +prompt('Повторите ввод');
        }            
        payValue = currencyValue * rates[from][to];
        alert('Получите ' + payValue + ' ' + to);
        return payValue;
    } else {
        alert('Введенные валюты не поддерживаются');
    }   
}

var fromCurrency = prompt('Из какой валюты конвертировать? (UAH, USD, EUR)', 'USD');
var toCurrency = prompt('В какую валюту конвертировать? (UAH, USD, EUR)', 'EUR');
exchange(fromCurrency, toCurrency);