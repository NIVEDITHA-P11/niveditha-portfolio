import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Skills } from './components/skills/skills';
import { Projects } from './components/projects/projects';
import { Experience } from './components/experience/experience';
import { Contact } from './components/contact/contact';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    Home,
    About,
    Skills,
    Projects,
    Experience,
    Contact
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {}
