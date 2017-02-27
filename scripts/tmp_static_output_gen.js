////
//// Temporarily create a static page listing concerns; still want the
//// one-page app.
////
//// Example usage:
////  node ./scripts/tmp_static_output_gen.js -i ./data-sources/compiled.json -t ./scripts/tmp_static_output_gen.js -o ./docs/index.html
////

var us = require('underscore');
var fs = require("fs");
var yaml = require('yamljs');
var mustache = require('mustache');
var pug = require('pug');

///
/// Helpers.
///

// Aliases.
var each = us.each;

function _ll(arg1){
    console.log(arg1); 
}

var debug = false;
function _debug(arg1){
    if( debug ){
	console.log(arg1);
    }
}

// Two or one  args.
function _die(m1, m2){
    if( typeof(m2) !== 'undefined' ){
	console.error('ERROR:', m1, m2);
    }else{
	console.error('ERROR:', m1);
    }
    process.exit(-1);
}

///
/// Opts.
///

var argv = require('minimist')(process.argv.slice(2));

// Add extra "debugging" messages.
debug = argv['d'] || argv['debug'];
if( debug ){
    _debug('Debugging is on.');
}else{
}

//
var in_data = argv['i'] || argv['in'];
if( ! in_data ){
    _die('Option (i|in) is required.');
}else{
    _debug('Will use input JSON file: ' + in_data);
}

//
var in_tmpl = argv['t'] || argv['template'];
if( ! in_tmpl ){
    _die('Option (t|template) is required.');
}else{
    _debug('Will use input JSON file: ' + in_tmpl);
}

//
var out_file = argv['o'] || argv['out'];
if( ! out_file ){
    _die('Option (o|out) is required.');
}else{
    _debug('Will use output file: ' + out_file);
}

///
/// Main.
///

var data_sources = JSON.parse(fs.readFileSync(in_data, 'utf-8'));
_debug('data', data_sources);
_debug(data_sources);

// Pug/Jade for table.
var html_table_str = pug.renderFile('./scripts/static-table.pug',
				    {"data_sources": data_sources});
console.log('===');
console.log(html_table_str);
console.log('===');

// Mustache for final.
var template = fs.readFileSync(in_tmpl, 'utf-8');
_debug('template', template);

var outstr = mustache.render(template, {
    "jsondata": JSON.stringify(data_sources),
    "htmltablestr": html_table_str,
    "tabledata": data_sources
});

fs.writeFileSync(out_file, outstr);


