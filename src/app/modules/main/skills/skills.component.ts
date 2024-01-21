import { Component } from '@angular/core';
import { ISkill } from 'src/app/core/models/skills.model';
import { SkillsService } from 'src/app/core/service/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  skill: ISkill[] = [];

  constructor(
    private _skillService: SkillsService
  ) {}

  ngOnInit(): void {
    this.getSkills();
  }

  getSkills(_queryParams: any = {}) {
    this._skillService.getSkills({}).subscribe({
      next: (res: any) => {
        this.skill = res.reverse();
      }
    })
  }
}
