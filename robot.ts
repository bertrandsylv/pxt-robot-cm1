//% block="Robot CM1"
//% weight=100 color=#5b3fe8" color=#f44242 icon="\uf185"
namespace robot {

	//% block="Initialiser robot"
	//% blockId="robot_initialiser"
	//% weight=99
	export function initialiserRobot(){
		maqueenPlusV2.I2CInit()
		basic.clearScreen()
		basic.showIcon(IconNames.Happy)
	}
	
	
	//% block="Avancer de |%distance cm"
	//% blockId="robot_avancer"
	//% weight=98
	//% distance.defl=10
	export function avancerRobot(distance:number){
		maqueenPlusV2.pidControlDistance(maqueenPlusV2.SpeedDirection.SpeedCW, distance, maqueenPlusV2.MyInterruption.NotAllowed)
		maqueenPlusV2.pidControlStop()
	}
	
	
	//% block="Tourner gauche"
	//% blockId="robot_tourner_gauche"
	//% weight=97
	export function tournerGaucheRobot(){
		maqueenPlusV2.pidControlAngle(-90, maqueenPlusV2.MyInterruption.NotAllowed)
		maqueenPlusV2.pidControlStop()
	}
	
	
	//% block="Tourner droite"
	//% blockId="robot_tourner_droite"
	//% weight=96
	export function tournerDroiteRobot(){
		maqueenPlusV2.pidControlAngle(90, maqueenPlusV2.MyInterruption.NotAllowed)
		maqueenPlusV2.pidControlStop()
	}

	
	
	//% block="Arreter robot"
	//% blockId="robot_arreter"
	//% weight=95
	export function arreterRobot () {
		maqueenPlusV2.controlMotorStop(maqueenPlusV2.MyEnumMotor.LeftMotor)
		maqueenPlusV2.controlMotorStop(maqueenPlusV2.MyEnumMotor.RightMotor)
	}
	

	//% block="Attendre appui bouton"
	//% blockId="attendre_appui_bouton"
	//% weight=94
	export function attendreAppuiBouton () {
		while (true) {
			if (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B)) {
				break; 
			}
		}
	}


	//% block="Faire tourner roue droite lentement"
	//% blockId="robot_roue_droite_lent"
	//% weight=79
	export function vitesseDroiteLent () {
		maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.RightMotor, maqueenPlusV2.MyEnumDir.Forward, 30)
	}

	//% block="Faire tourner roue droite rapidement"
	//% blockId="robot_roue_droite_rapide"
	//% weight=78
	export function vitesseDroiteRapide () {
		maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.RightMotor, maqueenPlusV2.MyEnumDir.Forward, 100)
	}


	//% block="Faire tourner roue gauche lentement"
	//% blockId="robot_roue_gauche_lent"
	//% weight=77
	export function vitesseGaucheLent () {
		maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.LeftMotor, maqueenPlusV2.MyEnumDir.Forward, 30)
	}


	//% block="Faire tourner roue gauche rapidement"
	//% blockId="robot_roue_gauche_rapide"
	//% weight=76
	export function vitesseGaucheRapide () {
		maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.LeftMotor, maqueenPlusV2.MyEnumDir.Forward, 100)
	}


}
