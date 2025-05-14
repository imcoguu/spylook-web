import {Component, OnInit} from '@angular/core';
import {GlobalEffectsService} from './services/global-effects.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'spylook-web';


  constructor(private globalEffectsService: GlobalEffectsService
  ) {
  }

  ngOnInit(): void {
    this.globalEffectsService.applyGlobalEffects();
  }
}
