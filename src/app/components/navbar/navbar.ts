import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule], // ✅ ONLY NgModules / standalone comps here
  templateUrl: './navbar.html',
})
export class NavbarComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  scrollTo(sectionId: string) {
    const el = document.getElementById(sectionId);
    if (el) {
      const yOffset = -80;
      const y =
        el.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    this.closeMenu();
  }

  toggleDarkMode() {
    document.documentElement.classList.toggle('dark');
  }
}
