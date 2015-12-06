import React from 'react';
import ReactDom from 'react-dom/server';

var RenderEngine = {

	renderPage(template, destination){
		
	}


};

var data = 1234;
var template = require('./page.template');
template = template(data);

// console.log()

var html = ReactDom.renderToStaticMarkup(template);
console.log(html);
export default RenderEngine;