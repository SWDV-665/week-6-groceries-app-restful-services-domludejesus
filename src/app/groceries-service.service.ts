import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GroceriesServiceService {

  items: any = [];

  dataChanged$: Observable<boolean>;
  private dataChangeSubject: Subject<boolean>;

  baseURL = "http://localhost:8080";

  constructor(public http: HttpClient) {
    console.log('Hello Groceries-Service-Service Provider ');

    this.dataChangeSubject = new Subject<boolean>();
    this.dataChanged$ = this.dataChangeSubject.asObservable();
  }

  getItems(): Observable<object> {
    return this.http.get(this.baseURL + '/api/groceries').pipe(
      map(this.extractData),
      catchError(this.handleError)
    );

  }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const err = error || '';
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return throwError(() => new Error(errMsg));
  }



  async removeItem(id) {
    console.log("#### Remove Item - id = ", id);
    this.http.delete(this.baseURL + "api/groceries/" + id).subscribe(res => {
      this.items = res;
      this.dataChangeSubject.next(true);
    });
  }

  async addItem(item) {
    this.http.post(this.baseURL + "/api/groceries/", item).subscribe(res => {
      this.items = res;
      this.dataChangeSubject.next(true);
    });
  }

  async editItem(data, index) {
    console.log("Editing item = ", data);
    this.http.put(this.baseURL + "/api/groceries" + data._id, index).subscribe(res => {
      this.items = res;
      this.dataChangeSubject.next(true)
    })
  }


}


