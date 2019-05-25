import { Component, OnInit } from '@angular/core';
import { HelperService } from '../helper.service';


@Component({
  selector: 'app-search-repo',
  templateUrl: './search-repo.component.html',
  styleUrls: ['./search-repo.component.css']
})
export class SearchRepoComponent implements OnInit {

  constructor(private service : HelperService) { }

  search : string;
  enablesearch : boolean;
  dis : boolean;
  data : any;
  ngOnInit() {
    this.enablesearch = true;
    this.dis = false;
  }

  getData(){
    this.service.getResults(this.search).subscribe((res)=>{
      console.log(res);
      this.data = res.items;
      this.dis = true
    },err=>{
      alert('Failed to get data');
    });
    
  }
  enableSearch(val){
    if(val){
      this.enablesearch = false
    }
    
  }

}
