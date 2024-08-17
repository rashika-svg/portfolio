import { ViewportScroller } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, EventEmitter, HostListener, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Download, GanttChart, Home, Lightbulb, Phone, Scroll, Sparkles } from 'lucide-angular';
import { DownloadService } from 'src/app/core/service/download.service';
import { SharedService } from 'src/app/core/service/sharedService.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  home = Home;
  projects = GanttChart;
  experience = Sparkles;
  skills = Lightbulb;
  contact = Phone
  download = Download

  navList: any = [
    {
      route: 'Home',
      fragment: '',
      iconName: this.home,
    },
    {
      route: 'Projects',
      fragment: 'projects',
      iconName: this.projects,
    },
    {
      route: 'Experience',
      fragment: 'experience',
      iconName: this.experience,
    },
    {
      route: 'Skills',
      fragment: 'skills',
      iconName: this.skills,
    },
    {
      route: 'Contact',
      fragment: 'contact',
      iconName: this.contact,
    },
  ]

  currentData$ = this.sharedService.currentData;

  constructor(
    private _resumeService: DownloadService,
    private sharedService: SharedService,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  scrollToSection(section: any) {
    this._router.navigate([], {
      fragment: section,
      replaceUrl: true
    });
    console.log(section)
    if (section === '') {
      this.scrollToTop();
    }
  }

  downloadResume(): void {
    this._resumeService.downloadResume().subscribe((data) => {
      const blob = new Blob([data], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      window.open(url);
    });
  }


}
