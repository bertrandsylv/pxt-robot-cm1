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
	export function arreterRobot () {
		maqueenPlusV2.controlMotorStop(maqueenPlusV2.MyEnumMotor.LeftMotor)
		maqueenPlusV2.controlMotorStop(maqueenPlusV2.MyEnumMotor.RightMotor)
	}
	
	
	

	//% block="Avancer de |%distance cm"
	//% blockId="robot_avancer"
	//% weight=94
	//% distance.defl=10
	export function avancerRobot(distance:number){
		maqueenPlusV2.pidControlDistance(maqueenPlusV2.SpeedDirection.SpeedCW, distance, maqueenPlusV2.MyInterruption.NotAllowed)
		maqueenPlusV2.pidControlStop()
	}
	
	//% block="Initialiser robot"
	//% blockId="robot_initialiser"
	//% weight=93
	export function initialiserRobot(){
		maqueenPlusV2.I2CInit()
		basic.clearScreen()
		basic.showIcon(IconNames.Happy)
		while (true) {
			if (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B)) {
				break;
			}
		}
	}
		


}
