//_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_//
function createTask(title, description, startDate, endDate) {
    var defaultStartDate = new Date(),
        defaultEndDate = new Date();
    defaultEndDate.setDate(defaultStartDate.getDate() + 1);
 
    return {
        title: title,
        description: description,
        start: startDate || defaultStartDate,
        end: endDate || defaultEndDate
    }
}

var task = createTask('Task 1', 'Task 2');

var arrayTask = [];

for (var i = 0; i < 5; i++) {
    arrayTask.push(createTask('Task #' + [i + 1], 'Decription'));
}
console.log(arrayTask);
console.log('////////////////////////////');

//_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_//
var arr = [{ a : 5}, { a : 7}, { a : 10}, { a : 123}, { a : 62}]
var numarray = [1, 23, 4, 6, 7, 8];
var sum = 0;

for (var i = 0; i < arr.length; i++) {
    var element = arr[i];
    sum += element.a;
}

var sumOfNums = numarray.reduce (function(acc, next) {
    console.log(acc, next);
    return acc + next;
});

console.log(sumOfNums);

//_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_//

