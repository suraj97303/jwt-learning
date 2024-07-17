import { Injectable } from '@angular/core';

import { SignJWT, jwtVerify } from 'jose';

@Injectable({
  providedIn: 'root'
})
export class SurajService {

  constructor() { }

  private secret = new TextEncoder().encode('surajIsAngularExpert'); // Use a secure, secret key

  async generateToken(mobileNo: string, pin: string): Promise<string> {
    const payload = {
      mobileNo,
      pin,
      iat: Math.floor(Date.now() / 1000), // Issued at time
      exp: Math.floor(Date.now() / 1000) + (60 * 60) // Expiration time (1 hour)
    };

    const token = await new SignJWT(payload)
      .setProtectedHeader({ alg: 'HS256' })
      .sign(this.secret);

    localStorage.setItem('token', token);
    return token;
  }

  async decodeToken(token: string): Promise<any> {
    const { payload } = await jwtVerify(token, this.secret);
    // localStorage.setItem('payload',JSON.stringify(payload))
    return payload;
  }

}
