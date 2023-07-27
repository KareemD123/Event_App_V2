import { Component, OnInit } from '@angular/core';
// Import Event Service
import { EventService } from '../event.service'
// Import Event Interface
import { Event } from '../event'

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  eventList: any = []

  searchParam: String = ''

  event: Event = {
    name: '',
    host: '',
    date: new Date(),
    location: ''
  }

  constructor(private _eventService: EventService) { }

  // ngOnInit -> LifeCycle Method that will execute everytime a component is initialized
  ngOnInit(): void {
    this.getEventList()
  }

  getEventList() {
    this._eventService.getEventList().subscribe(responseData => {
      this.eventList = responseData
      console.log('This is the response from our API! ', responseData)
    })
  }

  searchEvent() {
    this._eventService.searchEvent(this.searchParam).subscribe(responseData => {
      console.log('This is the response data: ', responseData)
      this.eventList = responseData
    })
  }

  createEvent() {
    this._eventService.createEvent(this.event).subscribe(responseData => {
      console.log('This is our createEvent respone data: ', responseData)
      // Try to include error handling
      // if (responseData.status == 200) {}
      this.getEventList()
    })
  }

}
