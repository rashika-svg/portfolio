import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { SharedService } from 'src/app/core/service/sharedService.service';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // isNavClicked$ = this.sharedService.isNavClicked;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _el: ElementRef,
    private router: Router,
    private sharedService: SharedService
  ) { }

  ngOnInit() {

    const typed = new Typed('#element', {
      strings: ['Frontend Developer.', 'Web Designer.'],
      typeSpeed: 100,
      loop: true,
      showCursor: true,
      cursorChar: '/>',
    });

    this._activatedRoute.fragment.subscribe(fragment => {
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

  onSectionInView(sectionId: string) {
    this.sharedService.changeData(sectionId);
    // if (!this.sharedService.isNavClicked) {
    //   console.log(this.sharedService.isNavClicked);
    //   const navigationExtras: NavigationExtras = {
    //     queryParamsHandling: 'merge',
    //     fragment: sectionId
    //   };
    //   this.router.navigate([], navigationExtras);
    //   this.sharedService.changeData(sectionId);
    // }
  }
}
