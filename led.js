var Gpio = require('onoff').Gpio,
  led = new Gpio(17, 'out');


setTimeout(blink(1), 1000);

function blink(value){
  value += !value;
  led.writeSync(value);
}
