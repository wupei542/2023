def right():
    pins.servo_set_pulse(AnalogPin.P8, Lmotors + 300)
    pins.servo_set_pulse(AnalogPin.P12, Rmotors - 0)
def gotr():
    global AAA
    if not (pins.analog_read_pin(AnalogPin.P1) > LT and pins.analog_read_pin(AnalogPin.P2) > RT):
        if pins.analog_read_pin(AnalogPin.P1) < LT and pins.analog_read_pin(AnalogPin.P2) < RT:
            go()
        if pins.analog_read_pin(AnalogPin.P1) > LT and pins.analog_read_pin(AnalogPin.P2) < RT:
            left()
        if pins.analog_read_pin(AnalogPin.P1) < LT and pins.analog_read_pin(AnalogPin.P2) > RT:
            right()
    else:
        basic.show_icon(IconNames.HOUSE)
        stop()
        AAA += 1
def left():
    pins.servo_set_pulse(AnalogPin.P8, Lmotors + 0)
    pins.servo_set_pulse(AnalogPin.P12, Rmotors - 300)
def stop():
    pins.servo_set_pulse(AnalogPin.P8, Lmotors)
    pins.servo_set_pulse(AnalogPin.P12, Rmotors)

def on_button_pressed_a():
    global AAA
    basic.show_icon(IconNames.HEART)
    AAA = 0
    go()
    basic.pause(500)
    while AAA == 0:
        gotr()
    go()
    basic.pause(500)
    right()
    go()
    basic.pause(500)
    stop()
input.on_button_pressed(Button.A, on_button_pressed_a)

def lefttr():
    global AAA
    if not (pins.analog_read_pin(AnalogPin.P1) > LT and pins.analog_read_pin(AnalogPin.P2) < RT):
        if pins.analog_read_pin(AnalogPin.P1) < LT and pins.analog_read_pin(AnalogPin.P2) < RT:
            left()
    else:
        left()
        basic.pause(200)
        stop()
        basic.show_icon(IconNames.YES)
        AAA += 1

def on_button_pressed_ab():
    basic.show_number(pins.analog_read_pin(AnalogPin.P1))
    basic.pause(100)
    basic.clear_screen()
    basic.show_number(pins.analog_read_pin(AnalogPin.P2))
    basic.pause(100)
    basic.clear_screen()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def righttr():
    global AAA
    if not (pins.analog_read_pin(AnalogPin.P1) < LT and pins.analog_read_pin(AnalogPin.P2) > RT):
        if pins.analog_read_pin(AnalogPin.P1) < LT and pins.analog_read_pin(AnalogPin.P2) < RT:
            right()
    else:
        right()
        basic.pause(200)
        stop()
        basic.show_icon(IconNames.HAPPY)
        AAA += 1
def go():
    pins.servo_set_pulse(AnalogPin.P8, Lmotors + 300)
    pins.servo_set_pulse(AnalogPin.P12, Rmotors - 300)
AAA = 0
RT = 0
LT = 0
Rmotors = 0
Lmotors = 0
LW = 44
LB = 374
RW = 46
RB = 576
Lmotors = 1505
Rmotors = 1500
LT = (LB + LW) / 2
RT = (RB + RW) / 2
pins.servo_set_pulse(AnalogPin.P8, Lmotors)
pins.servo_set_pulse(AnalogPin.P12, Rmotors)

def on_forever():
    serial.write_line("" + str((pins.analog_read_pin(AnalogPin.P1))))
basic.forever(on_forever)
