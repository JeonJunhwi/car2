radio.onReceivedString(function (receivedString) {
    if (receivedString == "forward") {
        magicbit.MotorRunDual(magicbit.Motors.M1, 200, magicbit.Motors.M2, -200)
        magicbit.MotorRunDual(magicbit.Motors.M3, 200, magicbit.Motors.M4, -200)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else if (receivedString == "backward") {
        magicbit.MotorRunDual(magicbit.Motors.M1, -200, magicbit.Motors.M2, 200)
        magicbit.MotorRunDual(magicbit.Motors.M3, -200, magicbit.Motors.M4, 200)
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    } else if (receivedString == "stop") {
        magicbit.MotorRunDual(magicbit.Motors.M1, 0, magicbit.Motors.M2, 0)
        magicbit.MotorRunDual(magicbit.Motors.M3, 0, magicbit.Motors.M4, 0)
        basic.showLeds(`
            . # # # .
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            `)
    } else if (receivedString == "turn left") {
        magicbit.MotorRunDual(magicbit.Motors.M1, 200, magicbit.Motors.M2, -200)
        magicbit.MotorRunDual(magicbit.Motors.M3, -200, magicbit.Motors.M4, 200)
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else if (receivedString == "turn right") {
        magicbit.MotorRunDual(magicbit.Motors.M1, -200, magicbit.Motors.M2, 200)
        magicbit.MotorRunDual(magicbit.Motors.M3, 200, magicbit.Motors.M4, -200)
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else if (receivedString == "honk") {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . # . #
            # . . . #
            # # # # #
            `)
        music.playTone(262, music.beat(BeatFraction.Whole))
    } else if (receivedString == "grab") {
        basic.showLeds(`
            . . # . .
            . . # . .
            . # . . .
            . # . # .
            . . # . .
            `)
        magicbit.Servospeed(magicbit.Servos.S1, 90, 180, 10)
        magicbit.Servospeed(magicbit.Servos.S1, 180, 90, 10)
    }
})
radio.setGroup(1)
