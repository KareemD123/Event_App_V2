import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class EventService {

  private SERVER_URL: string = 'http://localhost:3000/'

  // Injecting HttpClient Library into the service
  constructor(private http: HttpClient) { }

  getEventList() {
    // An asynchronous call
    return this.http.get(this.SERVER_URL + 'events')
  }

  // createEvent()

  // searchEvent()

}
