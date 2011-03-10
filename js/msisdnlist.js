#!/usr/bin/env node
/*
fdsfsdfsdf
*/
var fs = require('fs'), sys = require('sys');

(function() {
	var USAGE = function(message) {
		var error_code = 0;
		sys.puts('\n USAGE: msisdnlist.js start_number count filename \n');
		sys.puts('start_number: Numbers to be generated starting from this number');
		sys.puts('count: How many numbers do you want to be generated');
		sys.puts('filename: The output filename\n'); 
		process.exit(error_code);
	}

	if (process.argv.length < 5) {
		USAGE();
	}

	var start = parseInt(process.argv[2]);
	var count = parseInt(process.argv[3]);
	var filename = process.argv[4];

	fs.open(filename,'w','0666', function(err, fd) {
		if (err) throw err;

		var stringToWrite = '';
		for ( var i = 0; i < count; i++) {
			var toAdd = parseInt(start + i);
			stringToWrite += toAdd + '\n';
		}
		fs.write(fd, stringToWrite, 0, 'utf8'); 
	});

})();
