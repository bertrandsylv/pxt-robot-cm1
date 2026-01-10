//% block="Robot CM1"
//% weight=100 color=#5b3fe8" color=#f44242 icon="\uf185"
namespace robot {


//% block="Roue droite vitesse lente"
//%blockId="roue_droite_lent"
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
