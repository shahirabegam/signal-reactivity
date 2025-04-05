import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { RxjsFilterComponent } from "../rxjs-filter/rxjs-filter.component";
import { SignalsFilterComponent } from "../signals-filter/signals-filter.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [RouterModule, RxjsFilterComponent, SignalsFilterComponent]
})
export class HomeComponent {
  isVisible = signal(false);

  toggle() {
    this.isVisible.update((prev) => !prev);
  }
}
