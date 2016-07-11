$(document).ready(function() {



	function dropDown(menu,drop){
	menu.mouseover(function() {
						drop.css("display","block");
						
						})
				 .mouseout(function(){
					drop.css("display","none");
				 		})
	};



	dropDown($('#clothing'),$('#clothing .drop-down'));	
	dropDown($('#brands'),$('#brands .drop-down'));
	dropDown($('#journal'),$('#journal .drop-down'));


	$('#search').click(function(){
			$('#search .drop-down').css({"display": "block", "top":23 ,  "width" : 664});
			// $('#search .drop-down').removeAttr(('left'))
		})

	

})