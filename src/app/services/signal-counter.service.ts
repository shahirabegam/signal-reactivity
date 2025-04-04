import { computed, effect, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignalCounterService {
  private $totalSeconds = signal(0);
  private $elapsed = signal(0);
  private $isPaused = signal(false);

  remaining = computed(() => this.$totalSeconds() - this.$elapsed());
  isWarning = computed(() => this.remaining() <= 10 && this.remaining() > 0);
  isTimeUp = computed(() => this.remaining() <= 0);
  progress = computed(() => (this.$elapsed() / this.$totalSeconds()) * 100);

  constructor() {
    effect(() => {
      if(this.$isPaused() || this.isTimeUp()) return;

      const interval = setInterval(() => {
        this.$elapsed.update((elapsed) => elapsed + 1);
      }, 1000);

      return (() => clearInterval(interval));
    });
   }

   pause() {
    this.$isPaused.set(true); 
  }

  resume() {
    this.$isPaused.set(false);
  }
  
  reset() {
    this.$elapsed.set(0);
    this.$isPaused.set(false);
  }
}
