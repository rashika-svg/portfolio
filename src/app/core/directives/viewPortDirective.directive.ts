import { Directive, ElementRef, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';

@Directive({
    selector: '[appInViewport]'
})
export class InViewportDirective implements OnInit, OnDestroy {
    @Output() inViewport = new EventEmitter<string>();
    private observer: IntersectionObserver | undefined;

    constructor(private el: ElementRef) { }

    ngOnInit() {
        this.observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                this.inViewport.emit(this.el.nativeElement.id);
            }
        }, {
            threshold: 0.5 // Adjust this value based on when you want to trigger the event
        });
        this.observer.observe(this.el.nativeElement);
    }

    ngOnDestroy() {
        this.observer?.unobserve(this.el.nativeElement);
    }
}
