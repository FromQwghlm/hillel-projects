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

// --------------------------------------------------------------------- //
function appendTask(tag, text, parent) {
	var parentArea = document.getElementById(parent);
    var tag = document.createElement(tag);
    tag.innerText = text;
    parentArea.appendChild(tag);
}

// --------------------------------------------------------------------- //
function createTaskNode(amount) {
    var amount = amount || 5,
	    arrayTask = [];

    for (var i = 0; i < amount; i++) {
        var time = new Date();
        time.setSeconds(time.getSeconds() + i);
        var taskTitle = 'task_#' + [i + 1];   
        arrayTask.push(createTask(taskTitle, 'decription', time));
    }
	return arrayTask;
}

// --------------------------------------------------------------------- //
function timeFormat(time) {
return time = zeroPad(time.getHours(), 2) + ':' + zeroPad(time.getMinutes(), 2) + ':' + zeroPad(time.getSeconds(), 2);
}

function zeroPad(num, digit) {
    var zero = '';
    for (var i = 0; i < digit; i++) {
        zero += '0';
    }
    
    return (zero + num).slice(-digit);
}

// --------------------------------------------------------------------- //
function taskCheck(arrayTask, time) {
	var currentDate = Math.floor(time.getTime() / 1000);
	arrayTask.forEach(task => {
        var taskDate = Math.floor(task.start.getTime() / 1000);
        var addInfo = ' (created at ' + timeFormat(task.start) + ')';
		if (taskDate === currentDate) appendTask('li', task.title  + addInfo, 'tasks-area');
	});
}

// --------------------------------------------------------------------- //
function main() {
	var time = new Date();
    var interval = 1000;
    var iterrLimit = 1;
    var clock = document.getElementById('clock');
    
    clock.innerText = 'System time: ' + timeFormat(time);
    var arrayTask = createTaskNode(5);

	var timerId = setInterval(function() {
        taskCheck(arrayTask, time);
        time.setTime(time.getTime() + interval);
        if (iterrLimit == 10) {
            clearInterval(timerId);
            appendTask('span', 'stop demo at ' + timeFormat(time), 'test-area');
        }
        iterrLimit++;
    }, interval);
    
}

//_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_//
/* 
<div id="test-area" style="display: none">
    <div id="clock"></div>
    <ul id="tasks-area">
    </ul>
</div>
 */
document.getElementById("test-area").style.display = "block";
main();