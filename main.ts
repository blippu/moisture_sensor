let moisture = 0
let index = 0
basic.forever(function () {
    moisture = pins.analogReadPin(AnalogPin.P1)
    moisture = moisture / 300
    index = 0
    while (index <= Math.round(moisture)) {
        basic.showNumber(index)
        index += 1
    }
    basic.pause(60000)
})
