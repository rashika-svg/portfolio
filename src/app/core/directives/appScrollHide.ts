// scroll-hide.directive.ts
import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollHide]'
})
export class ScrollHideDirective {
  private lastScrollPosition = 0;

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScrollPosition = window.pageYOffset;
    if (currentScrollPosition > this.lastScrollPosition) {
      this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateY(-100%)');
      this.renderer.setStyle(this.el.nativeElement, 'transition', 'transform 0.5s ease-out');
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateY(0)');
      this.renderer.setStyle(this.el.nativeElement, 'transition', 'transform 0.5s ease-out');
    }
    this.lastScrollPosition = currentScrollPosition;
  }
}
