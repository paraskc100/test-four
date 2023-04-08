import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { NewsformComponent } from './components/news/form/newsform/newsform.component';

const routes: Routes = [
{path:'',component:HomeComponent},
{path:'home',component: HomeComponent},
{path:'news',component:NewsComponent},
{path: 'contact',component:ContactComponent},
{path:'about',component:AboutComponent},
{path:'newsform',component: NewsformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
