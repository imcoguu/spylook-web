import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'replaceTags',
  standalone: false
})
export class ReplaceTagsPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      return value;
    }

    // Reemplaza [!Warning] con un bloque estilizado
    value = value.replace(
      /\[!Warning\]/g,
      `<div class="note-block warning"><strong>⚠️ Warning:</strong></div>`
    );

    // Reemplaza [!Note] con un bloque estilizado
    value = value.replace(
      /\[!Note\]/g,
      `<div class="note-block note"><strong>📌 Note:</strong></div>`
    );
    // Detecta texto con ": -" para procesar como lista (caso concreto)
    value = value.replace(
      /(:)\s*(-\s.+)/g, // Busca ": -" seguido de texto
      (_, prefix, listItems) => {
        // Separa los elementos de la lista (divididos por "-")
        const items = listItems
          .split('-') // Divide por guiones
          .filter((item: string) => item.trim() !== '') // Filtra entradas vacías
          .map((item: string) => `<li>${item.trim()}</li>`) // Convierte en <li>...</li>
          .join(''); // Une todos los elementos en una cadena
        return `${prefix}<br><ul class="styled-list">${items}</ul>`; // Devuelve la lista formateada
      }
    );

    return value;

  }
}
