// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';
import { SkillsetsComponent } from './components/skillsets/skillsets.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector:  'app-root',
  standalone: true,
  imports:  [
    RouterOutlet, 
    NavigationComponent, 
    HomeComponent,
    SkillsetsComponent,
    ProjectsComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Jaden\'s Portfolio';
}