//DOM Operations
//Task 1

var array = [-2,-1, 0];

var element = document.getElementById('element');
	function solution (element, content) {
		
		if(element === undefined ) {
			console.log('Error'); 
		}
		if(!(element instanceof HTMLElement)) {
			if(typeof element !== 'string') {
				console.log('Error'); 
			}
			else {
			 	element = document.getElementById(element);
			 	if(element==null) {
			 		console.log('Error'); 
			 	}
			};
		}
		element.innerHTML = '';

		var fragment = document.createDocumentFragment();
		for(var i = 0; i < content.length; i+=1) {
			if(typeof content[i] !== 'string' && typeof content[i] !== 'number') {
				console.log('Error'); 
			}
			div = document.createElement('div');
			div.innerHTML= array[i];
			fragment.appendChild(div);
			fragment.innerHTML += content[i];
		}
		element.appendChild(fragment);
	}
	
solution(element,array);