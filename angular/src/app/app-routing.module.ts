import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateaccountComponent } from './components/createaccount/createaccount.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  // {path:'login',component:LoginComponent,pathMatch:'full'},
  {path:'app',component:AppComponent},
  {path:'forgetpassword',component:ForgetpasswordComponent},
  {path:'createaccount',component:CreateaccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
