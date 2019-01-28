/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you require will output into a single css file (app.css in this case)
import '../css/app.scss';

// Need jQuery? Install it with "yarn add jquery", then uncomment to require it.
// loads the jquery package from node_modules
const $ = require('jquery');
// this "modifies" the jquery module: adding behavior to it
// the bootstrap module doesn't export/return anything
require('bootstrap');

// or you can include specific pieces
// require('bootstrap/js/dist/tooltip');
// require('bootstrap/js/dist/popover');

$(document).ready(function() {
    $('[data-toggle="popover"]').popover();
});
//var $ = require('jquery');

// import the function from greet.js (the .js extension is optional)
// ./ (or ../) means to look for a local file
import greet from './greet'
//var greet = require('./greet');


$(document).ready(function() {
    $('body').prepend('<h1>'+greet('jill')+'</h1>');
});

console.log('Hello Webpack Encore! Edit me in assets/js/app.js');
