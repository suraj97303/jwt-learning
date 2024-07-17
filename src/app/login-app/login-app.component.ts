import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import bcrypt from 'bcryptjs';
import { RouterOutlet } from '@angular/router';
import {ChangeDetectionStrategy, signal} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {merge} from 'rxjs';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

import { AuthService } from '../../auth.service';
import { SurajService } from '../service/suraj.service';

@Component({
  selector: 'app-login-app',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule,MatIconModule,MatButtonModule, MatDividerModule, MatIconModule,NgIf],
  templateUrl: './login-app.component.html',
  styleUrl: './login-app.component.css'
})
export class LoginAppComponent {
  loginData = { mobileNo: '', pin: '' };

  async saveToConsole(mobile:string,pin:string): Promise<void>{
    try {
      const token = await this.authService.generateToken(mobile, pin);
      console.log('Generated token:', token);

      const decodedToken = await this.authService.decodeToken(token);
      console.log('Decoded token:', decodedToken);

      // Perform other login logic (e.g., navigate to dashboard)
    } catch (error) {
      console.error('Error during login:', error);
    }
  }
  
  constructor(private router:Router, private authService:SurajService){}

  onSubmit(){
    
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const userExists = users.some((user:any)=>user.mobileNo===this.loginData.mobileNo && user.pin==this.loginData.pin);
    if(userExists){
  
      if(!this.loginData.mobileNo && !this.loginData.pin){
        alert('please enter the details');
      }
      else{ 
      this.saveToConsole(this.loginData.mobileNo,this.loginData.pin);        
        
      this.router.navigateByUrl("/payment");
     
      }
      
    }
      else{
        alert('Invalid login credentials');
      }
    
 
  }
}

