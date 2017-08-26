import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'tp-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  rform: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.rform = this.fb.group({
      username: ['', [
        Validators.required,
        Validators.minLength(8)
      ]],
      pwd: this.fb.group({
        password: [],
        confirmPassword: []
      }),
    });

    this.rform.valueChanges
      .subscribe(res => console.log(res));
  }

  onSubmit() {
    console.log(123);
  }

}
