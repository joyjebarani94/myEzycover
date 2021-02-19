import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { ConfirmEqualValidatorDirective } from '../../../../ntech-directive/confirm-equal-validator.directive';
declare var NgForm:any;
@Component({

    selector: 'ntech-register',
    templateUrl: './ntech-registration.component.html',
    styleUrls :['./ntech-registration.component.css']
})
export class NtechRegistrationComponent
{
    registerForm: FormGroup;
    submitted = false;
   
    constructor(private formBuilder: FormBuilder) { }
    title = 'reactive-form-validation-in-angular8';
   
    ngOnInit() {
    this.registerForm = this.formBuilder.group({
    fullName: ['', Validators.required],
    email: ['', [Validators.required,Validators.email]],
    phone: ['', Validators.required],
    password: ['', [Validators.required,Validators.minLength(6)]],
    confirmPassword: ['', Validators.required],
    tnc: ['', Validators.required]
   });
   
   }
   
    get fval() {
    return this.registerForm.controls;
    }
    //this.user.fullName='';
    signup(){
    this.submitted = true;
    if (this.registerForm.invalid) {
    return;
    }
    alert('form fields are validated successfully!');
    }
}


