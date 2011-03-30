/**
 * @preserve Mappa v1.2.0 (github.com/Wolfy87/Mappa)
 * Copyright 2011, Oliver Caldwell (flowdev.co.uk)
 */
(function() {
	// Function to remove the specified value from an array
	function removeValue(array, search) {
		// Set up any variables
		var i = null;
		
		// Loop through all values
		for(i = 0; i < array.length; i++) {
			// Check if the value matches the search
			if(array[i] === search) {
				// Remove the right value
				array.splice(i, 1);
				
				// Return the array
				return array;
			}
		}
	}
	
	// Function to search through an object following the path
	// If it hits an array it will recurse
	function followPath(name, map, paths) {
		// Initialise any required variable
		var built = {},
			current = null,
			path = null,
			i = null,
			curPath;
		
		// Loop through all the paths
		for(curPath in paths) {
			// Split the path
			path = paths[curPath].split('.');
			
			// Grab the original map
			current = map;
			
			// Loop through the path
			for(i = 0; i < path.length; i++) {
				current = current[path[i]];
			}
			
			// Assign the value
			built[path[path.length - 1]] = current;
		}
		
		// Return the built object
		return built;
	}
	
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
			if(this.mapList.join().indexOf(name) !== -1) {
				// Remove the map
				delete this[name];
				
				// Remove the the map from the list
				this.mapList = removeValue(this.mapList, name);
				
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
			if(this.aliasList.join().indexOf(name) !== -1) {
				// Remove the object
				delete window[name];
				
				// Remove the the alias from the list
				this.aliasList = removeValue(this.aliasList, name);
				
				// Removal was a success so return true
				return true;
			}
			else {
				// It does not exist, return false
				return false;
			}
		},
		normalise: function(maps) {
			// Initialise any required variables
			var name = null,
				built = [];
			
			// Loop through all of the maps
			for(name in maps) {
				// Pull the data
				built.push(followPath(name, maps[name], this[name]));
			}
			
			// Return the built array
			return built;
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