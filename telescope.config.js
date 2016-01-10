var Path = require('path');

module.exports = {

  stylesheets:[
    Path.join(__dirname, './stylesheets/main.scss')
  ],

  head:[
    "<link href='https://fonts.googleapis.com/css?family=Cutive+Mono' rel='stylesheet' type='text/css'>",
    "<link href='https://fonts.googleapis.com/css?family=Lato' rel='stylesheet' type='text/css'>",
    '<meta name="viewport" content="width=device-width, initial-scale=1">'
  ],

  scripts:[
    '<script src="/assets/scripts/navigation.js"></script>'
  ],

  server:{
    '/assets': Path.join(__dirname, '/assets')
  }
};