import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImperativeCounterService } from './services/imperative-counter.service';
import { RxCounterService } from './services/rx-counter.service';
import { SignalCounterService } from './services/signal-counter.service';
import { CommonModule } from '@angular/common';

type Approach = 'Imperative' | 'Declarative';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [CommonModule, RouterOutlet]
})
export class AppComponent {
  title = 'jslovers-conference';
  approach: Approach = 'Imperative';

  constructor(
    public imperativeCounterService: ImperativeCounterService,
    public rxQuizTimer: RxCounterService,
    public signalCounterService: SignalCounterService
  ) { }
}
