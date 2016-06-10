<<<<<<< HEAD
// var wpi = require('wiring-pi'),
// morse = require('morse-node').create(),
// msg = morse.encode('Hello World');
// console.log(msg);
//
// wpi.setup('gpio');
//
// var pin = 17;
//
// wpi.pinMode(pin, wpi.OUTPUT);
//
// var value = 1;
//
// setInterval(function() {
//   wpi.digitalWrite(pin, value);
//   value = +!value;
// }, 500);
=======
var wpi = require('wiring-pi'),
morse = require('morse-node').create(),
msg = morse.encode('Hello World');
console.log('msg');
<<<<<<< HEAD
>>>>>>> parent of 80f09ac... fix: remove quotes around msg in the morse code log
=======
>>>>>>> parent of 80f09ac... fix: remove quotes around msg in the morse code log

var Blynk = require('blynk-library');
var AUTH = "249414e434de41048be27bcbd0d44c22";
var blynk = new Blynk.Blynk(AUTH, options= {addr:"192.168.1.118"});

var GPIO = require('onoff').Gpio,
    led = new GPIO(17, 'out'),
    button = new GPIO(18, 'in', 'both');

// define the callback function
function light(err, state) {

  // check the state of the button
  // 1 == pressed, 0 == not pressed
  if(state == 1) {
    // turn LED on
    led.writeSync(1);
  } else {
    // turn LED off
    led.writeSync(0);
  }

}

// pass the callback function to the
// as the first argument to watch()
button.watch(light);
