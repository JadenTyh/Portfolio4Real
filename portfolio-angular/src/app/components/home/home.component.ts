// src/app/components/home/home.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  greeting = 'Greetings';
  welcomeMessage = "Welcome to Jaden's Portfolio : )";
  resumeLink = 'resume/resume-view.html';
  featureImage = 'assets/images/Computer.jpg';
}