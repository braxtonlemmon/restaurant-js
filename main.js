/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return addContact; });\nconst contact = document.createElement('div');\ncontact.classList.add = 'contact';\nconst contactInfo = \n\t`\n\t<h2>Contact</h2>\n\t<p>Give us a call at 123-456-7890!</p>\n\t<p>Send us an email at pizzaparty@example.com</p>\n\t`\t\ncontact.innerHTML = contactInfo;\n\n\nconst addContact = function() {\n\tconst content = document.querySelector('#content');\n\tcontent.appendChild(contact);\n}\n\n\n\n//# sourceURL=webpack:///./src/contact.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageLoad_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad.js */ \"./src/pageLoad.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n\n\n\nconst content = document.querySelector('#content');\n\nconst addNav = function() {\n\tconst nav = document.createElement('nav');\n\tconst tabs = ['Home', 'Menu', 'Contact'];\n\ttabs.forEach(tab => {\n\t\tconst button = document.createElement('button');\n\t\tbutton.addEventListener('click', changePage);\n\t\tbutton.textContent = `${tab}`;\n\t\tbutton.classList.add(tab.toLowerCase());\n\t\tnav.appendChild(button);\n\t});\n\tcontent.appendChild(nav);\n\tstyleNav();\n};\n\nconst styleNav = function() {\n\tconst nav = document.querySelector('nav');\n\tnav.style.display = 'grid';\n\tnav.style.gridTemplateColumns = 'repeat(3, 1fr)';\n\tnav.style.gap = '10px';\n\tnav.style.margin = '20px';\n\n\tconst buttons = document.querySelectorAll('button');\n\tbuttons.forEach(button => {\n\t\tbutton.style.padding = '10px';\n\t\tbutton.style.border = '3px solid black';\n\t\tbutton.style.borderRadius = '5px';\n\t\tbutton.style.backgroundColor = '#aea';\n\t\tbutton.style.fontSize = '15px';\n\t})\n}\n\nconst changePage = function(e) {\n\twhile (content.childElementCount > 1) {\n\t\tcontent.removeChild(content.lastElementChild);\n\t}\n\tswitch (e.target.className) {\n\t\tcase 'home':\n\t\t\tObject(_pageLoad_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\t\t\tbreak;\n\t\tcase 'menu':\n\t\t\tObject(_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\t\t\tbreak;\n\t\tcase 'contact':\n\t\t\tObject(_contact_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\t\t\tbreak;\n\t}\n}\n\naddNav();\nObject(_pageLoad_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return addMenu; });\nconst items = [\n\t{\n\t\timg: 'https://cdn.pixabay.com/photo/2019/08/23/13/06/pizza-4425695_1280.jpg',\n\t\ttitle: 'Greasy Pepperoni',\n\t\tinfo: 'Bottom-shelf pepporonis with the fattiest cheese around.',\n\t\tprice: '5.99',\n\t},\n\n\t{\n\t\timg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Pizza_Hawaii_Special_p%C3%A5_Pizzeria_Papillon_i_Sala_1343.jpg/1200px-Pizza_Hawaii_Special_p%C3%A5_Pizzeria_Papillon_i_Sala_1343.jpg',\n\t\ttitle: 'Fruit and Pig',\n\t\tinfo: 'Ripe bananas, canned pineapple, pink pork strips, and mozzarella.',\n\t\tprice: '6.99',\n\t},\n\n\t{\n\t\timg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Cheese_pizza_pie_at_Grotto_Pizza_Dover_DE.jpeg/1200px-Cheese_pizza_pie_at_Grotto_Pizza_Dover_DE.jpeg',\n\t\ttitle: 'The Hypnotizer',\n\t\tinfo: 'A simple spiral of cheese and tomato sauce.',\n\t\tprice: '5.99'\n\t},\n\n\t{\n\t\timg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Deep_Fried_Pizza.jpg/1110px-Deep_Fried_Pizza.jpg',\n\t\ttitle: 'Deep Fried Pizza',\n\t\tinfo: 'Mostly oil, some cheese, and some crust. The charred bits are the best.',\n\t\tprice: '7.99'\n\t},\n\n\t{\n\t\timg: 'https://p1.pxfuel.com/preview/741/676/921/pizza-eat-italy-italian.jpg',\n\t\ttitle: 'Weird Growths',\n\t\tinfo: 'It has eggs, cheese, sauce, and....',\n\t\tprice: '6.99'\n\t},\n\n\t{\n\t\timg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Acorn_squash_and_gorgonzola_pizza.jpg/800px-Acorn_squash_and_gorgonzola_pizza.jpg',\n\t\ttitle: 'Mountain Garden',\n\t\tinfo: 'Acorn squash and gorgonzola make this a blast to eat.',\n\t\tprice: '8.99'\n\t}\n]\n\nconst makeItemDiv = function(item) {\n\tconst div = document.createElement('div');\n\tconst img = document.createElement('img');\n\tconst title = document.createElement('h2');\n\tconst info = document.createElement('p');\n\tconst price = document.createElement('h3');\n\tconst toAdd = [img, title, info, price];\n\timg.src = item.img;\n\timg.setAttribute(\"style\", \"height: 100px\");\n\timg.style.border = '2px solid black';\n\timg.style.borderRadius = '50%';\n\ttitle.textContent = item.title;\n\tinfo.textContent = item.info;\n\tprice.textContent = item.price;\n\ttoAdd.forEach(element => div.appendChild(element));\n\tdiv.classList.add('item');\n\tstyleItem(div);\n\treturn div;\n}\n\nconst styleItem = function(div) {\n\tdiv.style.display = 'flex';\n\tdiv.style.flexDirection = 'column';\n\tdiv.style.alignItems = 'center';\n\tdiv.style.textAlign = 'center';\n}\n\nconst styleMenu = function(menu) {\n\tmenu.style.display = 'grid';\n\tmenu.style.gridTemplateColumns = '1fr 1fr';\n\tmenu.style.gap = '15px';\n}\n\nconst addMenu = function() {\n\tconst content = document.querySelector('#content');\n\tconst menu = document.createElement('div');\n\tmenu.classList.add('menuContainer');\n\titems.forEach(item => menu.appendChild(makeItemDiv(item)));\n\tstyleMenu(menu);\n\tcontent.appendChild(menu);\n}\n\n\n\n\n//# sourceURL=webpack:///./src/menu.js?");

/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return addElements; });\nconst elements = {\n\tone: {\n\t\ttype: \"img\",\n\t\tsrc: \"https://cdn.pixabay.com/photo/2017/12/05/20/09/pizza-3000274_1280.jpg\",\n\t\talt: \"a wonderful pizza\",\n\t\theight: \"150px\",\n\t\tclass: \"main-pizza\"\n\t},\n\n\ttwo: {\n\t\ttype: \"h1\",\n\t\tcontent: \"Pizza Party\",\n\t\tclass: \"heading\",\n\t},\n\n\tthree: {\n\t\ttype: \"p\",\n\t\tcontent: \"Come try it now!\",\n\t\tclass: \"main-info\"\n\t},\n}\n\nconst makeImage = function (src, alt, height) {\n\tconst image = document.createElement('img');\n\timage.src = src;\n\timage.alt = alt;\n\timage.setAttribute(\"style\", `height: ${height}`);\n\treturn image;\n}\n\nconst makeH1 = function (content) {\n\tconst h1 = document.createElement('h1');\n\th1.textContent = content;\n\treturn h1;\n}\n\nconst makeParagraph = function (content) {\n\tconst p = document.createElement('p');\n\tp.textContent = content;\n\treturn p;\n}\n\nconst makeNewElement = function(element) {\n\tswitch (element.type) {\n\t\tcase 'img':\n\t\t\treturn makeImage(element.src, element.alt, element.height);\n\t\t\tbreak;\n\t\tcase 'h1':\n\t\t\treturn makeH1(element.content);\n\t\t\tbreak;\n\t\tcase 'p':\n\t\t\treturn makeParagraph(element.content);\n\t\t\tbreak;\n\t}\n}\n\nconst stylePage = function() {\n\tconst div = document.querySelector('.home-container');\n\tconst body = document.querySelector('body');\n\tbody.style.backgroundColor = '#c0c0c0';\n\tdiv.style.display = 'flex';\n\tdiv.style.flexDirection = 'column';\n\tdiv.style.alignItems = 'center';\n}\n\nconst addElements = function () {\n\tconst content = document.querySelector('#content');\n\tconst div = document.createElement('div');\n\tdiv.classList.add('home-container');\n\tfor (let key in elements) {\n\t\tconst element = elements[key];\n\t\tlet newElement = makeNewElement(element);\n\t\tnewElement.classList.add(element.class);\n\t\tdiv.appendChild(newElement);\n\t}\n\tcontent.appendChild(div);\n\tstylePage();\n}\n\n\n\n//# sourceURL=webpack:///./src/pageLoad.js?");

/***/ })

/******/ });