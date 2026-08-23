// src/app/components/projects/projects.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../models/project';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl:  './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      id: 1,
      title: 'Raining Cats and dogs',
      description: 'Webpage that gets a picture of a random dog or cat from an API simply by clicking a button.  For users who need a breather from work.',
      imageUrl: 'assets/images/Cat and Dog.jpg',
      projectUrl: 'Raining Cats and Dogs/CatsorDogs.html',
      imageClass: 'CatsorDogs'
    },
    {
      id: 2,
      title: 'Personal Website',
      description: 'A platform to offer my tennis coaching and sparring services.  Displays credentials and helps interested users reach out.',
      imageUrl: 'assets/images/J_TENNIS.jpg',
      projectUrl: 'Coaching/Coaching.html',
      imageClass: 'TennisCoaching'
    }
  ];
}