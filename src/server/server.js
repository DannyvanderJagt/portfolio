import Express from 'express';

// App.
var App = Express();

// Serve everything in the public directory.
App.use(Express.static('public'));

// Server.
var Server = App.listen(3000, () => {
	console.log('The server is running at port: %s', Server.address().port);
});
