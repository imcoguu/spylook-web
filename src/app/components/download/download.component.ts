import {Component, OnInit} from '@angular/core';
import {GitHubService} from '../../services/git-hub.service';

@Component({
  selector: 'app-download',
  standalone: false,
  templateUrl: './download.component.html',
  styleUrl: './download.component.css'
})
export class DownloadComponent implements OnInit{

  protected releaseVersion: string = "";
  protected releaseNotes: string = "";
  protected downloadUrl: string = "";
  constructor(private gitHubService: GitHubService) {
  }

  ngOnInit(): void {
    this.gitHubService.getLatestRelease().subscribe(data => {
      this.releaseVersion = data.name;
      this.releaseNotes = data.body;
      this.downloadUrl = data.assets[0].browser_download_url;
    });
    }
}
