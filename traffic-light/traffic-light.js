const five = require('johnny-five');
const board = new five.Board();

board.on("ready", () => {
    const lights = {
        greenLight: new five.Led(13),
        redLight: new five.Led(8),
        yellowLight: new five.Led(12)
    }

    board.loop(4500, async () => {
        try {
            await next(openTrafficLight(lights), 2000);
            await next(payAttention(lights), 500);
            await next(closeTrafficLight(lights), 2000);
        } catch (err) {
            console.log(err);
        }
    })
})

var openTrafficLight = (lights) => {
        lights.greenLight.on();
        lights.redLight.off();
        lights.yellowLight.off();
}

var payAttention = (lights) => {
        lights.greenLight.off();
        lights.yellowLight.on();
        lights.redLight.off();
}

var closeTrafficLight = (lights) => {    
        lights.yellowLight.off();
        lights.redLight.on();
        lights.greenLight.off();
}

var next = (callback, ms) => {
    return new Promise((resolve, reject) => {setTimeout(() => {
        resolve(callback);
    }, ms)});
}