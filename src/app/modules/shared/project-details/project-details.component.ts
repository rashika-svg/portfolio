import { Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent {
  
  // @Input() data: any;
  // @Input() height: string = '300px';
  // @Input() width: string = '400px';

  // @ViewChild('dialog', { static: true }) dialog?: ElementRef;

  // constructor(private renderer: Renderer2) { }

  // open() {
  //   this.renderer.setStyle(this.dialog?.nativeElement, 'display', 'block');
  // }

  // close() {
  //   this.renderer.setStyle(this.dialog?.nativeElement, 'display', 'none');
  // }

  @Input() isOpen: boolean = false;
  @Output() isOpenChange = new EventEmitter<boolean>();

  close(): void {
    this.isOpen = false;
    this.isOpenChange.emit(this.isOpen);
  }

  stopPropagation(event: Event): void {
    event.stopPropagation();
  }
}
