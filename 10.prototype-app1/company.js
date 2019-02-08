function Company() {
	this.stuff = [];
}

Company.prototype = {
	add: function (employee, skillLevel, maxPayment, hiringDate) {
		employee.positionInfo = new PositionInfo(employee, skillLevel, maxPayment);
		employee.hiringDate = hiringDate || new Date().toLocaleDateString();
		this.stuff.push(employee);
	},
	removeEmployee: function (employee) {
		this.stuff.splice(this.stuff.findIndex(el => {
			return el === employee;
		}), 1);
	},
	getTaxInfo: function () {
		return this.stuff.map(el => {
			return new TaxInfo(el);
		});
	},
	totalPaymentSum: function () {
		return this.stuff.reduce((x, y) => {
			return x + y.payment;
		}, 0);
	},
	showFreeEmployee: function (isOccupied) {
		return this.stuff.filter(el => {
			return el.isOccupied === isOccupied;
		});
	},
	findByTechnology: function (technology) {
		return this.stuff.filter(el => {
			return el.technology === technology;
		});
	},
	getEmployeeResume: function (employee) {
		return new EmployeeResume(employee);
	}
}

function Employee(id, name, surname, payment, technology, isOccupied) {
	this.id = id;
	this.fullName = name + ' ' + surname;
	this.payment = payment;
	this.technology = technology;
	this.isOccupied = isOccupied ? false : true;	
}

Employee.technologies = ['Javascript', 'Python', 'C++', 'PHP', 'Java', '.Net', 'Scala', 'Visual Basic'];

function TaxInfo(employee) {
	this.fullName = employee.fullName;
	this.tax = Math.round(employee.payment * .95); // -5% from payment
	this.payment = employee.payment;
	this.isOccupied = employee.isOccupied;
}

function EmployeeResume(employee) {
	this.fullName = employee.fullName;
	this.position = employee.technology;
}

EmployeeResume.prototype.hello = function () {
	console.log(`Hello, World! My name's ${this.name} ${this.surname}. I would like to get a job on position of ${this.position} developer.`);
}

Employee.levels = ['Junior', 'Middle', 'Senior', 'Lead'];

function PositionInfo(employee, skillLevel, maxPayment) {
	this.skillLevel = skillLevel || Employee.levels[randomInt(0, Employee.levels.length - 1)];
	this.basePayment = employee.payment;
	this.maxPayment = maxPayment || this.basePayment + Math.round(this.basePayment * (Employee.levels.indexOf(this.skillLevel) * .25)); // make 25% step between skillLevel
}

//_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_//

function randomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

const company = new Company();
for (let i = 1; i <= 10; i++) {
	company.add(
		new Employee(	//function Employee(id, name, surname, payment, technology, isOccupied)
			i,
			'Name' + '_' + i,
			'Surname' + '_' + i,
			randomInt(1000, 5000),
			Employee.technologies[randomInt(0, Employee.technologies.length - 1)],
			randomInt(false, true),
		)
	);
}

console.log(company);

/* 
console.table(company.getTaxInfo());
console.table(`totalPaymentSum: ${company.totalPaymentSum()}`);
 */

// console.table(company.showFreeEmployee(true));
console.table(company.findByTechnology('Javascript'));


