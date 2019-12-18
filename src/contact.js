const contact = document.createElement('div');
contact.classList.add = 'contact';
const contactInfo = 
	`
	<h2>Contact</h2>
	<p>Give us a call at 123-456-7890!</p>
	<p>Send us an email at pizzaparty@example.com</p>
	`	
contact.innerHTML = contactInfo;


const addContact = function() {
	const content = document.querySelector('#content');
	content.appendChild(contact);
}

export { addContact as default };