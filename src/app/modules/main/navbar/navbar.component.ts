import { Component, HostListener } from '@angular/core';
import { Download, GanttChart, Home, Lightbulb, Phone, Sparkles } from 'lucide-angular';
import { DownloadService } from 'src/app/core/service/download.service';

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
  download = Download

  constructor(
    private _resumeService: DownloadService
  ) { }

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

  downloadResume(): void {
    this._resumeService.downloadResume().subscribe((data) => {
      const blob = new Blob([data], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      window.open(url);
    });
  }

}
