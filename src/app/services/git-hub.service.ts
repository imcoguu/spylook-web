import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GitHubService {
  private readonly apiUrl = 'https://api.github.com';
  private readonly owner = 'cdominguezh06';
  private readonly repo = 'spylook';
  constructor(private http: HttpClient) {}

  getLatestRelease(): Observable<any> {
    const url = `${this.apiUrl}/repos/${(this.owner)}/${(this.repo)}/releases/latest`;
    return this.http.get(url);
  }

}
