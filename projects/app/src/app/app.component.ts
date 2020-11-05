import {Component, OnInit} from '@angular/core';
import {TestService} from 'projects/tools/src/lib/test.service';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  themeColor: 'primary' | 'accent' | 'warn' = 'primary'; // 👈 notice this
  isDark = false; // 👈 notice this
  constructor(private overlayContainer: OverlayContainer) {}

  ngOnInit(): void {}

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
