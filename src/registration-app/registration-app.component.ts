import {  Component, OnInit} from '@angular/core';
import {ChangeDetectionStrategy, signal} from '@angular/core';

import {FormControl, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {merge} from 'rxjs';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';


import {jwtDecode} from 'jwt-decode';
@Component({
  selector: 'app-registration-app',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule,MatIconModule,MatButtonModule, MatDividerModule, MatIconModule,NgIf],
  templateUrl: './registration-app.component.html',
  styleUrl: './registration-app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationAppComponent {
//   userMobile:any;
//   userPin:any;
//   customerName!:string;
//   userName:any;
// userEmail!:string;
user = { name: '', mobileNo: '', email: '', pin: '' };
users: any[] = []; 
  constructor(private router:Router){}
  



  
  onComplete(){
    console.log("Call toh hua");
    
  
    this.users.push({...this.user});
  
    localStorage.setItem('users', JSON.stringify(this.users));
    
    this.router.navigateByUrl("/login");
    
  }
  }
