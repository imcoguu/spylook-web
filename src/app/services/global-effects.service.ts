import {Injectable, Renderer2, RendererFactory2} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalEffectsService {
  private renderer: Renderer2;

  // Colores del gradiente
  private coloresGradient = [
    '#ff1100, #ffff00',
    '#ffff00, #1aff00',
    '#1aff00, #00c3ff',
    '#00c3ff, #d400ff',
    '#d400ff, #ff1100',
  ];
  private coloresRainbow = ['#ff1100', '#ffff00', '#1aff00', '#00f8ff', '#d400ff', '#ff1100'];

  constructor(private rendererFactory: RendererFactory2) {
    // Crea una instancia de Renderer2
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  // Método para activar el efecto de gradiente en todos los '.gradient-border'
  applyGlobalEffects(): void {
    this.observeDOMChanges();
  }

  private observeDOMChanges(): void {
    const observer = new MutationObserver(() => {
      this.applyGradientEffect();
      this.applyRainbowEffect();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Inicialmente aplicamos los efectos a los elementos ya existentes
    this.applyGradientEffect();
    this.applyRainbowEffect();
  }

  private applyGradientEffect(): void {
    const elements = document.querySelectorAll('.gradient-border') as NodeListOf<HTMLElement>;

    elements.forEach((element, index) => {
      if (!element.dataset['globalEffectGradientApplied']) {
        this.setInitialGradient(element, index);
        this.addGradientMouseMoveListener(element, index);

        element.dataset['globalEffectGradientApplied'] = 'true';
      }
    });
  }

  private setInitialGradient(element: HTMLElement, index: number): void {
    const color = this.getGradientColor(index);
    element.style.setProperty(
      'background-image',
      `linear-gradient(black, black), linear-gradient(100deg, ${color})`
    );
  }

  private addGradientMouseMoveListener(element: HTMLElement, index: number): void {
    const color = this.getGradientColor(index);

    this.renderer.listen(element, 'mousemove', (event: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const width = rect.width;

      const percentage = 100 - (x / width) / 1000;
      element.style.setProperty(
        'background-image',
        `linear-gradient(black,black), linear-gradient(${(rect.left*2 * percentage)-2*(rect.left*2 * percentage)}turn, ${color})`
      );
    });
  }

  private applyRainbowEffect(): void {
    const elements = document.querySelectorAll('.rainbow-text') as NodeListOf<HTMLElement>;

    elements.forEach((element, index) => {
      if (!element.dataset['globalEffectRainbowApplied']) {
        this.setInitialRainbow(element, index);
        this.addRainbowMouseMoveListener(element, index);

        element.dataset['globalEffectRainbowApplied'] = 'true';
      }
    });
  }

  private setInitialRainbow(element: HTMLElement, index: number): void {
    const totalColors = this.coloresRainbow.length;
    const offset = (index % totalColors) * (100 / totalColors);
    const initialPosition = (offset + index * 10) % 100;

    element.style.backgroundPosition = `${initialPosition}% 50%`;
    element.style.background = `linear-gradient(to right, ${this.coloresRainbow.join(', ')})`;
    element.style.backgroundSize = '200% 200%';
    element.style.webkitBackgroundClip = 'text';
    this.renderer.setStyle(element, 'webkitTextFillColor', 'transparent');
  }

  private addRainbowMouseMoveListener(element: HTMLElement, index: number): void {
    const totalColors = this.coloresRainbow.length;
    const offset = (index % totalColors) * (100 / totalColors);

    this.renderer.listen(element, 'mousemove', (event: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const width = rect.width;

      const percentage = offset - (x / width) * 100;
      element.style.backgroundPosition = `${percentage}% 50%`;
    });
  }

  private getGradientColor(index: number): string {
    return this.coloresGradient[index % this.coloresGradient.length];
  }
}

