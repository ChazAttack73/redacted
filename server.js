'use strict'

const express = require( 'express' );
const app = express();
const bodyParser = require( 'body-parser' );

app.use( bodyParser.urlencoded( { extended : true } ) );

app.post( '/message', function ( req, res ) {
  res.send( 'Testes, testes, one...two...three?' );
});

var server = app.listen( 7777, function () {
  var host = 'localhost';
  var port = server.address().port;

  console.log( 'What up! What up! We connected yo!' );
});