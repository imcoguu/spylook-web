import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-features',
  standalone: false,
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent implements OnInit {
  ngOnInit(): void {
    const elements = document.querySelectorAll('.gradient-border') as NodeListOf<HTMLElement>;
    const colores =[
       'red, yellow',
       'yellow, green',
       'green, blue',
       'blue, purple',
       'purple, red',
       'red, yellow',
      ]
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      // Establece el color inicial del borde
      (element as HTMLElement).style.setProperty('background-image', `linear-gradient(black,black), linear-gradient(100deg, ${colores[i]})`);
      element.addEventListener('mousemove', (event: MouseEvent) => {
        const rect = element.getBoundingClientRect();
        const x = event.clientX - rect.left; // Posición X relativa al elemento
        const width = rect.width;

        // Calcula la posición del gradiente para que el rojo siga al ratón
        const percentage = 100 - (x / width) * 100; // Invertir la posición del rojo basada en el ratón // Posición del rojo basada en el ratón
        (element as HTMLElement).style.setProperty('background-image', `linear-gradient(black,black), linear-gradient(${percentage}deg, ${colores[i]})`);
        console.log(percentage);
      });
    }
  }
}
