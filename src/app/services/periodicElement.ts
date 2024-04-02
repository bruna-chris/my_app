import { PeriodicElement } from './../models/PeriodicElement';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class  PeriodicElementService {
  elementApiUrl = 'https://localhost:44366/api/PeriodicElements';
  constructor (private http: HttpClient) { }


  getElements(): Observable<PeriodicElement[]> {
    return this.http.get<PeriodicElement[]> (this.elementApiUrl);
  }
}
