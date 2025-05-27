import {Component} from '@angular/core';

@Component({
  selector: 'app-features',
  standalone: false,
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {

  protected selected: string = "assets/phone/phone_newcontact.webp"
}
