//Regular Expressions
//Problem 1. Format with placeholders

String.prototype.format = function(options) {
	var option,
	regex,
	format = this;
	for (option in options) {
		regex = new RegExp ('#{'+ option +'}', 'g');
		 format = format.replace(regex, options[option]);
		
	} 
	return format; 
};
var options = {name: 'John'};
console.log(('Hello, there! Are you #{name}?').format(options));
var options = {name: 'John', age: 13};
console.log(('My name is #{name} and I am #{age}-years-old').format(options));
//--------------------------------------------------------
//Problem 2. HTML binding

String.prototype.htmlBinding = function(result, parameters) {
	result = this;
	var regexForContent,
	regexForHref,
	regexForClass,
	parameter;

	for (parameter in parameters) {
		regexForContent = new RegExp('(<.*?data-bind-content="' + parameter + '".*?>)(.*?)(<\\s*/.*?>)', 'g');
		regexForHref = new RegExp('(<.*?data-bind-href="' + parameter + '".*?)>', 'g');
		regexForClass = new RegExp('(<.*?data-bind-class="(' + parameter + ')".*?)>', 'g');

		result = result.replace(regexForContent, 
			function(inside, startTag, content, endTag) {
				return startTag + parameters[parameter] + endTag;
			});
		result = result.replace(regexForHref, 
			function (tag, contentBeforeClosing) {
				return contentBeforeClosing + ' href="' + parameters[parameter] + '">';
			});
		result = result.replace(regexForClass, 
			function (tag, contentBeforeClosing) {
				return contentBeforeClosing + ' class="' + parameters[parameter] + '">';
			});
			}

	return result;
			};

console.log('<div data-bind-content="name"></div>'.htmlBinding('', {name: 'Steven'}));
console.log('<a data-bind-content="name" data-bind-href="link" data-bind-class="name"></div>'.htmlBinding('', {name: 'Elena', link: 'http://telerikacademy.com'}));
