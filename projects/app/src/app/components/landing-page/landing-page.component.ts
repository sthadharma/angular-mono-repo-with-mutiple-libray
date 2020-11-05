import {OverlayContainer} from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  themeColor: 'primary' | 'accent' | 'warn' = 'primary'; // 👈 notice this
  isDark = false; // 👈 notice this
  constructor(private overlayContainer: OverlayContainer) {
  }

  ngOnInit(): void {
  }

  // 👇 notice below
  toggleTheme(): void {
    this.isDark = !this.isDark;
    if (this.isDark) {
      this.overlayContainer.getContainerElement().classList.add('dark-theme');
    } else {
      this.overlayContainer
        .getContainerElement()
        .classList.remove('dark-theme');
    }
  }
}
