import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  BehaviorSubject,
  combineLatest,
  map,
  Observable,
  Subscription,
  switchMap,
  tap
} from 'rxjs';
import { User, UserService } from '../user.service';


@Component({
  selector: 'app-rxjs-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rxjs-filter.component.html',
  styleUrl: './rxjs-filter.component.scss'
})
export class RxjsFilterComponent implements OnInit, OnDestroy {
  loading$ = new BehaviorSubject(true);
  search$ = new BehaviorSubject('');
  status$ = new BehaviorSubject<'all' | 'active' | 'inactive'>('all');

  filteredUsers$!: Observable<User[]>;
  totalCount$!: Observable<number>;
  subscriptions = new Subscription();

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.filteredUsers$ = combineLatest([this.search$, this.status$]).pipe(
      tap(() => {
        console.log('First tap');
        this.loading$.next(true);
      }),
      switchMap(([search, status]) => this.userService.loadUsers(search, status)),
      tap(() => this.loading$.next(false))
    );

    this.totalCount$ = this.filteredUsers$.pipe(
      map(users => users.length)
    );
  }

  onSearch(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.search$.next(input.value);
  }

  onStatus(event: Event): void {
    const select = event.target as HTMLSelectElement;
    this.status$.next(select.value as 'all' | 'active' | 'inactive');
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
