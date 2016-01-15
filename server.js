'use strict'

const express = require( 'express' );
const app = express();
const bodyParser = require( 'body-parser' );


app.use( bodyParser.json( { type: 'application/json' } ) );


app.post( '/message', function ( req, res ) {

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


  for( var keys in blacklist ) {
    req.body.message = req.body.message.replace( keys, blacklist[keys] );
  }
  res.send( req.body.message );
});

var server = app.listen( 7777, function () {
  var host = 'localhost';
  var port = server.address().port;

  console.log( 'What up! What up! We connected yo!' );
});


