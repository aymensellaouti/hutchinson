import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { ColorComponent } from './color/color.component';
import { TwoWayComponent } from './two-way/two-way.component';
import {FormsModule} from '@angular/forms';
import { FilsComponent } from './fils/fils.component';
import { PereComponent } from './pere/pere.component';
import { CvComponent } from './cv/cv/cv.component';
import { ListComponent } from './cv/list/list.component';
import { ItemComponent } from './cv/item/item.component';
import { CardComponent } from './cv/card/card.component';
import { NgstyleComponent } from './directives/ngstyle/ngstyle.component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { NgclassComponent } from './directives/ngclass/ngclass.component';
import { HighlightDirective } from './directives/highlight.directive';
import { RainbowDirective } from './directives/rainbow.directive';
import { DefaultImagePipe } from './pipes/default-image.pipe';
import {LoggerService} from './services/logger.service';
import { TodoComponent } from './todo/todo.component';
import { HeaderComponent } from './header/header.component';
import { DetailComponent } from './cv/detail/detail.component';
import { FrontComponent } from './front/front.component';
import { BackComponent } from './back/back.component';
import { NFoundComponent } from './nfound/nfound.component';
import { LoginComponent } from './login/login.component';
import { ObservableComponent } from './observables/observable/observable.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ColorComponent,
    TwoWayComponent,
    FilsComponent,
    PereComponent,
    CvComponent,
    ListComponent,
    ItemComponent,
    CardComponent,
    NgstyleComponent,
    MiniWordComponent,
    NgclassComponent,
    HighlightDirective,
    RainbowDirective,
    DefaultImagePipe,
    TodoComponent,
    HeaderComponent,
    DetailComponent,
    FrontComponent,
    BackComponent,
    NFoundComponent,
    LoginComponent,
    ObservableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
