import { HttpErrorResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class HttpService<T> {

  constructor(private _http: HttpClient) {
  }

  getService(url: string): Observable<T> {
    return this._http.get<T>(url)
      .do(data => console.log(data))
    .catch(this.handleError);
  }

  postService() {

  }

  deleteService() {

  }

  updateService() {

  }

  private handleError(err: HttpErrorResponse) {
      return Observable.throw(err.message);
  }

}
