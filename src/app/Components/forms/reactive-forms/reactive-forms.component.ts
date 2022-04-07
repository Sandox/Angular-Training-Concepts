import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  signUpForm : FormGroup;

  genders : string[] = ['male','female'];


  ngOnInit(): void {

    this.signUpForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('',
        [Validators.required,
          Validators.email] ),
      gender: new FormControl('male')

    })
  }

  onSubmit() {
    console.log(this.signUpForm);
  }

}
