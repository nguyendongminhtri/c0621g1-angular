import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../service/auth.service';
import {FormControl, Validators} from '@angular/forms';
import {SignUpForm} from '../../model/SignUpForm';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: any = {};
  signUpForm: SignUpForm;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  hide = true;
  status = 'Please fill in the form to Register';
  error1: any = {
    message: 'no_user'
  };
  error2: any = {
    message: 'no_email'
  };
  success: any = {
    message: 'yes'
  };

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  ngSubmit() {
    this.signUpForm = new SignUpForm(
      this.form.name,
      this.form.username,
      this.form.email,
      this.form.password,
    );
    this.authService.signUp(this.signUpForm).subscribe(data => {
      console.log('data -> ', data);
      if (JSON.stringify(data) == JSON.stringify(this.error1)) {
        this.status = 'The username is existed! Please try again!';
      }
      if (JSON.stringify(data) == JSON.stringify(this.error2)) {
        this.status = 'The email is existed! Please try again!';
      }
      if (JSON.stringify(data) == JSON.stringify(this.success)) {
        this.status = 'Create Account Success!';
      }
    });
  }
}
