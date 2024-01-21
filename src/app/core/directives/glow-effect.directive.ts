import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appGlowEffect]'
})
export class GlowEffectDirective {

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {
  }


  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const rect = this.el.nativeElement.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    this.renderer.setStyle(this.el.nativeElement, '--x', `${x}px`);
    this.renderer.setStyle(this.el.nativeElement, '--y', `${y}px`);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'box-shadow', '0 0 15px rgba(255, 255, 255, 0.5)');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeStyle(this.el.nativeElement, 'box-shadow');
  }

}
