/**
 * 
 * Floating box using jQuery
 * 
 * An example of usage can be found here: http://eshton.github.com/floatingBox.html
 * 
 */
(function(){
	/* Configuration */
	var boxStyle = {
		'background': '#fff',
		'border' : '1px solid green',
		'padding' : '5px'
	};
	var elementClass = 'floatingBox';
	var boxClass = 'floatingBoxMessage';
	var messageAttribute = 'message';
	/****/
	
	var box = $('<div>');
	box.css({
		'position':'absolute',
		'top': '0px',
		'left': '0px'
	});
	box.css(boxStyle);
	box.addClass(boxClass);
	
	$('.' + elementClass).mouseenter(function(){
		var element = $(this);
		element.append(box);
		box.text(element.attr(messageAttribute));

		var boxReference = box;
		$(document).mousemove(function(e){
			boxReference.css({
				'top':e.pageY-35+'px',
				'left':e.pageX+15+'px'
			});
		});
		
	}).mouseleave(function(){
		$(document).unbind('mousemove')
		box.remove();
	});				
})();
