/**
 * Pause calculates fraction of a circle turn
 */
function Turn_R (degrees: number) {
    maqueen.motorStop(maqueen.Motors.M2)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
    basic.pause(degrees / 360 * 2300)
    maqueen.motorStop(maqueen.Motors.M1)
}
/**
 * Parameter can be any number (of degrees)
 */
input.onButtonPressed(Button.A, function () {
    Turn_R(360)
})
