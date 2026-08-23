// src/app/components/footer/footer.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  socialLinks = [
    { platform: 'facebook', url: 'https://www.facebook.com/profile.php?id=100010900925765', icon: 'fa-facebook' },
    { platform: 'instagram', url: 'https://www.instagram.com/jadentoh_/', icon: 'fa-instagram' },
    { platform: 'linkedin', url: 'https://sg.linkedin.com/in/jaden-toh-a0b54821b', icon: 'fa-linkedin' },
    { platform: 'github', url: 'https://github.com/JadenTyh', icon: 'fa-github' }
  ];

  currentYear = new Date().getFullYear();
}