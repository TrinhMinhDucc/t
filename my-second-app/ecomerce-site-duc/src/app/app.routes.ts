import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "ids",
        children: [
            {
                path: "shop",
                loadComponent: () => import('./components/component-card/component-card.component').then((c) => c.ComponentCardComponent),
            },

        ]
    },
];
