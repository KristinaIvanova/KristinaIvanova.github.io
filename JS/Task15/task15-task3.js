var list = function() {
var listtemplateHtml = document.getElementById('books-template').innerHTML;
var listTemplate = Handlebars.compile(listtemplateHtml);

console.log(listTemplate);
var list = {
    list: [{
        id: 1,
        title: 'JavaScript: The Good Parts'
    }, {
        id: 2,
        title: 'Secrets of the JavaScript Ninja'
    }, {
        id: 3,
        title: 'Core HTML5 Canvas' 
 }, {
        id: 4,
        title: 'JavaScript Patterns'
    }]
}
var result = listTemplate(list);
console.log(result);
document.getElementById('books-list').innerHTML = result;
};
list(); 
