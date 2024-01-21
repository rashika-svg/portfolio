import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/core/service/projects.service';
import { IProject } from 'src/app/core/models/project.model';
import { Github } from 'lucide-angular';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {

  projectLinks: IProject[] = [];
  github = Github

  constructor(
    private _projectService: ProjectsService,
  ) {
  }

  ngOnInit(): void {
    this.getProjects();
    // this.getProjectById();
  }

  getProjects(queryParams: any = {}) {
    this._projectService.getProjects({}).subscribe({
      next: (res: any) => {
        this.projectLinks = res;
      }
    })
  }

  getProjectById(id: string) {
    this._projectService.getProjectById(id).subscribe({
      next: (res: any) => {
        console.log(res);
      }
    })
  }
}

