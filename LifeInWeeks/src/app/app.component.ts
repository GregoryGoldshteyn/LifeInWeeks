import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { MatDialog } from '@angular/material/dialog';
import { WeekInspectorComponent } from './week-inspector/week-inspector.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Life In Weeks';
  years: any = [];
  currentWeek: any = {id: -1, start_date: -1, end_date: -1, notable_events:[]};

  constructor(private httpClient: HttpClient, public weekInspector: MatDialog) { }
  ngOnInit() {
    this.httpClient.get("assets/data.json").subscribe(data => {
      console.log(data);
      this.years = data;
    })
  }

  openWeekInspector(week, year) {
    this.weekInspector.open(WeekInspectorComponent, {data: {"year" : year, "week" : week}});
  }

  getColorByEvents(events) {
    if(events == undefined)
    {
      return '#A6E1FA';
    }
    switch(events.length)
    {
      case 3: return '#001C55';
      case 2: return '#0A2472';
      case 1: return '#0E6BA8';
      case 0: return '#A6E1FA';
      default: return '#00072D';
    }
  }
}
