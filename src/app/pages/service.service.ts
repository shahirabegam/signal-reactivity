import { Injectable } from '@angular/core';
import { delay, map, of } from 'rxjs';

export type User = {
  name: string;
  status: 'active' | 'inactive';
}

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

}
