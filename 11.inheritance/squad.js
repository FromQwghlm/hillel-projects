class Squad {
	constructor() {
		this.unit = [];
	}
}

class Resource {
	constructor(resType, maxHealth, maxStamina, currentHealth, currentStamina) {
		this.resType = resType;
		this.maxHealth = maxHealth;
		this.maxStamina = maxStamina;
		this.currentHealth = currentHealth || maxHealth;
		this.currentStamina = currentStamina || maxStamina;
	}
}
Resource.prototype = {
	isReadyToMove: function(distance) {
		return this.currentStamina - distance >= 0;
	},
	isReadyToFight: function (damage) {
		return this.currentHealth - damage > 0;
	},
	restoreHealth: function () {
		this.currentHealth = this.maxHealth;
	},
	restoreStamina: function () {
		this.currentStamina = this.maxStamina;
	},
	clone: function () {
		return new Resource(this.resType, this.maxHealth, this.maxStamina, this.currentHealth, this.currentStamina);
	}
}

Squad.prototype = {
	addResource: function (resType, maxHealth, maxStamina, currentHealth, currentStamina) {
		this.unit.push(new Resource(resType, maxHealth, maxStamina, currentHealth, currentStamina));
	},
	moveUnit: function (distance) {
		this.unit.forEach(elem => {
			const newCurrentStamina = elem.currentStamina - distance;

			if (newCurrentDistance < 0) {
				console.error('To much for this unit.');
			}
			elem.currentStamina = newCurrentStamina;
		});
	},
	restoreHealth: function (someUnit) {
		someUnit >= 0
			?	this.unit[someUnit].currentHealth = this.unit[someUnit].maxHealth
			:	this.unit.forEach(elem => {elem.currentHealth = elem.maxHealth})
	},
	restoreStamina: function (someUnit) {
		someUnit >= 0
			?	this.unit[someUnit].currentStamina = this.unit[someUnit].maxStamina
			:	this.unit.forEach(elem => {elem.currentStamina = elem.maxStamina})
	},
	combineUnit: function (unit) {
		this.unit = this.unit.concat(unit);
	},
	isReadyToMove: function(distance) {
		return this.unit.every(elem => {
			return elem.currentStamina >= distance;
		});
	},
	isReadyToFight: function (damage) {
		return this.unit.every(elem => {
			return elem.currentHealth > damage;
		});
	},
	getReadyToMoveUnit: function (distance) {
		return this.unit.filter(elem => {
			return elem.currentStamina - distance >= 0;
		})
	},
	regroupUnit: function (first, second) {
		const firstResource = this.unit[first];
		const secondResource = this.unit[second];
		this.unit.splice(first, 1, secondResource);
		this.unit.splice(second, 1, firstResource);
	},
	clone: function (resource) {
		resource = (typeof resource === 'number') 
			?	this.unit[resource] 
			:	resource;
		this.unit.push(new Resource(
			resource.resType,
			resource.maxHealth,
			resource.maxStamina,
			resource.currentHealth,
			resource.currentStamina
		));
	}
}

