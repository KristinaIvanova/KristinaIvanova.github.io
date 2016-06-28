//Event Model


function eventModel (selector) {
	var element;
	if (typeof(selector) === 'string') {
		element = document.getElementById(selector);
	} else {
		element = selector;
	}
	if (typeof(element) === undefined) {
		console.log('No such element in the Dom');
	}
	var buttons = element.getElementsByClassName('button');
	for(var i=0, len=buttons.length; i <len; i+=1) {
		buttons[i].innerHTML = 'hide';
		buttons[i].addEventListener('click', content, false);
	}
	function content (ev) {
		var button = ev.target;
		var nextElement = button;
		var content;

		while (nextElement) {
			if (nextElement.className.indexOf('content') >= 0){
				content = nextElement;
				break;
			}
			nextElement = nextElement.nextElementSibling; //returns the element immediately following the specified element
		}
		if (typeof(content) !== undefined) {
			if (content.style.display === '') {
				button.innerHTML = 'show';
				content.style.display = 'none';
			} else {
				button.innerHTML = 'hide';
				content.style.display = '';
			}
		}
	}
}
eventModel();
