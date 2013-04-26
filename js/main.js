;(function(window) {
	var w = {
			// Initialize UI containers
			ui : {

			},
			// Initialize the window
			init: function() {
				// Define any easings variables here 
				jQuery.easing.def = "easeOutCubic";
				w.run();
			},
			run: function(){
				// Do stuff at runtime here	
			}
		};
	w.init(); // start the widget
}(this.window || this));

