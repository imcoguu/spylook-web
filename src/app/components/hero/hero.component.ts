import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: false,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit {
  ngOnInit(): void {
    const rainbowText = document.getElementById('rainbow-text');

    if (rainbowText) {
      rainbowText.addEventListener('mousemove', (event: MouseEvent) => {
        const rect = rainbowText.getBoundingClientRect();
        const x = event.clientX - rect.left; // Posición X relativa al elemento
        const width = rect.width;

        // Calcula la posición del gradiente para centrar el color rojo
        const percentage = 10 - (x / width) * 100 // Ajusta para centrar el rojo
        rainbowText.style.backgroundPosition = `${percentage}% 50%`;
      });
    }
  }

}
