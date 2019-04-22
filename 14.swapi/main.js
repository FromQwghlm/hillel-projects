class xhrRepository {
	constructor() {
		this.xhr = new XMLHttpRequest();
	}

	getRequest(url, callback) {

		this.xhr.open('GET', url, true);
		this.xhr.onload = function () {
			if (this.status != 200) {
				console.error(`Error: ${this.status ? this.statusText : 'request failure.'}`)
			}
			if (callback) callback(JSON.parse(this.response));
		}
		this.xhr.send();
	}

	postRequest(server, data) {
		this.xhr.open('POST', server, true);
		this.xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

		this.xhr.onload = function () {
			console.log(this.responseText);
		}

		this.xhr.send(JSON.stringify(data));
	}
}

class Characters {
	constructor() {
		this.xhr = new xhrRepository();

		this.page = 1;
		this.quantity = 0;

		this.cache = [];

		this.initApp();
	}

	initApp() {
		this.initRequest();
		this.nextPageEvent();
		this.prevPageEvent();
	}

	initRequest() {
		const url = `https://swapi.co/api/people/?page=${this.page}`;

		this.xhr.getRequest(url, (data) => {
            this.quantity = Math.ceil(data.count / data.results.length);
            console.log(`Получено объектов: ${data.count}, размер выдачи: ${data.results.length}, количество страниц: ${this.quantity}`);
			this.cache.push(data.results);
			this.renderPage(data.results);
			this.checkButtons();
		});
    }
    
    renderPage(characters) {
		const container = document.querySelector('.page');
		container.innerHTML = '';		

		characters.forEach(el => {
			createElement(container, 'li', el.name);
		});
	}

    drawFromAPI() {
		const url = `https://swapi.co/api/people/?page=${this.page}`;

		this.xhr.getRequest(url, (data) => {
			this.cache.push(data.results);
			this.renderPage(data.results);
			this.checkButtons();
		});
    }
    
	drawPage() {
		if (this.cache[this.page - 1]) {
			this.drawFromCache();
		} else {
			this.drawFromAPI();
		}
	}

	drawFromCache() {
		const current = this.page - 1;
		this.renderPage(this.cache[current]);
		this.checkButtons();
	}

	nextPageEvent() {
		const nextBtn = document.querySelector('.next');

		nextBtn.addEventListener('click', () => {	

			this.page++;
			this.drawPage();

		});
	}

	prevPageEvent() {
		const prevBtn = document.querySelector('.prev');

		prevBtn.addEventListener('click', () => {

			this.page--;
			this.drawPage();

		});
	}

	checkButtons() {
		const prevBtn = document.querySelector('.prev');
		const nextBtn = document.querySelector('.next');
		nextBtn.disabled = this.page === this.quantity;
		prevBtn.disabled = this.page === 1;
	}
}

function createElement(parent, name, text) {
	const element = document.createElement(name);
	element.innerText = text;
	parent.appendChild(element);
	return element;
}

const initList = new Characters();