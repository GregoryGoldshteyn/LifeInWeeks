import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Life In Weeks';
  years: any = [];
  constructor(private httpClient: HttpClient) { }
  ngOnInit() {
    this.httpClient.get("assets/data.json").subscribe(data => {
      console.log(data);
      this.years = data;
    })
  }
}
