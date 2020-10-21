import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {Routes, RouterModule} from '@angular/router';
import {DropdownDirective} from './directive/dropdown.directive';
import {EnoughGoldDirective} from './directive/enoughGold.directive';
import {MainHeaderComponent} from './components/main-header/main-header.component';
import {IconButtonComponent} from './components/shared/icon-button/icon-button.component';
import {IconInfoTextComponent} from './components/shared/icon-info-text/icon-info-text.component';
import {IconButtonTextComponent} from './components/shared/icon-button-text/icon-button-text.component';
import {MainFooterComponent} from './components/main-footer/main-footer.component';
import {MainPageComponent} from './components/main-page/main-page.component';
import {GodComponent} from './components/shared/god/god.component';
import {ImageButtonTextComponent} from './components/shared/image-button-text/image-button-text.component';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import { DungeonPageComponent } from './components/dungeon-page/dungeon-page.component';
import { DungeonSliderComponent } from './components/shared/dungeon-slider/dungeon-slider.component';
import { DungeonCardComponent } from './components/shared/dungeon-card/dungeon-card.component';


const appRoutes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: 'main', component: MainPageComponent},
  {path: 'dungeons', component: DungeonPageComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    DropdownDirective,
    EnoughGoldDirective,
    IconButtonComponent,
    IconInfoTextComponent,
    IconButtonTextComponent,
    MainFooterComponent,
    MainPageComponent,
    GodComponent,
    ImageButtonTextComponent,
    DungeonPageComponent,
    DungeonSliderComponent,
    DungeonCardComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      includeTitleDuplicates: true,
      toastClass: 'god-toastr',
      iconClasses: {
        error: '',
        info: '',
        success: '',
        warning: '',
      }
    }),
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
