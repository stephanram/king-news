import { Component, OnInit } from '@angular/core';
import { NewsServiceService } from '../../service/news-service/news-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public headLines: Array<any>;
  constructor(private newsService: NewsServiceService) {
  }

  ngOnInit() {
    this.getheadLineService();
  }

  public getheadLineService(): void {
    const countryCode = 'us';
    this.newsService.getHeadlines(countryCode).subscribe((data) => {
        this.headLines = data;
    });
  }
}
