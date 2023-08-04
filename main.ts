function right () {
    pins.servoSetPulse(AnalogPin.P8, Lmotors + 300)
    pins.servoSetPulse(AnalogPin.P12, Rmotors - 0)
}
function tcbk () {
    AAA = 0
    while (AAA == 0) {
        if (!(pins.analogReadPin(AnalogPin.P1) > LT && pins.analogReadPin(AnalogPin.P2) > RT)) {
            if (pins.analogReadPin(AnalogPin.P1) < LT && pins.analogReadPin(AnalogPin.P2) < RT) {
                bk()
            }
        } else {
            stop()
            AAA += 1
        }
    }
}
function tcL () {
    AAA = 0
    while (AAA == 0) {
        if (!(pins.analogReadPin(AnalogPin.P1) < LT && pins.analogReadPin(AnalogPin.P2) > RT)) {
            if (pins.analogReadPin(AnalogPin.P1) < LT && pins.analogReadPin(AnalogPin.P2) < RT) {
                left()
            }
        } else {
            stop()
            AAA += 1
        }
    }
}
function bk () {
    pins.servoSetPulse(AnalogPin.P8, Lmotors - 300)
    pins.servoSetPulse(AnalogPin.P12, Rmotors + 300)
}
function left () {
    pins.servoSetPulse(AnalogPin.P8, Lmotors + 0)
    pins.servoSetPulse(AnalogPin.P12, Rmotors - 300)
}
function stop () {
    pins.servoSetPulse(AnalogPin.P8, Lmotors)
    pins.servoSetPulse(AnalogPin.P12, Rmotors)
}
function tcR () {
    AAA = 0
    while (AAA == 0) {
        if (!(pins.analogReadPin(AnalogPin.P1) > LT && pins.analogReadPin(AnalogPin.P2) < RT)) {
            if (pins.analogReadPin(AnalogPin.P1) < LT && pins.analogReadPin(AnalogPin.P2) < RT) {
                right()
            }
        } else {
            right()
            basic.pause(200)
            stop()
            AAA += 1
        }
    }
}
input.onButtonPressed(Button.A, function () {
    counter = 0
    go()
    basic.pause(800)
    basic.showNumber(0)
    tcGO()
    go()
    basic.pause(500)
    left()
    basic.pause(1000)
    tcL()
    stop()
    go()
    basic.pause(1000)
    basic.showNumber(1)
    stop()
    bk()
    basic.pause(500)
    R2()
    basic.pause(1000)
    tcR2()
    tcGO()
    go()
    basic.pause(1500)
    bk()
    basic.pause(800)
    left()
    basic.pause(1000)
    tcL()
    tcGO()
    go()
    basic.pause(500)
    left()
    basic.pause(1000)
    tcL()
    R2()
    basic.pause(500)
    go()
    basic.pause(700)
    L2()
    basic.pause(625)
    go()
    basic.pause(1500)
    bk()
    basic.pause(800)
    stop()
    L2()
    basic.pause(1000)
    tcL2()
    tcGO()
    go()
    basic.pause(500)
    left()
    basic.pause(1000)
    tcL()
    tcGO()
    go()
    basic.pause(500)
    left()
    basic.pause(1000)
    tcL()
    right()
    basic.pause(200)
    go()
    basic.pause(1500)
    bk()
    basic.pause(500)
    L2()
    basic.pause(1000)
    tcL2()
    tcGO()
    go()
    basic.pause(1200)
    L2()
    basic.pause(1000)
    tcL2()
    tcGO()
    go()
    basic.pause(500)
    left()
    basic.pause(2000)
    tcL()
    right()
    basic.pause(200)
    go()
    basic.pause(1500)
    bk()
    basic.pause(500)
    L2()
    basic.pause(1500)
    tcL2()
    tcGO()
    stop()
    go()
    basic.pause(2500)
    tcbk()
    left()
    basic.pause(1000)
    tcL()
    stop()
    tcGO()
    go()
    basic.pause(500)
    left()
    basic.pause(2000)
    tcL()
    right()
    basic.pause(200)
    bk()
    basic.pause(1800)
    go()
    basic.pause(500)
    tcGO()
    go()
    basic.pause(1700)
    stop()
})
function tcGO2 () {
    for (let index = 0; index < 2000; index++) {
        if (!(pins.analogReadPin(AnalogPin.P1) > LT && pins.analogReadPin(AnalogPin.P2) > RT)) {
            if (pins.analogReadPin(AnalogPin.P1) < LT && pins.analogReadPin(AnalogPin.P2) < RT) {
                go()
            }
            if (pins.analogReadPin(AnalogPin.P1) > LT && pins.analogReadPin(AnalogPin.P2) < RT) {
                left()
            }
            if (pins.analogReadPin(AnalogPin.P1) < LT && pins.analogReadPin(AnalogPin.P2) > RT) {
                right()
            }
        } else {
            stop()
        }
    }
}
function R2 () {
    pins.servoSetPulse(AnalogPin.P8, Lmotors + 300)
    pins.servoSetPulse(AnalogPin.P12, Rmotors + 300)
}
function RR () {
    pins.servoSetPulse(AnalogPin.P8, Lmotors + 0)
    pins.servoSetPulse(AnalogPin.P12, Rmotors + 300)
}
function tcL2 () {
    AAA = 0
    while (AAA == 0) {
        if (!(pins.analogReadPin(AnalogPin.P1) < LT && pins.analogReadPin(AnalogPin.P2) > RT)) {
            if (pins.analogReadPin(AnalogPin.P1) < LT && pins.analogReadPin(AnalogPin.P2) < RT) {
                L2()
            }
        } else {
            stop()
            AAA += 1
        }
    }
}
function retn () {
    pins.servoSetPulse(AnalogPin.P8, Lmotors - 290)
    pins.servoSetPulse(AnalogPin.P12, Rmotors - 320)
}
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P1))
    basic.pause(100)
    basic.clearScreen()
    basic.showNumber(pins.analogReadPin(AnalogPin.P2))
    basic.pause(100)
    basic.clearScreen()
})
function L2 () {
    pins.servoSetPulse(AnalogPin.P8, Lmotors - 300)
    pins.servoSetPulse(AnalogPin.P12, Rmotors - 300)
}
input.onButtonPressed(Button.B, function () {
    right()
    basic.pause(2000)
    stop()
})
function tcR2 () {
    AAA = 0
    while (AAA == 0) {
        if (!(pins.analogReadPin(AnalogPin.P1) > LT && pins.analogReadPin(AnalogPin.P2) < RT)) {
            if (pins.analogReadPin(AnalogPin.P1) < LT && pins.analogReadPin(AnalogPin.P2) < RT) {
                R2()
            }
        } else {
            stop()
            AAA += 1
        }
    }
}
function tcGO () {
    AAA = 0
    while (AAA == 0) {
        if (!(pins.analogReadPin(AnalogPin.P1) > LT && pins.analogReadPin(AnalogPin.P2) > RT)) {
            if (pins.analogReadPin(AnalogPin.P1) < LT && pins.analogReadPin(AnalogPin.P2) < RT) {
                go()
            }
            if (pins.analogReadPin(AnalogPin.P1) > LT && pins.analogReadPin(AnalogPin.P2) < RT) {
                left()
            }
            if (pins.analogReadPin(AnalogPin.P1) < LT && pins.analogReadPin(AnalogPin.P2) > RT) {
                right()
            }
        } else {
            stop()
            AAA += 1
        }
    }
}
function go () {
    pins.servoSetPulse(AnalogPin.P8, Lmotors + 300)
    pins.servoSetPulse(AnalogPin.P12, Rmotors - 309)
}
let counter = 0
let AAA = 0
let RT = 0
let LT = 0
let Rmotors = 0
let Lmotors = 0
let LW = 32
let LB = 953
let RW = 47
let RB = 835
Lmotors = 1506
Rmotors = 1515
LT = (LB + LW) / 2
RT = (RB + RW) / 2
pins.servoSetPulse(AnalogPin.P8, Lmotors)
pins.servoSetPulse(AnalogPin.P12, Rmotors)
basic.forever(function () {
    serial.writeLine("" + (pins.analogReadPin(AnalogPin.P1)))
    serial.writeLine("" + (pins.analogReadPin(AnalogPin.P2)))
})
