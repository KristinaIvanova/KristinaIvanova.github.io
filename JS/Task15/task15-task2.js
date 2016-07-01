//Task 2
var data2,
  data2TemplateHtml,
  data2Template; 
var data2 = {
  animals: [{
   name: 'Lion',
   url: 'https://susanmcmovies.files.wordpress.com/2014/12/the-lion-king-wallpaper-the-lion-king-2-simbas-pride-4685023-1024-768.jpg'
  }, {
   name: 'Turtle',
    url: 'http://www.enkivillage.com/s/upload/images/a231e4349b9e3f28c740d802d4565eaf.jpg'
  }, {
    name: 'Dog'              
  }, {
    name: 'Cat',
    url: 'http://i.imgur.com/Ruuef.jpg'
  }, {
    name: 'Dog Again'              
  }] 
}; 
data2TemplateHtml = document.getElementById('animals-template').innerHTML;
data2Template = Handlebars.compile(data2TemplateHtml);
document.getElementById('root').innerHTML = data2Template(data2);
