import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CvComponent} from './cv/cv/cv.component';
import {TodoComponent} from './todo/todo.component';
import {ColorComponent} from './color/color.component';
import {DetailComponent} from './cv/detail/detail.component';
import {FrontComponent} from './front/front.component';
import {BackComponent} from './back/back.component';
import {FirstComponent} from './first/first.component';
import {NFoundComponent} from './nfound/nfound.component';
import {LoginComponent} from './login/login.component';


const routes: Routes = [
  {path: '', component: FrontComponent,
    children: [
      {path: '', redirectTo: 'cv', pathMatch: 'full'},
      {path: 'cv', component: CvComponent},
      {path: 'cv/add', component: FirstComponent},
      {path: 'cv/:id', component: DetailComponent},
      {path: 'todo', component: TodoComponent},
    ]
  },
  {path: 'admin', component: BackComponent,
    children: [
      {path: 'color', component: ColorComponent}
    ]
  },
  {path: 'login', component: LoginComponent},
  {path: '**', component: NFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
