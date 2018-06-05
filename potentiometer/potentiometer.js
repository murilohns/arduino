const five = require('johnny-five');
const board = new five.Board();

board.on('ready', () => {
    const potentiometer = new five.Sensor({
        pin: 'A1',
        freq: 0
    });

    const led = new five.Led(3);

    potentiometer.on("data", () => led.brightness(this.value))
});
