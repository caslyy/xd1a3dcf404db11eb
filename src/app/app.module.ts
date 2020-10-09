import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {Routes, RouterModule} from '@angular/router';
import {DropdownDirective} from './directive/dropdown.directive';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { IconButtonComponent } from './components/shared/icon-button/icon-button.component';
import { IconInfoTextComponent } from './components/shared/icon-info-text/icon-info-text.component';
import { IconButtonTextComponent } from './components/shared/icon-button-text/icon-button-text.component';
import { MainFooterComponent } from './components/main-footer/main-footer.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { GodComponent } from './components/shared/god/god.component';
import { ImageButtonTextComponent } from './components/shared/image-button-text/image-button-text.component';


const appRoutes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: 'main', component: MainPageComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    DropdownDirective,
    IconButtonComponent,
    IconInfoTextComponent,
    IconButtonTextComponent,
    MainFooterComponent,
    MainPageComponent,
    GodComponent,
    ImageButtonTextComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
