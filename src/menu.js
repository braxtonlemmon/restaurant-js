const items = [
	{
		img: 'https://cdn.pixabay.com/photo/2019/08/23/13/06/pizza-4425695_1280.jpg',
		title: 'Greasy Pepperoni',
		info: 'Bottom-shelf pepporonis with the fattiest cheese around.',
		price: '5.99',
	},

	{
		img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Pizza_Hawaii_Special_p%C3%A5_Pizzeria_Papillon_i_Sala_1343.jpg/1200px-Pizza_Hawaii_Special_p%C3%A5_Pizzeria_Papillon_i_Sala_1343.jpg',
		title: 'Fruit and Pig',
		info: 'Ripe bananas, canned pineapple, pink pork strips, and mozzarella.',
		price: '6.99',
	},

	{
		img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Cheese_pizza_pie_at_Grotto_Pizza_Dover_DE.jpeg/1200px-Cheese_pizza_pie_at_Grotto_Pizza_Dover_DE.jpeg',
		title: 'The Hypnotizer',
		info: 'A simple spiral of cheese and tomato sauce.',
		price: '5.99'
	},

	{
		img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Deep_Fried_Pizza.jpg/1110px-Deep_Fried_Pizza.jpg',
		title: 'Deep Fried Pizza',
		info: 'Mostly oil, some cheese, and some crust. The charred bits are the best.',
		price: '7.99'
	},

	{
		img: 'https://p1.pxfuel.com/preview/741/676/921/pizza-eat-italy-italian.jpg',
		title: 'Weird Growths',
		info: 'It has eggs, cheese, sauce, and....',
		price: '6.99'
	},

	{
		img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Acorn_squash_and_gorgonzola_pizza.jpg/800px-Acorn_squash_and_gorgonzola_pizza.jpg',
		title: 'Mountain Garden',
		info: 'Acorn squash and gorgonzola make this a blast to eat.',
		price: '8.99'
	}
]

const makeItemDiv = function(item) {
	const div = document.createElement('div');
	const img = document.createElement('img');
	const title = document.createElement('h2');
	const info = document.createElement('p');
	const price = document.createElement('h3');
	const toAdd = [img, title, info, price];
	img.src = item.img;
	img.setAttribute("style", "height: 100px");
	img.style.border = '2px solid black';
	img.style.borderRadius = '50%';
	title.textContent = item.title;
	info.textContent = item.info;
	price.textContent = item.price;
	toAdd.forEach(element => div.appendChild(element));
	div.classList.add('item');
	styleItem(div);
	return div;
}

const styleItem = function(div) {
	div.style.display = 'flex';
	div.style.flexDirection = 'column';
	div.style.alignItems = 'center';
	div.style.textAlign = 'center';
}

const styleMenu = function(menu) {
	menu.style.display = 'grid';
	menu.style.gridTemplateColumns = '1fr 1fr';
	menu.style.gap = '15px';
}

const addMenu = function() {
	const content = document.querySelector('#content');
	const menu = document.createElement('div');
	menu.classList.add('menuContainer');
	items.forEach(item => menu.appendChild(makeItemDiv(item)));
	styleMenu(menu);
	content.appendChild(menu);
}

export { addMenu as default };
