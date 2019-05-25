import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-result',
  templateUrl: './show-result.component.html',
  styleUrls: ['./show-result.component.css']
})
export class ShowResultComponent implements OnInit {

  constructor() { }
  displayDetails : any;
  @Input() data: any;

  ngOnInit() {
  }

  ngOnChanges(){
    this.displayDetails = this.data
  }
  goToUrl(url): void {
    document.location.href = url;
}



}
