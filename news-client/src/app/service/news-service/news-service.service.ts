import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {
  public defaultCountry = 'us';
  public baseUrl = 'http://localhost:8080';
  public geoCodeUrl = 'http://api.geonames.org';

  constructor(private http: HttpClient) {

   }

   public getHeadlines(country: string) {
      const signature = '/rest/calendars/';
      try {
        return this.http.get(this.baseUrl + signature);
      } catch (err) {
        return err;
      }
   }

  public getCountryCode() {
    try {
      navigator.geolocation.getCurrentPosition((data) => {
        const signature = '/countryCodeJSON';
        const latitude = data.coords.latitude;
        const longitude = data.coords.longitude;
        // http://api.geonames.org/countryCodeJSON?lat=49.03&lng=10.2&username=demo
        return this.http.get(`${this.defaultCountry}${signature}?lat=${latitude}&lng=${longitude}&username=demo`);
      });
    } catch (err) {
      return err;
    }
  }
}
