/**
 * @preserve Mappa v1.0.0 (github.com/Wolfy87/Mappa)
 * Copyright 2011, Oliver Caldwell (flowdev.co.uk)
 */
(function() {
	// Initiate the Mappa object
	var Mappa = {
		addMap: function(name, mapTo) {
			
		},
		removeMap: function(name) {
			
		}
	};
	
	// Check if the window variable exists
	if(typeof window === 'undefined') {
		// This means it is a node environment, so place it in the exports
		exports.Mappa = Mappa;
	}
	else {
		// Make sure it has not already been initialised
		if(typeof window.Mappa === 'undefined') {
			// Expose the object
			window.Mappa = Mappa;
		}
	}
}());