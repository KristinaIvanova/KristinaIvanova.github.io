//Task 1 - Just a table

var data,
  dataTemplateHtml,
  dataTemplate; 
data = {        
  headers : ['Vendor', 'Model', 'OS'],          
  items : [{          
    col1: 'Nokia',            
    col2: 'Lumia 920',            
    col3: 'Windows Phone'                      
  }, {          
    col1: 'LG',            
    col2: 'Nexus 5',            
    col3: 'Android'                      
  }, {          
    col1: 'Apple',            
    col2: 'iPhone 6',                        
    col3: 'iOS'                      
  }]          
};  
dataTemplateHtml = document.getElementById('vendors-template').innerHTML;
dataTemplate = Handlebars.compile(dataTemplateHtml);
document.getElementById('root').innerHTML = dataTemplate({
  data: data
});
