//DOM Operations
//Task 1

	/*function validateContents (contents) {
		var ind, len;
		var array = [5, 6, 7];
		if(!Array.isArray(contents)){
			throw {
				name: 'InvalidArgumentPassed',
				message: 'InvalidArgumentPassed'
			};
		}

		for(ind = 0, len = contents.length; ind < len; ind += 1){
			validateContent(contents[ind]);
		}
	function appendContentsToElement (element, contents) {
		var div, fragment, ind, len, divToBeAdded;

		element.innerHTML = '';
		div = document.createElement('div');
		fragment = document.createDocumentFragment();

		for(ind = 0, len = contents.length; ind < len; ind += 1){
			divToBeAdded = div.cloneNode(true);
			divToBeAdded.innerHTML = contents[ind];
			fragment.appendChild(divToBeAdded);
		}

		element.appendChild(fragment);
	}

	return function (element, contents) {
		validateParameter(element);
		validateParameter(contents);
		validateContents(contents);
		element = getValidElement(element);
		appendContentsToElement(element, contents);
	};
};
console.log(validateContents(document.getElimentById("content")));*/

var array = [6,5,4];
	function solution (element, content) {
		
		if(element === undefined || content) {
			throw new Error();
		}
		if(!(element instanceof HTMLElement)) {
			if(typeof element !== 'string') {
				throw new Error();
			}
			else {
			 	element = document.getElementById(element);
			 	if(element==null) {
			 		throw new Error();
			 	}
			};
		}
		element.innerHTML = '';
		var fragment = document.createDocumentFragment();
		for(var i = 0; i < content.length; i+=1) {
			if(typeof content[i] !== 'string' || typeof content[i] !== 'number') {
				throw new Error();
			}
			fragment.innerHTML += content[i];
		}
		element.appendChild(fragment);
	}
	var documents = document.getElementById('element');
solution(documents,array);