import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: false,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit {
  ngOnInit(): void {
    const elements = document.querySelectorAll('.rainbow-text') as NodeListOf<HTMLElement>;

    elements.forEach((el, i) => {
      if (el) {
        const colors = ['#ff1100', '#ffff00', '#1aff00', '#0000ff', '#d400ff']; // Colores del arcoíris
        const totalColors = colors.length;
        const offset = (i % totalColors) * (100 / totalColors); // Desplazamiento inicial según el índice
        const initialPosition = (offset + (i * 10)) % 100; // Ajusta el valor inicial

        el.style.backgroundPosition = `${initialPosition}% 50%`;
        el.style.backgroundPosition = `${initialPosition}% 50%`;

        el.addEventListener('mousemove', (event: MouseEvent) => {
          const rect = el.getBoundingClientRect();
          const x = event.clientX - rect.left; // Posición X relativa al elemento
          const width = rect.width;

          // Calcula la posición del gradiente para centrar el color correspondiente
          const percentage = offset - (x / width) * 100; // Ajusta la posición del color
          el.style.backgroundPosition = `${percentage}% 50%`;
        });
      }
    });
  }

}
