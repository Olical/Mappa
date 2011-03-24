/**
 * @preserve Mappa v1.0.0 (github.com/Wolfy87/Mappa)
 * Copyright 2011, Oliver Caldwell (flowdev.co.uk)
 */
(function() {
	// Initiate the Mappa object
	var Mappa = {
		addMap: function(name, mapTo) {
			// First we check if the name is in use
			if(this.hasOwnProperty(name) === false) {
				// Add the map
				this[name] = mapTo;
				
				// Push the new name to the map list
				this.mapList.push(name);
				
				// Return true if it has been added
				return true;
			}
			else {
				// It exists, return false
				return false;
			}
		},
		removeMap: function(name) {
			// Initialise any required variables
			var i = null;
			
			// Check if the function exists
			if(this.hasOwnProperty(name) === true) {
				// Remove the map
				delete this[name];
				
				// Loop through the map list
				for(i = 0; i < this.mapList.length; i++) {
					// Check if the names match
					if(name === this.mapList[i]) {
						// Remove the map name from the list
						this.mapList.splice(i, 1);
					}
				}
				
				// Return true if it has been removed
				return true;
			}
			else {
				// It does not exist, return false
				return false;
			}
		},
		addAlias: function(name) {
			// Make sure the specified name is not in use
			if(window.hasOwnProperty(name) === false) {
				// Create the alias
				window[name] = this;
				
				// Alias creation was a success, return true
				return true;
			}
			else {
				// It is in use, return false
				return false;
			}
		},
		removeAlias: function(name) {
			// Make sure the alias exists
			if(window.hasOwnProperty(name)) {
				
			}
			else {
				// It does not exist, return false
				return false;
			}
		},
		mapList: []
	};
	
	// Check if the window variable exists
	if(typeof window === 'undefined') {
		// This means it is a node environment, so place it in the exports
		exports.Mappa = Mappa;
	}
	else {
		// Make sure it has not already been initialised
		if(window.hasOwnProperty('Mappa') === false) {
			// Expose the object
			window.Mappa = Mappa;
		}
	}
}());