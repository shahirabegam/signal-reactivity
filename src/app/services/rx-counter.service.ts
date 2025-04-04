import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, map, switchMap, interval, tap, takeUntil } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RxCounterService {
  private totalSeconds = 0;
  private elapsed$ = new BehaviorSubject<number>(0);
  private paused$ = new BehaviorSubject<boolean>(false);
  private destroyed$ = new Subject<void>();

  remaining$ = this.elapsed$.pipe(
    map((elapsed) => this.totalSeconds - elapsed)
  );
  isWarning$ = this.remaining$.pipe(
    map((remaining) => remaining <= 10 && remaining > 0)
  );
  isTimeUp$ = this.remaining$.pipe(
    map((remaining) => remaining <= 0)
  );
  progress$ = this.elapsed$.pipe(
    map((elapsed) => (elapsed / this.totalSeconds) * 100)
  );

  constructor() { 
    this.paused$.pipe(
      switchMap((paused) => paused ? [] : interval(1000)),
      tap(() => this.elapsed$.next(this.elapsed$.value + 1)),
      takeUntil(this.destroyed$)
    ).subscribe();
  }

  pause() {
    this.paused$.next(true);
  }
  resume() {
    this.paused$.next(false);
  }
  reset() {
    this.elapsed$.next(0);
    this.paused$.next(false);
  }

  destroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
