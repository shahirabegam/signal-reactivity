import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImperativeCounterService {
  count = { value: 0 };
  doubleCount = { value: 0 };

  get isEven() {
    return this.count.value % 2 === 0;
  }

  increment() {
    this.count.value++;
    this.doubleCount.value = this.count.value * 2;
  }

  decrement() {
    this.count.value--;
    this.doubleCount.value = this.count.value * 2;
  }
}
