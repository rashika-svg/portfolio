import { Component, OnInit } from '@angular/core';
import { IExperience } from 'src/app/core/models/experience.model';
import { ExperienceService } from 'src/app/core/service/experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  experience: IExperience[] = [];

  constructor(
    private _expService: ExperienceService
  ) {
  }

  ngOnInit(): void {
    this.getExperience();
  }

  getExperience(_queryParams: any = {}) {
    this._expService.getExperiences({}).subscribe({
      next: (res: any) => {
        this.experience = res;
      }
    })
  }
}
