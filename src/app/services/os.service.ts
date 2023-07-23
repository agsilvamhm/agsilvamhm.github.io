import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Os } from '../models/os';

@Injectable({
  providedIn: 'root'
})
export class OsService  {
  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient,
              private snack: MatSnackBar) { }

  findAll(): Observable<Os[]>{
    const url = this.baseUrl + "/os";
    return this.http.get<Os[]>(url);
  }

  findById(id: any):Observable<Os>{
    const url = `${this.baseUrl}/os/${id}`;
    return this.http.get<Os>(url);
  }

  create(os: Os):Observable<Os>{
    const url = this.baseUrl + "/os";
    return this.http.post<Os>(url, os);
  }

  update(os: Os):Observable<Os>{
  //  const url = this.baseUrl + "/os/" + os.id;
    const url = `${this.baseUrl}/os`;
    return this.http.put<Os>(url, os);
  }

  delete(id: any):Observable<void>{
    const url = `${this.baseUrl}/os/${id}`;
    return this.http.delete<void>(url);
  }

  message(msg: string){
    this.snack.open(`${msg}`, 'OK', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 4000
    });
  }
}
