import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  
    username = "";
    password = "";
    gender = "";
    email = "";
  
  constructor(private router: Router) {}

  register(){
    this.router.navigate(['/home']);
  }
}
