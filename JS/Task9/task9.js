//Strings
//Problem 1. Reverse string

function reverse(s) {
	return s.split('').reverse().join('');
}
console.log(reverse('sample'));
//---------------------------------------------
//Problem 2. Correct brackets

function checkBrackets(str) {
    var depth = 0; // depth of the parenthesis
    // for each char in the string : 2 cases
    for(var i in str){   
        if(str[i] === '(') {
            // if the char is an opening parenthesis then we increase the depth
            depth +=1;
        } else if(str[i] === ')') {
            // if the char is an closing parenthesis then we decrease the depth
            depth -=1;
        }  
        //  if the depth is negative we have a closing parenthesis 
        //  before any matching opening parenthesis
        if (depth < 0) return false;
    }
    // If the depth is not null then a closing parenthesis is missing
    if(depth > 0) return false;
   
    return true;
}
console.log(checkBrackets('((a+b)/5-d)')); 
console.log(checkBrackets(')(a+b))'));

//---------------------------------------------
//Problem 3. Sub-string in text

var text = 'We are living in an yellow submarine. We don\'t have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.';

function subString(string, target){
	var regex = new RegExp(target, 'ig');
	var found = string.match(regex);
	var length = found.length;
	return length;
}
console.log(subString(text, 'in'));
//---------------------------------------------
//Problem 4. Parse tags
var text = 'We are <mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>. We <mixcase>don\'t </mixcase> have <lowcase>anything</lowcase>';
function parseTags(text) {
	var result = text.replace(/<upcase>(.*?)<\/upcase>/g, toUpperCase);
	result = result.replace(/<lowcase>(.*?)<\/lowcase>/g, toLowerCase);
	result = result.replace(/<mixcase>(.*?)<\/mixcase>/g, toMixedCase);
                //Delete all tags
                result = result.replace(/<upcase>/gi, '');
                result = result.replace(/<\/upcase>/gi, '');
                result = result.replace(/<lowcase>/gi, '');
                result = result.replace(/<\/lowcase>/gi, '');
                result = result.replace(/<mixcase>/gi, '');
                result = result.replace(/<\/mixcase>/gi, '');
                return result
            }
            function toUpperCase(match) { return match.toUpperCase(); }
            function toLowerCase(match) { return match.toLowerCase(); }
            function toMixedCase(match) {
            	var result = '';
            	var lowerCase = true;
            	for (var i = 0; i < match.length; i++) {
            		if (lowerCase == true) {
            			result += match[i].toUpperCase();
            			lowerCase = false;
            		}
            		else {
            			result += match[i].toLowerCase();
            			lowerCase = true;
            		}
            	}
            	return result;
            }
            console.log(parseTags(text));
//---------------------------------------------
//Problem 5. nbsp

var text = 'Write a function that replaces non breaking white-spaces in a text ';
function nbsp (text) {
var replaced = text.replace(/ +/g, '&nbsp;');
console.log(replaced);
}
nbsp(text);
//---------------------------------------------
//Problem 6. Extract text from HTML
function extractContent(htmlText) {
  return htmlText.textContent;
}
//console.log(extractContent(document.documentElement));
//---------------------------------------------
//Problem 7. Parse URL
var url = 'https://github.com/KristinaIvanova/KristinaIvanova.github.io';
//protocol:
var protocolEnd = url.indexOf(':');
var protocol = url.substring(0, protocolEnd);
//server:
var serverEnd = url.indexOf('com');
var server = url.substring(protocolEnd + 3, url.indexOf('/',8));
//host:
var hostStart = url.indexOf('/',8);
var host = url.substring(hostStart);
console.log('[protocol]:' + protocol);
console.log('[server]:' + server);
console.log('[host]'+ host);
//---------------------------------------------
//Problem 8. Replace tags
var html = '<p>Please visit <a href="http://academy.telerik.com">our site</a> to choose a training course. Also visit <a href="www.devbg.org">our forum</a> to discuss the courses.</p>';
var newTag = html.replace(/<a href="/g, '[URl=')
			.replace(/">/g, ']')
			.replace(/<\/a>/g, '[/URL]');
console.log(newTag);

//---------------------------------------------
//Problem 9. Extract e-mails
function findEmail(StrObj) {
        var separateEmailsBy = ", ";
        var email = "<none>"; // if no match, use this
        var emailsArray = StrObj.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
        if (emailsArray) {
            email = "";
            for (var i = 0; i < emailsArray.length; i++) {
                if (i != 0) email += separateEmailsBy;
                email += emailsArray[i];
            }
        }
        return email;
    }
    console.log(findEmail('Also, don\'t forget that is a valid character for the name. Gmail users like to filter their emails with me label@gmail.com'));
//---------------------------------------------
//Problem 10. Find palindromes
var text = 'Lorem ABBA adipiscing elit. Nulla lamal malesuada. Donec exe mi sed, vulputate turpis.';
var palindroms = text.match(/ABBA|lamal|exe/g);
console.log(palindroms);
//---------------------------------------------
//Problem 11. String format
function func() {
                    
                var str = stringFormat("Hello {0}!", "Peter");
                return(str);
            }
            function stringFormat(input)
            {
                for (var i = 0; i < 30; i++) {
                    var regex = new RegExp("[{]" + i + "[}]", "gi");
                    input = input.replace(regex, arguments[i + 1]);
                }
                return input;
            }
            console.log(func());
//---------------------------------------------
//Problem 12. Generate list
var people = [{name: 'Krisi', age: 17}, {name: 'Didi', age: 16}];

 var tmpl = document.getElementById('list-item');
		    var t = 0;
		    var result = '<ul id="' + tmpl.id + '">';
		    for (var i = 0; i < people.length; i++) {
		        result += ' <li> ';
		        for (var child in people[i]) {
		            result += '<' + tmpl.children[t].tagName.toLowerCase() + '>';
		            result += people[i][tmpl.children[t].innerHTML.replace(/[-][{]/gi, '').replace(/[}][-]/gi, '')];
		            result += '</' + tmpl.children[t++].tagName.toLowerCase() + '>';
		        }
		        result += ' </li> ';
		    }
		    result += ' </ul> ';
		    //replace the div html
		    tmpl.innerHTML = result;