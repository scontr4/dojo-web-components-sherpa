import { defineCustomElements } from '@npm-bbta/bbog-dig-dt-sherpa-lib/loader';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

defineCustomElements();
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
