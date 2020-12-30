import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    email: new FormControl('',[
      Validators.required,
      Validators.email,
      Validators.minLength(4),
      Validators.maxLength(32)
    ]),
    password: new FormControl('',[
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(32)      
    ]),
    confirmPassword: new FormControl('',[
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(32)
    ]),
    username: new FormGroup({
      name: new FormControl('',[
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(32)
      ]),
      surname: new FormControl('',[
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(32)
      ])
    })
  });  

  passwordI : string = "";
  passwordConfirmI : string = "";
  httpError : string = "";

  get email() { return this.registerForm.get('email');}

  get confirmPassword() { return this.registerForm.get('confirmPassword');}

  get password() { return this.registerForm.get('password');}

  get name() { return this.registerForm.get('username')?.get("name");}

  get surname() { return this.registerForm.get('username')?.get("surname");}

  constructor(private authService : AuthService) { }

  ngOnInit(): void {
  }

  public submit() {
    //input fiedls
    const {email, password, confirmPassword, username} = this.registerForm.value;
    const usernameTS = username.name+" "+username.surname;

    console.log(email);
    console.log(password);
    console.log(confirmPassword);
    console.log(username.name);
    console.log(username.surname);

    const httpResp = this.authService.register(email,password,usernameTS);

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
