var wpi = require('wiring-pi'),
morse = require('morse-node').create(),
msg = morse.encode('Hello World');
console.log('msg');

wpi.setup('gpio');

var pin = 17;

wpi.pinMode(pin, wpi.OUTPUT);

var value = 1;

setInterval(function() {
  wpi.digitalWrite(pin, value);
  value = +!value;
}, 500);
