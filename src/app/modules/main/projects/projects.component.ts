import { Component, OnInit } from '@angular/core';
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
}

