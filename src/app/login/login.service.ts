import { HttpService } from '../common/services/http.service';
import { Injectable } from '@angular/core';
import { LoginObject } from './loginobject';

@Injectable()
export class LoginService {

  message: string;

  constructor(private _http: HttpService<LoginObject>) {

  }

  url = 'http://localhost:8080/login/';

  public checkUserNamePassword(): boolean {

    let obj: LoginObject;

    this._http.getService(this.url).subscribe(
      data =>  obj = data,
      error => this.message = <any>error);

    return false;
  }

}
