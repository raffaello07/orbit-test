import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'orbits';

  activeSide = false;

  subjectFilter = [
    {name: 'Action', code: 'ACT'},
    {name: 'Drama', code: 'DRA'},
    {name: 'Comedy', code: 'COM'},
];

selectedFilter: any = null;

}
