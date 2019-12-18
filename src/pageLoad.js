const elements = {
	one: {
		type: "img",
		src: "https://cdn.pixabay.com/photo/2017/12/05/20/09/pizza-3000274_1280.jpg",
		alt: "a wonderful pizza",
		height: "150px",
		class: "main-pizza"
	},

	two: {
		type: "h1",
		content: "Pizza Party",
		class: "heading",
	},

	three: {
		type: "p",
		content: "Come try it now!",
		class: "main-info"
	},
}

const makeImage = function (src, alt, height) {
	const image = document.createElement('img');
	image.src = src;
	image.alt = alt;
	image.setAttribute("style", `height: ${height}`);
	return image;
}

const makeH1 = function (content) {
	const h1 = document.createElement('h1');
	h1.textContent = content;
	return h1;
}

const makeParagraph = function (content) {
	const p = document.createElement('p');
	p.textContent = content;
	return p;
}

const makeNewElement = function(element) {
	switch (element.type) {
		case 'img':
			return makeImage(element.src, element.alt, element.height);
			break;
		case 'h1':
			return makeH1(element.content);
			break;
		case 'p':
			return makeParagraph(element.content);
			break;
	}
}

const stylePage = function() {
	const div = document.querySelector('.home-container');
	const body = document.querySelector('body');
	body.style.backgroundColor = '#c0c0c0';
	div.style.display = 'flex';
	div.style.flexDirection = 'column';
	div.style.alignItems = 'center';
}

const addElements = function () {
	const content = document.querySelector('#content');
	const div = document.createElement('div');
	div.classList.add('home-container');
	for (let key in elements) {
		const element = elements[key];
		let newElement = makeNewElement(element);
		newElement.classList.add(element.class);
		div.appendChild(newElement);
	}
	content.appendChild(div);
	stylePage();
}

export { addElements as default };