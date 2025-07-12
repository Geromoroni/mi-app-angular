import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
@Component({
    selector: 'app-form',
    imports: [ReactiveFormsModule],
    standalone: true,
    templateUrl: './form.component.html',
    styleUrl: './form.component.scss'
})
export class FormComponent {

        formSignUp = new FormGroup({
                username: new FormControl(''),
                email: new FormControl(''),
                password: new FormControl(''),
                confirmPassword: new FormControl('')
        });

}