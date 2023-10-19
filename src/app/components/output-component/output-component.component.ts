import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-output-component',
  templateUrl: './output-component.component.html',
  styleUrls: ['./output-component.component.scss']
})
export class OutputComponentComponent implements OnInit {

  @Input() source:string ='';
  @Input() destination:string ='';
  @Input() journyType:string = '';

  
  constructor() { }

  ngOnInit(): void {
  }

}
