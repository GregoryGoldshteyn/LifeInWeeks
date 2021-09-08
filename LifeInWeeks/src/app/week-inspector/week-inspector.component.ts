import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-week-inspector',
  templateUrl: './week-inspector.component.html',
  styleUrls: ['./week-inspector.component.css']
})
export class WeekInspectorComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
