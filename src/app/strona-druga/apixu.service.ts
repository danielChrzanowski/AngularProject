import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {
  constructor(private http: HttpClient) { }

  getWeather(location) {
    const options = { responseType: "json" as "json" };
    return this.http.get('http://api.weatherstack.com/current?access_key=0e82a7d17507d1ff72bbab4239ae51cf&query='+location, options);
  }
  
}
