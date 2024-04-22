import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { GlowEffectDirective } from 'src/app/core/directives/glow-effect.directive';
import { ScrollHideDirective } from 'src/app/core/directives/appScrollHide';

export const SHARED_DIRECTIVE = [
  GlowEffectDirective,
  ScrollHideDirective
]

export const SHARED_COMPONENTS = [
  ProjectDetailsComponent,
  ...SHARED_DIRECTIVE
]


@NgModule({
  declarations: [
    ...SHARED_COMPONENTS,
  ],
  exports: [...SHARED_COMPONENTS,],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
