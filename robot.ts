//% block="Robot CM1"
//% weight=100 color=#5b3fe8"
namespace robot {


//% block="Roue droite vitesse lente"
//% weight=99
export function vitesseDroiteLent () {
    maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.RightMotor, maqueenPlusV2.MyEnumDir.Forward, 30)
}

//% block="Roue droite vitesse rapide"
//% weight=98
export function vitesseDroiteRapide () {
    maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.RightMotor, maqueenPlusV2.MyEnumDir.Forward, 100)
}


//% block="Roue gauche vitesse lente"
//% weight=96
export function vitesseGaucheLent () {
    maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.LeftMotor, maqueenPlusV2.MyEnumDir.Forward, 30)
}


//% block="Roue gauche vitesse rapide"
//% weight=97
export function vitesseGaucheRapide () {
    maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.LeftMotor, maqueenPlusV2.MyEnumDir.Forward, 100)
}

}
