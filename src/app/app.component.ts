import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { ServerService} from './server.service';
import {UserdataModel} from './userdata.model';
import {FormsModule} from '@angular/forms';
import {Form} from '@angular/forms';
import {Observable, Subscriber, Subscription, Subscribable, AsyncSubject, Observer} from 'rxjs';
import {stringify} from 'querystring';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(){

  }
  ngOnInit(): void {

  }
}


