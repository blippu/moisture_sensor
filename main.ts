let moisture = 0
basic.forever(function () {
    moisture = pins.analogReadPin(AnalogPin.P1)
    moisture = moisture / 300
    basic.showNumber(Math.round(moisture))
    basic.pause(60000)
})
