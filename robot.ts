//% block="Robot CM1"
//% weight=100 color=#5b3fe8" color=#f44242 icon="\uf185"
namespace robot {

	//% block="Faire tourner roue droite lentement"
	//% blockId="robot_roue_droite_lent"
	//% weight=99
	export function vitesseDroiteLent () {
		maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.RightMotor, maqueenPlusV2.MyEnumDir.Forward, 30)
	}

	//% block="Faire tourner roue droite rapidement"
	//% blockId="robot_roue_droite_rapide"
	//% weight=98
	export function vitesseDroiteRapide () {
		maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.RightMotor, maqueenPlusV2.MyEnumDir.Forward, 100)
	}


	//% block="Faire tourner roue gauche lentement"
	//% blockId="robot_roue_gauche_lent"
	//% weight=97
	export function vitesseGaucheLent () {
		maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.LeftMotor, maqueenPlusV2.MyEnumDir.Forward, 30)
	}


	//% block="Faire tourner roue gauche rapidement"
	//% blockId="robot_roue_gauche_rapide"
	//% weight=96
	export function vitesseGaucheRapide () {
		maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.LeftMotor, maqueenPlusV2.MyEnumDir.Forward, 100)
	}
	
	
	
	//% block="Arreter robot"
	//% blockId="robot_arreter"
	//% weight=95
	export function arreter_robot () {
		maqueenPlusV2.controlMotorStop(maqueenPlusV2.MyEnumMotor.LeftMotor)
		maqueenPlusV2.controlMotorStop(maqueenPlusV2.MyEnumMotor.RightMotor)
	}
	

}
