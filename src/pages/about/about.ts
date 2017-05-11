import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { BLE } from '@ionic-native/ble';
import { ToastController } from 'ionic-angular';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
    isScanning: boolean;
    devices: any[];

  constructor(public navCtrl: NavController,private ble: BLE,public toastCtrl: ToastController) {
  this.devices = [];
  this.isScanning = false;

}
startScanning() {
  
  
console.log("Scanning Started");
let toast = this.toastCtrl.create({
      message:'Scanning',
      duration: 3000
    });
    toast.present();
this.devices = [];
this.isScanning = true;
this.ble.startScan([]).subscribe(device => {
 if(device.name==="Sanket one"){
   this.ble.connect(device.id).subscribe(peripheralData => {

     
   let toast = this.toastCtrl.create({
      message:device.name,
      duration: 3000
    });
    toast.present();
    this.ble.read
      
   });

   this.ble.stopScan().then(() => {
   this.isScanning = false;
   
});
 }

});

}
}
