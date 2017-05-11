import { Component } from '@angular/core';

import { AlertController } from 'ionic-angular';
import { ViewController,NavController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';

@Component({
	selector: 'page-login',
	templateUrl: 'login.html'
})

export class LoginPage {

	username:string;
	password:string;
	
	constructor(public alertCtrl: AlertController,public navCtrl: NavController,public viewCtrl: ViewController) {
		// code...
	}
	doLogin(){

		if((this.username === "Akash") && (this.password === "1234")){
			let alert = this.alertCtrl.create({
      title: 'Login Successfull',
      subTitle: 'You can use the app now',
      buttons: [{
      	text:"OK",
      	handler: () =>{

            this.navCtrl
            .push( TabsPage )
            .then(() => {
            const index = this.viewCtrl.index;
        // then we remove it from the navigation stack
            this.navCtrl.remove(index);
            });

       
      	}
      }]
    });
    alert.present();
		}
		else{
				let alert = this.alertCtrl.create({
      title: 'Invalid credentials',
      subTitle: 'Please enter the correct data',
      buttons: ['OK']

    });
    alert.present();
		}
		
     }
	goFacebook(){
	let alert = this.alertCtrl.create({
      title: 'Oopssss',
      subTitle: 'I\'m a beginer, I\'m working on it',
      buttons: ['OK','']
    });
    alert.present();
	}
}



