'use strict'

const express = require( 'express' );
const app = express();
const bodyParser = require( 'body-parser' );

var msg;

app.use( bodyParser.text( { type : 'text/plain' } ) );


app.post( '/message', function ( req, res ) {
  msg = req.body;

  var blacklist = {
    'selfie' : 'self-portrait',
    'yummers' : 'delicious',
    'outchea' : 'are out here',
    'bruh' : 'wow',
    'doge' : 'pug',
    'cilantro' : 'soap',
    'bae' : 'loved one',
    'swag' : 'style',
    'yolo' : 'carpe diem'
  };

  res.send( 'Testes, testes, one...two...three?' );
});

var server = app.listen( 7777, function () {
  var host = 'localhost';
  var port = server.address().port;

  console.log( 'What up! What up! We connected yo!' );
});


