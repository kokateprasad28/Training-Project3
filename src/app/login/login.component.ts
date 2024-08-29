import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 username=''
 password=''
 errorMessage='Invalid credentials'
 invalidLogin=false
 constructor(private router: Router) { }

 handleLogin(){
  if(this.username==='prasad' && this.password==='prasad12'){
  this.router.navigate(['/welcome/prasad']);
  this.invalidLogin=false;
  }else{
    this.invalidLogin=true;
  }
 }
}

