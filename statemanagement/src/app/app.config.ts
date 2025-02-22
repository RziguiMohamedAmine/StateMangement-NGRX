import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { StudentReducer } from './state/students.reducer';
import { provideEffects } from '@ngrx/effects';
import { StudentsRecordsEffects } from './state/students-records.effects';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    provideHttpClient(withFetch()),
    provideClientHydration(),
    provideEffects([StudentsRecordsEffects]),
    provideStore(),
    provideState({
        name: 'Students',
        reducer: StudentReducer
    }),
    provideStoreDevtools({ maxAge: 25, logOnly: false }), provideEffects()] //initiate the dev tools (for debugging)
 //initiate the dev tools (for debugging)
};
