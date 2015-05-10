// Dependencies.


// System
var System = {
	host: "localhost",
	port: 3000
};

// Infrastructure.
var CLI = require('./infrastructure/cli'),
	Server = require('./infrastructure/server'),
	Database = require('./infrastructure/database');
	RenderEngine = require('./infrastructure/renderengine'); // Snippets and templates + cache.

// Components.
var Projects = require('./components/projects'),
	Skills = require('./components/skills'),
	Contact = require('./components/contact');

