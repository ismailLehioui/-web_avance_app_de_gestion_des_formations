import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateCoursComponent } from './create-cours/create-cours.component';
import { AboutComponent } from './about/about.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { AuthorComponent } from './author/author.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailComponent } from './detail/detail.component';
import { authGuard } from './services/auth.guard';
import { UsersComponent } from './users/users.component';

const routes: Routes = [

  {path: '' , component: HomeComponent},
  {path: 'home' , component: HomeComponent},
  {path: 'create', component: CreateCoursComponent},
  {path: 'article/:id' , component: DetailComponent},
  {path: 'about' , component: AboutComponent},
  {path: 'privacy' , component: PrivacyComponent},
  {path: 'author/:id' , component: AuthorComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'register' , component: RegisterComponent},
  {path: 'users' , component: UsersComponent},
  {path: '**' , component: NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
