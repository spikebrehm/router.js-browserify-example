var Router = require('router.js')['default'];

var router = new Router();

router.map(function(match) {
  match('/index.html').to('home');
});
