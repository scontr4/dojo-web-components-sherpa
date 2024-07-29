import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { FormComponent } from './components/form/form.component';
import { DireccionComponent } from './components/form/direccion/direccion/direccion.component';
import { InfoAdicionalComponent } from './components/form/info-adicional/info-adicional/info-adicional.component';
import { BloqueComponent } from './components/form/info-adicional/info-adicional/bloque/bloque/bloque.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    FormComponent,
    DireccionComponent,
    InfoAdicionalComponent,
    BloqueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
