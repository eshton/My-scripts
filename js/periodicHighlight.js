/**
 * Periodic highlight jQuery plugin
 * 
 * Calls the highlight effect on the element periodically
 * 
 * @param frequency The frequency of the calls in milliseconds (default: 15sec)
 * @param duration  The duration of the highlight effect in milliseconds (default: 2sec)
 * @param delay     Initial delay for the first call in milliseconds (default: 500ms)
 * @returns
 */
(function( $ ){
	
	$.fn.periodicHighlight = function(frequency, duration, delay) {
		var that = this;
		
		this.frequency = frequency?frequency:15000;
		this.duration = duration?duration:2000;
		this.delay = delay?delay:500;
		
		this.highlighter = function() {
			$(that).effect("highlight",{},that.duration);
			setTimeout(that.highlighter, that.frequency);
		}
		setTimeout(this.highlighter, that.delay);							
	}

})( jQuery );
