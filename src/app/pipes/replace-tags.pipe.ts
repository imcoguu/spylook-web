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
      /\[!Warning\](.+?)(?=\[!|$)/gs,
      `<div class="note-block warning"><strong>⚠️ Aviso:</strong><br>$1</div>`
    );

    // Reemplaza [!Note] con un bloque estilizado y captura el contenido hasta el siguiente marcador o el final
    value = value.replace(
      /\[!Note\](.+?)(?=\[!|$)/gs,
      `<div class="note-block note"><strong>📌 Notas:</strong><br>$1</div>`
    );

    return value.replace(/-\s/g, '\n- ✓ ');


  }
}
