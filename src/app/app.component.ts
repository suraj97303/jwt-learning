import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { LoginAppComponent } from './login-app/login-app.component';
import { RegistrationAppComponent } from '../registration-app/registration-app.component';
import { PaymentAppComponent } from '../payment-app/payment-app.component';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AuthService } from '../auth.service';
import { SurajService } from './service/suraj.service';
import { promises } from 'dns';







@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginAppComponent,RegistrationAppComponent,PaymentAppComponent,MatSlideToggleModule,
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'jwt-project';
  token:string ='';
  // generateToken = () => {
  //   const token = jwt.sign({ name: 'John Doe', role: 'admin' }, 'surajIsExpertInAngular', { expiresIn: '1h' });
  //   this.token = token;
  //   console.log('token',token);
  //   return token;
  // };
  // decodeToken = (token: string) => {
  //     const decoded = jwtDecode(token);
  //     console.log('decode',decoded);
  //     return decoded;
  //   };
    
  //   ngOnInit(): void {
  //     this.generateToken();
  //     this.decodeToken(this.token);
  //     // localStorage.setItem('token',this.token);

  //   }

  constructor( public authService:SurajService ){

  }

  // decode :any='';

// ngOnInit(): void {
  
// }

  // async ngOnInit(): Promise<void>  {
      // try {
      //   const token = await this.authService.generateToken('wfijrqeoijioerelk', 'lkdflk');
      //   console.log('Generated token:', token);
  
      //   const decodedToken = await this.authService.decodeToken(token);
      //   console.log('Decoded token:', decodedToken);
  
      //   // Perform other login logic (e.g., navigate to dashboard)
      // } catch (error) {
      //   console.error('Error during login:', error);
      // }
    
      // this.suraj.generateToken('-3-091839403','3-9843-04314321');
    
  }



// }

