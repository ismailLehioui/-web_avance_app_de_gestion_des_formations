// login.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private _auth: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,Validators.minLength(4)]]
    });
  }

  ngOnInit(): void {}
  
  

  token: any;

  login() {
    if (this.loginForm.valid) {
      this._auth.login(this.loginForm.value).subscribe(
        (res) => {
          this.token = res;
          localStorage.setItem('token', this.token.mytoken);
          this.router.navigate(['/home']);
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
}
