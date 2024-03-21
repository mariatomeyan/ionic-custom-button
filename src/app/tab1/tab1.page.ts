import { Component } from '@angular/core';
import { download } from "ionicons/icons";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  data: any;
  isLoading = false; // Tracks loading state for the button

  constructor(private http: HttpClient) {}

  protected readonly download = download;

  downloadData(): void {
    this.isLoading = true;
    this.http.get('https://api.weglowapp.net/v1/version').subscribe({
      next: (response) => {
        this.data = response;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('There was an error!', error);
        this.isLoading = false;
      }
    });
  }
}
