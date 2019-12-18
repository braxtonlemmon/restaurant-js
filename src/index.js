import addElements from './pageLoad.js'
import addItems from './menu.js';
import addContact from './contact.js';

const content = document.querySelector('#content');

const addNav = function() {
	const nav = document.createElement('nav');
	const tabs = ['Home', 'Menu', 'Contact'];
	tabs.forEach(tab => {
		const button = document.createElement('button');
		button.addEventListener('click', changePage);
		button.textContent = `${tab}`;
		button.classList.add(tab.toLowerCase());
		nav.appendChild(button);
	});
	content.appendChild(nav);
	styleNav();
};

const styleNav = function() {
	const nav = document.querySelector('nav');
	nav.style.display = 'grid';
	nav.style.gridTemplateColumns = 'repeat(3, 1fr)';
	nav.style.gap = '10px';
	nav.style.margin = '20px';

	const buttons = document.querySelectorAll('button');
	buttons.forEach(button => {
		button.style.padding = '10px';
		button.style.border = '3px solid black';
		button.style.borderRadius = '5px';
		button.style.backgroundColor = '#aea';
		button.style.fontSize = '15px';
	})
}

const changePage = function(e) {
	while (content.childElementCount > 1) {
		content.removeChild(content.lastElementChild);
	}
	switch (e.target.className) {
		case 'home':
			addElements();
			break;
		case 'menu':
			addItems();
			break;
		case 'contact':
			addContact();
			break;
	}
}

addNav();
addElements();
