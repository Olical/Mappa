# Set up the default files to be created
default: mappa.min.js

# Compress the script
mappa.min.js: mappa.js
	java -jar compiler.jar --js $^ --js_output_file $@