let yvalue = 0
let xvalue = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        basic.clearScreen()
        led.plot(0, yvalue)
        basic.pause(500)
        yvalue += 1
    }
    while (yvalue > 4) {
        yvalue = 0
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.clearScreen()
        led.plot(xvalue, 0)
        basic.pause(500)
        xvalue += 1
    }
    while (xvalue > 4) {
        xvalue = 0
    }
})
