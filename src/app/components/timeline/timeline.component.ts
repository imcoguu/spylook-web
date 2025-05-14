import {Component, OnInit} from '@angular/core';
import {GitHubService} from '../../services/git-hub.service';

@Component({
  selector: 'app-timeline',
  standalone: false,
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css'
})
export class TimelineComponent implements OnInit {
  releases: { release: any, hidden: boolean }[] = []

  constructor(private gitHubService: GitHubService) {
  }

  ngOnInit(): void {
    this.gitHubService.getAllReleases().subscribe({
      next: (data) => {
        data.forEach(release => {
          this.releases.push({release, hidden: true});
        })
        this.releases.shift()
      },
      error: (error) => {
        console.error('Error al obtener los releases:', error);
      },
      complete: () => {
        console.log('La suscripción se completó.');
      },

    });
  }

}
