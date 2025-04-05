import { CommonModule } from '@angular/common';
import { Component, OnInit, Signal, computed, effect, signal } from '@angular/core';
import { delay, map, of } from 'rxjs';
import { UserService } from '../user.service';

interface User {
  name: string;
  status: 'active' | 'inactive';
}

@Component({
  selector: 'app-signals-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signals-filter.component.html',
  styleUrl: './signals-filter.component.scss',
})
export class SignalsFilterComponent implements OnInit {
  users = signal<User[]>([]);
  loading = signal(true);
  search = signal('');
  status = signal<'all' | 'active' | 'inactive'>('all');

  totalCount: Signal<number> = computed(() => this.users().length);

  constructor(private userService: UserService) {
    effect(() => {
      this.fetchUsers(this.search(), this.status());
    });
  }

  ngOnInit(): void {
    this.search.set('');
    this.status.set('all');
  }

  fetchUsers(search: string, status: string): void {
    this.loading.set(true);

    this.userService.loadUsers(search, status).subscribe(data => {
      this.users.set(data);
      this.loading.set(false);
    });
  }

  onSearch(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.search.set(value);
  }

  onStatus(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    this.status.set(value as 'all' | 'active' | 'inactive');
  }
}
