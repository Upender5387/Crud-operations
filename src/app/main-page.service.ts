import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders,   HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import {  throwError } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class MainPageService {
  public baseurl="https://localhost:44334/api/";
  // private data = new Subject<Array<any>>();
  constructor(private http: HttpClient) { }
  // getConfig() {
  //   return this.http.get<Config>(this.configUrl);
  // }
  // public getnavList(): Observable<Array<any>> {
  //   return this.data.asObservable();
  // } 
  public getnavList(url: string): Observable<any> {
   
    return this.http.get(this.baseurl + url).pipe(
      catchError(this.errorHandler.bind(this)));
  }
  public getLoginList(url: string,username:string,Password:string ): Observable<any> {
   
    return this.http.get(this.baseurl + url+ '?username=' + username + '&Password=' + Password).pipe(
      catchError(this.errorHandler.bind(this)));
  }
  public setnavList(url: string,Product1:any): Observable<any> {
   
    return this.http.post(this.baseurl + url,Product1).pipe(
      catchError(this.errorHandler.bind(this)));
  }
  public deletenavList(url: string,Product12:any): Observable<any> {
   
    return this.http.post(this.baseurl + url,Product12).pipe(
      catchError(this.errorHandler.bind(this)));
  }
  // public setnavList(url: string): Observable<any> {
    
  //   return this.http.get(this.baseurl + url).pipe(
  //     catchError(this.errorHandler.bind(this)));
  // }
  errorHandler(err: HttpErrorResponse) {
    alert(err);
    return throwError(err);
  }
}
