/**
 * Yahboom bitbotのIR拡張機能
 * 
 * https://github.com/YahboomTechnology/Yahboom_IR
 * 
 * micro:bit v1.5版　受信モジュール：P8
 * 
 * P3に接続した場合も確認済み。
 */
// ステアリング右
Mbit_IR.onPressEvent(RemoteButton.Right, function () {
    servopos += 10
    if (servopos > rightmax) {
        servopos = rightmax
    }
    SuperBit.Servo2(SuperBit.enServo.S1, servopos)
})
// 前進
Mbit_IR.onPressEvent(RemoteButton.Up, function () {
    basic.clearScreen()
    led.plot(2, 0)
    direction = 1
    SuperBit.MotorRun(SuperBit.enMotors.M1, speed)
})
// speed -
Mbit_IR.onPressEvent(RemoteButton.Minus, function () {
    speed += -50
    if (speed < 50) {
        speed = 50
    }
    if (direction == 1) {
        SuperBit.MotorRun(SuperBit.enMotors.M1, speed)
    } else if (direction == 2) {
        SuperBit.MotorRun(SuperBit.enMotors.M1, -1 * speed)
    }
})
// ステアリング左
Mbit_IR.onPressEvent(RemoteButton.Left, function () {
    servopos += -10
    if (servopos < leftmax) {
        servopos = leftmax
    }
    SuperBit.Servo2(SuperBit.enServo.S1, servopos)
})
// 後進
Mbit_IR.onPressEvent(RemoteButton.Down, function () {
    basic.clearScreen()
    led.plot(2, 4)
    direction = 2
    SuperBit.MotorRun(SuperBit.enMotors.M1, -1 * speed)
})
// 停止
Mbit_IR.onPressEvent(RemoteButton.BEEP, function () {
    basic.clearScreen()
    led.plot(2, 2)
    direction = 0
    SuperBit.MotorRun(SuperBit.enMotors.M1, 0)
})
// speed +
Mbit_IR.onPressEvent(RemoteButton.Plus, function () {
    speed += 50
    if (speed > 250) {
        speed = 255
    }
    if (direction == 1) {
        SuperBit.MotorRun(SuperBit.enMotors.M1, speed)
    } else if (direction == 2) {
        SuperBit.MotorRun(SuperBit.enMotors.M1, -1 * speed)
    }
})
let direction = 0
let servopos = 0
let leftmax = 0
let rightmax = 0
let speed = 0
speed = 100
let center = 123
rightmax = center + 75
leftmax = center - 75
Mbit_IR.init(Pins.P8)
servopos = center
SuperBit.Servo2(SuperBit.enServo.S1, servopos)
direction = 0
music.playTone(880, music.beat(BeatFraction.Whole))
