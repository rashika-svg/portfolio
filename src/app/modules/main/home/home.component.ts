import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private _route: ActivatedRoute,
    private _el: ElementRef
  ) { }

  ngOnInit() {
    const typed = new Typed('#element', {
      strings: ['Frontend Developer.', 'Web Designer.'],
      typeSpeed: 100,
       loop: true,
      showCursor: true,
      cursorChar: '/>',
    });

    this._route.fragment.subscribe(fragment => {
      if (fragment) {
        this.scrollToSection(fragment);
      }
    });
  }

  private scrollToSection(fragment: string): void {
    const element = this._el.nativeElement.querySelector(`#${fragment}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
