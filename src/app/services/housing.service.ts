import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { IProperty } from '../property/IProperty.interface';
@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http: HttpClient) { }

  getAllProperties() {
    return this.http.get("data/data.json").pipe(
      map(data => {
        const propertyArray: Array<IProperty> = [];
        for (const id in data) {
          // hasOwnProperty Check that the taken 'id' belongs to the object directly or not
          if (data.hasOwnProperty(id)) {
            propertyArray.push(data[id]);
          }
        }
        return propertyArray;
      }
      )
    );
  }
}
