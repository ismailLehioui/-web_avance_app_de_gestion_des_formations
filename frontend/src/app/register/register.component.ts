import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Route, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  registerForm!: FormGroup;
  registrationError: boolean = false;

  author= {
    name:'',
    lastname:'',
    email:'',
    password:'',
    about:''
  }
  image: any;

  select(e:any){
    this.image = e.target.files[0];
  }

  constructor(private fb: FormBuilder,private _auth: AuthService , private router: Router){

    this.registerForm = this.fb.group({
      name: ['', [Validators.required,Validators.minLength(3)]],
      lastname: ['', [Validators.required,Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,Validators.minLength(4)]],
      about: [''],
    });
  }
  ngOnInit(): void {

  }

  register(){
    if (this.registerForm.valid) {
      let fd = new FormData();
      fd.append('name',this.author.name)
      fd.append('lastname',this.author.lastname)
      fd.append('email',this.author.email)
      fd.append('password',this.author.password)
      fd.append('about',this.author.about)
      fd.append('image',this.image)

      this._auth.register(fd)
        .subscribe(
          res=>{
            this.router.navigate(['/login']);
          },
          (err) => {
            console.log(err); // Gérer les erreurs d'enregistrement
            this.registrationError = true; // Définir la variable d'erreur à true en cas d'échec
          }
          
        ); 
    }
  }
}

