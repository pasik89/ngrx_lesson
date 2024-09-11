import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class StateLessonService {

  constructor(private _httpClient: HttpClient) { }

  getData() {
    return this._httpClient.get('../../../assets/db.json', {
      responseType: 'json'
    });
  }
}
