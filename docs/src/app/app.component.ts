import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'appComponents';
  components: any;
  componentsItem: any;

  constructor(
    private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get('/assets/applicationComponents.json')
      .subscribe(data => {
        this.components = data;
        //this.componentsItem = this.filterComponentItems();
      });
    this.http.get('/assets/applicationsItems.json')
      .subscribe(data => {
        this.componentsItem = data;
      });
  }

  // filterComponentItems(): any {
  //   var allItems = [];
  //   this.components.forEach(element => {
  //     Object.keys(element).forEach(elem => {
  //       if (allItems.indexOf(elem) < 0) {
  //         allItems.push(elem);
  //       }
  //     });
  //   });
  //   return allItems;
  // }



}
