import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'orbits';


  selectionMode = false;
  selectionType = '';

  activeSide = false;

  subjectFilter = [
    {name: 'Action', code: 'ACT'},
    {name: 'Drama', code: 'DRA'},
    {name: 'Comedy', code: 'COM'},
  ];

  videos = [
    {id: '01', name: 'Clasification of items', duration: '01:48m', subject: 'Action', thumbnail: 'video01.png'},
    {id: '02', name: 'Employe maintenance', duration: '02:48m', subject: 'Action', thumbnail: 'video02.png'},
    {id: '03', name: 'Vendor and location', duration: '01:20', subject: 'Action', thumbnail: 'video01.png'},
    {id: '04', name: 'Clasification of items', duration: '01:48m', subject: 'Action', thumbnail: 'video01.png'},
    {id: '14', name: 'Clasification of items', duration: '03:01', subject: 'Action', thumbnail: 'video02.png'},
    {id: '19', name: 'Clasification of items', duration: '01:48m', subject: 'Drama', thumbnail: 'video01.png'},
    {id: '20', name: 'Clasification of items', duration: '01:48m', subject: 'Action', thumbnail: 'video01.png'},
    {id: '21', name: 'Clasification of items', duration: '01:48m', subject: 'Drama', thumbnail: 'video03.png'},
    {id: '22', name: 'Clasification of items', duration: '01:48m', subject: 'Action', thumbnail: 'video02.png'},
    {id: '23', name: 'Clasification of items', duration: '01:48m', subject: 'Drama', thumbnail: 'video03.png'},
    {id: '24', name: 'Clasification of items', duration: '01:48m', subject: 'Action', thumbnail: 'video02.png'},
    {id: '33', name: 'Clasification of items', duration: '01:48m', subject: 'Comedy', thumbnail: 'video03.png'},
    {id: '35', name: 'Clasification of items', duration: '01:48m', subject: 'Comedy', thumbnail: 'video01.png'},
    {id: '39', name: 'Clasification of items', duration: '01:48m', subject: 'Comedy', thumbnail: 'video03.png'},
    {id: '40', name: 'Clasification of items', duration: '01:48m', subject: 'Action', thumbnail: 'video01.png'},
  ];

  filteredVideos: any[] = [];

  selectedVideos: any [] = [];

  private _selectedFilter: any = null;

  set selectedFilter(filt: any) {
    this._selectedFilter = filt;
    this.filterVideos();
  }
  get selectedFilter(): any {
    return this._selectedFilter;
  }

  ngOnInit() {
    this.filterVideos();
  }

  private filterVideos() {
    if (this._selectedFilter && this._selectedFilter.name) {
      this.filteredVideos = this.videos.filter(vid => vid.subject === this._selectedFilter.name);
      return ;
    }
    this.filteredVideos = this.videos.map(vid => vid);
  }

  isSelected(video): boolean {
    if (!video) { return false; }
    return  !!this.selectedVideos.find( vid => vid.id === video.id);
  }

  selectVideo(video) {
    if (!video || !this.selectionMode) { return ; }
    if (this.isSelected(video)) {
      this.selectedVideos = this.selectedVideos.filter(vid => vid.id !== video.id);
    } else {
      this.selectedVideos.push(video);
    }
  }

  selectAll() {
    if (this.allSelected()) { this.selectedVideos = []; return ;  }
    this.selectedVideos = this.videos.map(vid => vid);
  }
  allSelected(): boolean {
    return this.selectedVideos.length === this.videos.length;
  }

  private reset() {
    this.selectedVideos = [];
    this.selectionMode = false;
    this.selectionType = '';
  }

  startSelection( mode: string ) {
    if (this.selectionMode) {
      this.reset();
    } else {
      this.selectionMode = true;
      this.selectionType = mode;
    }
  }

}
