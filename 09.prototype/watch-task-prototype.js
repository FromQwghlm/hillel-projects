//_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_//
function Task(title, description, startDate, endDate) {
    var defaultStartDate = new Date(),
        defaultEndDate = new Date();
    defaultEndDate.setDate(defaultStartDate.getDate() + 1);
 
        this.title = title;
        this.description = description;
        this.start = startDate || defaultStartDate;
        this.end = endDate || defaultEndDate;
}

Task.prototype = {
    constructor: Task,
    taskCheck: function () {
        var time = new Date();
        var currentDate = Math.floor(time.getTime() / 1000);
        var taskDate = Math.floor(this.start.getTime() / 1000);
        if (taskDate === currentDate) {
            this.appendTask();
        }
    },
    appendTask: function () {
        var parentArea = document.getElementById('tasks-area');
        var tag = document.createElement('li');
        tag.innerText = this.title + ' (created at ' + this.start.toLocaleTimeString() + ')';
        parentArea.appendChild(tag);    
    }
}

function createTaskNode(amount) {
    var amount = amount || 5,
	    arrayTask = [];

    for (var i = 1; i <= amount; i++) {
        var time = new Date();
        var taskTitle = 'task_#' + i;

        time.setSeconds(time.getSeconds() + i);
        arrayTask.push(new Task(taskTitle, 'decription', time));
    }
	return arrayTask;
}

function time() {
	var time = new Date();
	document.getElementById('clock').innerText = 'System time: ' + time.toLocaleTimeString();
}

function main() {
    var iterrLimit = 1;
    var interval = 1000;  
    var arrayTask = createTaskNode(5);
    time();

	var timerId = setInterval(() => {
        time();     
        arrayTask.forEach(el => {
            el.taskCheck();
        });
        if (iterrLimit == 10) clearInterval(timerId);
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