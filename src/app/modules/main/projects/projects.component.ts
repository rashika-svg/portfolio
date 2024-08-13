import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { IProject } from 'src/app/core/models/project.model';
import { Github } from 'lucide-angular';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {

  projectLinks: IProject[] = [];
  items$!: Observable<any[]>;
  github = Github
  hoveredIndex: number | null = null;
  images: any;
  currentImageIndex: number = 0;

  constructor(
    private _store: AngularFirestore
  ) { }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects() {
    this.items$ = this._store.collection('projects').valueChanges();
    this.items$.subscribe(items => {
      this.projectLinks = items;
    });
  }

  showContent(index: number) {
    this.hoveredIndex = index;
  }

  hideContent() {
    this.hoveredIndex = null;
  }

  previousImage() {
    if (this.hoveredIndex !== null) {
      this.currentImageIndex =
        (this.currentImageIndex > 0) ? this.currentImageIndex - 1 : this.projectLinks[this.hoveredIndex].image.length - 1;
    }
  }

  nextImage() {
    if (this.hoveredIndex !== null) {
      this.currentImageIndex =
        (this.currentImageIndex < this.projectLinks[this.hoveredIndex].image.length - 1) ? this.currentImageIndex + 1 : 0;
    }
  }

}

