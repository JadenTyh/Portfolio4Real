// src/app/components/skillsets/skillsets.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Skill } from '../../models/skill';

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
}

@Component({
  selector: 'app-skillsets',
  standalone: true,
  imports:  [CommonModule],
  templateUrl: './skillsets.component.html',
  styleUrls: ['./skillsets.component.css']
})
export class SkillsetsComponent {
  skills: Skill[] = [
    {
      id: 1,
      title: 'AWS Certified Solutions Architect',
      description: 'Tested on my ability to design, implement, and manage secure, resilient, high-performing, and cost-optimized solutions on the AWS platform.',
      imageUrl: 'assets/images/AWS cert.png',
      certificationUrl: 'https://www.credly.com/users/jaden-toh.cf1456f0/badges#credly'
    },
    {
      id: 2,
      title: 'Scientific Computing with Python',
      description: 'After getting an \'A\' grade in H2 Computing, I have completed a 300 hour course on Scientific Computing.',
      imageUrl: 'assets/images/Scientific Computing Cert.png',
      certificationUrl: 'https://freecodecamp.org/certification/JadenTyh/scientific-computing-with-python-v7'
    },
    {
      id: 3,
      title: 'Data Analysis with Python',
      description: 'In this 300 hour Data Analysis course, I learned how to import libraries such as matplotlib and seaborn to analyze data.',
      imageUrl: 'assets/images/Data Analysis Cert.png',
      certificationUrl: 'https://freecodecamp.org/certification/JadenTyh/data-analysis-with-python-v7'
    },
    {
      id: 4,
      title: 'Responsive Web Design',
      description: 'Successfully completed a 300 hour web-design course that emphasises on effective responsiveness.',
      imageUrl: 'assets/images/Responsive Web Design Cert.png',
      certificationUrl: 'https://freecodecamp.org/certification/JadenTyh/responsive-web-design'
    },
    {
      id: 5,
      title: 'Fundamentals in Cybersecurity',
      description: 'Completed a comprehensive course on the fundamentals of cybersecurity, gaining knowledge in protecting systems and networks from digital attacks.',
      imageUrl: 'assets/images/Fortinet Cybersecurity fundamentals.png',
      certificationUrl: 'assets/images/Fundamentals_in_CyberSec.pdf'
    },
    {
      id: 6,
      title: 'Threat Landscape',
      description: 'Completed a course on the threat landscape, enhancing my understanding of current cybersecurity threats and how to mitigate them.',
      imageUrl: 'assets/images/Fortinet Threat Landscape.png',
      certificationUrl: 'assets/images/Threat Landscape cert.pdf'
    },
    {
      id: 7,
      title: 'Business Presentation',
      description: 'Attended a business presentation course to enhance my skills in effectively communicating ideas and strategies to diverse audiences.',
      imageUrl: 'assets/images/BizIQ.png',
      certificationUrl: 'https://biziqacademy.com/public-speaking-course/'
    }
  ];

  projects: Project[] = [
    {
      id: 1,
      title: 'Raining Cats and dogs',
      description: 'Webpage that gets a picture of a random dog or cat (from a cat and dog API) simply by clicking a button. This website is for users who need a little breather from work that will put a smile on their face.',
      imageUrl: 'assets/images/Cat and Dog.jpg',
      projectUrl: 'Raining Cats and Dogs/CatsorDogs.html'
    },
    {
      id: 2,
      title: 'Personal Website',
      description: 'A platform to offer my tennis coaching and sparring services. This website displays my credentials, shows potential students what I can offer and helps interested users to reach out to me.',
      imageUrl: 'assets/images/J_TENNIS.jpg',
      projectUrl: 'Coaching/Coaching.html'
    }
  ];
}