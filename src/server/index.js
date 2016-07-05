/**
 * Created by Gineff on 01.07.2016.
 */
require('babel-core/register'); //enables ES6 ('import'.. etc) in Node
if (process.env.NODE_ENV === 'production') {
  //require('./server.prod')
  require('./server.dev')
} else {
  require('./server.dev');
}