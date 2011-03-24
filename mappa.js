/**
 * @preserve Mappa v1.1.0 (github.com/Wolfy87/Mappa)
 * Copyright 2011, Oliver Caldwell (flowdev.co.uk)
 */
(function() {
	// Initiate the Mappa object
	var Mappa = {
		addMap: function(name, mapTo) {
			// First we check if the name is in use
			if(this.mapList.join.indexOf(name) === -1) {
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
			if(this.mapList.join.indexOf(name) !== -1) {
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
			if(this.aliasList.join.indexOf(name) === -1) {
				// Create the alias
				window[name] = this;
				
				// Push it to the list
				this.aliasList.push(name);
				
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
			if(this.aliasList.join.indexOf(name) !== -1) {
				// Remove the object
				delete window[name];
				
				// Loop through the alias list
				for(i = 0; i < this.aliasList.length; i++) {
					// Check if the names match
					if(name === this.aliasList[i]) {
						// Remove the alias name from the list
						this.aliasList.splice(i, 1);
					}
				}
				
				// Removal was a success so return true
				return true;
			}
			else {
				// It does not exist, return false
				return false;
			}
		},
		aliasList: [],
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