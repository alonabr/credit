import { LoginObject } from './loginobject';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  model:LoginObject = new LoginObject();
  
  
  constructor(){
    
  }
}
