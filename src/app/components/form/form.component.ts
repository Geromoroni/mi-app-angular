import { JsonPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators} from '@angular/forms';
@Component({
    selector: 'app-form',
    imports: [ReactiveFormsModule, NgIf],
    standalone: true,
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent {
//@Output() formSubmitted = new EventEmitter();


        formSignUp = new FormGroup({
                username: new FormControl('', [Validators.required]),
                email: new FormControl('', [Validators.required, Validators.email]),
                password: new FormControl('', [Validators.required, Validators.minLength(6)]),
                confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
        }, [this.isMismatch]);

    isMismatch(control: AbstractControl): ValidationErrors | null {
    // si las 2 contraseñas no son iguales, devuelve  un objeto ValidationErrors
    if (control.get('password')?.value !== control.get('confirmPassword')?.value) {
      return  { passwordMismatch: true };
    }
    return null;

}
onSubmit() {
    if (this.formSignUp.valid) {
      console.log(this.formSignUp.value);
    //  this.formSubmitted.emit(this.formSignUp.value);
    }
  }

}