import { Component } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { CarModel } from '../././../../ntech-models/nt-user2.model' ;
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
@Component({

    selector: 'ntech-user2',
    templateUrl: './ntech-user2-component.html',
    styleUrls : ['./ntech-user2-component.css']
    

})
export class NtechUser2Component {
    userModal = new CarModel();
     privatevehicle = ['MotorVehicle', 'Car'];
   

constructor(private router: Router) { }
getquotes= function () {
   this.router.navigateByUrl('/ntechuser3');
}

  // Validates zip codes
  zipCodeValidator(zip: { pristine: any; markAsTouched: () => void; value: string; }): any {
  if (zip.pristine) {
      return null;
   }
   const ZIP_REGEXP = /^[0-9]{5}(?:-[0-9]{4})?$/;
   zip.markAsTouched();
   if (ZIP_REGEXP.test(zip.value)) {
      return null;
   }
   return {
      invalidZip: true
   };
 }
isValidNumber($vehiclenumber: any){
  const $pattern = "^[a-zA-z]{2}\s[0-9]{2}\s[0-9]{4}$";
  if ($pattern == $vehiclenumber){
     return true;
  }
  else {
     return false;
 }
}
onSubmit() {
  alert('Form Submitted succesfully!!!\n Check the values in browser console.');
  console.table(this.userModal);
}


}

    


