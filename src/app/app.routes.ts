import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { OpenCdtComponent } from './components/open-cdt/open-cdt.component';
import { CustomCdtComponent } from './components/custom-cdt/custom-cdt.component';
import { SuccessOpenCdtComponent } from './components/success-open-cdt/success-open-cdt.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'open-cdt', component: OpenCdtComponent },
      { path: 'custom-cdt', component: CustomCdtComponent },
      { path: 'success-open-cdt', component: SuccessOpenCdtComponent },
    ],
  },
];
