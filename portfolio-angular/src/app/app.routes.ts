// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SkillsetsComponent } from './components/skillsets/skillsets.component';
import { ProjectsComponent } from './components/projects/projects.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch:  'full' },
  { path: 'home', component:  HomeComponent },
  { path:  'skills', component: SkillsetsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: '**', redirectTo: '/home' }
];