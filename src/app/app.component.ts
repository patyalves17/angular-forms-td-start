import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f', {static: false}) signupForm: NgForm;
  defaultQuestion = 'pet';
  answer = '';
  genders = ['female', 'male'];
  defaultGender = 'female';

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm.setValue({
    //   userData: {
    //     username: 'paty',
    //     email: 'paty@test.com'
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'female'
    // });

    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });

  }
  onSubmit() {

    console.log(this.signupForm);
  }
}
