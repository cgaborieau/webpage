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

  constructor(
    private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get('/assets/applicationComponents.json')
    .subscribe(data => this.components = data);
  }



}
