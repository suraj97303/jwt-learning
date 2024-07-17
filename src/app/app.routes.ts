import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'node:path';
import { LoginAppComponent } from './login-app/login-app.component';
import { RegistrationAppComponent } from '../registration-app/registration-app.component';
import { PaymentAppComponent } from '../payment-app/payment-app.component';

export const routes: Routes = [

    {
    path:"login",
    component:LoginAppComponent,
    },
    {
        path:"register",
        component:RegistrationAppComponent,
    },
    {
        path:'payment',
        component:PaymentAppComponent,
    }
];
