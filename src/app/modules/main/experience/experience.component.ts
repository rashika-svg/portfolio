import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { IExperience } from 'src/app/core/models/experience.model';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  experience: IExperience[] = [];
  items$!: Observable<any[]>;

  constructor(
    private _store: AngularFirestore
  ) {}

  ngOnInit(): void {
    this.getExperience();
  }
  
  getExperience() {
  this.items$ = this._store.collection('experience').valueChanges();
  this.items$.subscribe(items => {
    this.experience = items;
    });
  }
}
