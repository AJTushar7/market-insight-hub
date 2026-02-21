import { Injectable, signal, effect } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BellService {
  private openingBell = new Audio('/assets/sounds/opening-bell.mp3');
  private closingBell = new Audio('/assets/sounds/closing-bell.mp3');

  constructor() {
    this.setupSchedule();
  }

  private setupSchedule() {
    setInterval(() => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();

      // Opening Bell: 9:30:00 AM
      if (hours === 9 && minutes === 30 && seconds === 0) {
        this.playOpening();
      }

      // Closing Bell: 3:30:00 PM
      if (hours === 15 && minutes === 30 && seconds === 0) {
        this.playClosing();
      }
    }, 1000);
  }

  playOpening() {
    this.openingBell.play().catch(e => console.log('Audio play failed', e));
  }

  playClosing() {
    this.closingBell.play().catch(e => console.log('Audio play failed', e));
  }
}
