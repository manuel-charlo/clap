basic.forever(function () {
    basic.showNumber(Environment.ReadNoise(AnalogPin.P1))
    if (Environment.ReadNoise(AnalogPin.P1) >= 80) {
        pins.digitalWritePin(DigitalPin.P9, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P9, 0)
    }
})
