import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    
  LoginForm = new FormGroup({
    email: new FormControl("",[
      Validators.required,
      Validators.email,
      Validators.minLength(4),
      Validators.maxLength(32)
    ]),
    password: new FormControl("",[
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(32)
    ])
  })

  get email() { return this.LoginForm.get('email');}

  get password() { return this.LoginForm.get('password');}

  httpError : string = "";
  submitted : boolean = false;

  constructor(private auth : AuthService) { }
  
  ngOnInit(): void {}

  submit() {
    this.submitted = true;

    //input fields
    const {email, password} = this.LoginForm.value;

    const httpResp = this.auth.login(email,password);    

    httpResp.subscribe(
      res => console.log('HTTP response', res),
      err => {
        console.log('HTTP Error', err);
        this.httpError = err.error.errors[0].detail;
      },
      () => console.log('HTTP request completed.')
    );
  }
}
