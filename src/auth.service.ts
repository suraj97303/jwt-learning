import { Injectable } from '@angular/core';
import jwt from 'jsonwebtoken';
import {jwtDecode} from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token:string ='';

  // generateToken = (mobileNo: string, pin: string) => {
  //   const token = jwt.sign({mobileNo, pin }, 'surajIsExpertInAngular', { expiresIn: '1h' });
  //   this.token = token;
  //   console.log('token',token);
  //   localStorage.setItem('token',token);
  //   return token;
  // };
  // decodeToken = (token: string) => {
  //     const decoded = jwtDecode(token);
  //     console.log('decode',decoded);
  //     return decoded;
  //   };
    
    // ngOnInit(): void {
    //   this.generateToken('kjwnfj','lkefwlk');
    //   this.decodeToken(this.token);
    //   localStorage.setItem('token',this.token);

    // }

    
}
