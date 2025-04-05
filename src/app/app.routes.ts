import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RxjsFilterComponent } from './pages/rxjs-filter/rxjs-filter.component';
import { SignalsFilterComponent } from './pages/signals-filter/signals-filter.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: 'rxjs_filter',
                component: RxjsFilterComponent,
            },
            {
                path: 'singnal_filter',
                component: SignalsFilterComponent,
            },
        ]
    },
];
