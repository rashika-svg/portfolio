import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { ProjectsComponent } from './projects/projects.component';
import { ExperienceComponent } from './experience/experience.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { SkillsComponent } from './skills/skills.component';
import { SharedModule } from '../shared/shared.module';
import { LucideAngularModule } from 'lucide-angular';

@NgModule({
    declarations: [
        MainComponent,
        HomeComponent,
        NavbarComponent,
        ExperienceComponent,
        ProjectsComponent,
        ContactComponent,
        SkillsComponent,
    ],
    imports: [
        CommonModule,
        MainRoutingModule,
        SharedModule,
        LucideAngularModule
    ],
})
export class MainModule { }
