import { Component, HostListener } from '@angular/core';
import { GanttChart, Home, Lightbulb, Phone, Sparkles } from 'lucide-angular';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  
  showScrollButton: boolean | undefined;
  home = Home;
  projects = GanttChart;
  experience = Sparkles;
  skills = Lightbulb;
  contact = Phone

  constructor() {

  }

  ngOnInit() {
    this.showScrollButton = false;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.scrollY > 300) {
      this.showScrollButton = true;
    } else {
      this.showScrollButton = false;
    }
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

}
