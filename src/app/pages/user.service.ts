import { Injectable } from '@angular/core';
import { delay, map, of } from 'rxjs';

export type User = {
  name: string;
  status: 'active' | 'inactive';
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public loadUsers(search: string, status: string) {
    const allUsers: User[] = [
      { name: 'Alice', status: 'active' },
      { name: 'Bob', status: 'inactive' },
      { name: 'Charlie', status: 'active' },
      { name: 'David', status: 'inactive' }
    ];

    return of(allUsers).pipe(
      delay(1000), // Simulate backend delay
      map(users =>
        users.filter(user =>
          user.name.toLowerCase().includes(search.toLowerCase()) &&
          (status === 'all' || user.status === status)
        )
      )
    );
  }
}
