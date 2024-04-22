import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { ISkill } from 'src/app/core/models/skills.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  skill: ISkill[] = [];
  items$!: Observable<any[]>;

  constructor(
    private _store: AngularFirestore
  ) {}

  ngOnInit(): void {
    this.getSkills();
  }
  
  getSkills() {
  this.items$ = this._store.collection('skills').valueChanges();
  this.items$.subscribe(items => {
    this.skill = items;
    });
  }
}
