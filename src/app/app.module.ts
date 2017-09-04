import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DataService } from './services/data.service';
import { HttpModule } from '@angular/http';
import { enableProdMode } from '@angular/core';


import { AppComponent } from './app.component';
import { Element1Component } from './components/element1/element1.component';
import { Element2Component } from './components/element2/element2.component';
import { Element3Component } from './components/element3/element3.component';
import { Element4Component } from './components/element4/element4.component';
import { AsideLeftComponent } from './components/aside-left/aside-left.component';
import { AsideRightComponent } from './components/aside-right/aside-right.component';
import { FirstComponent } from './components/aside-left/first/first.component';
import { SecondComponent } from './components/aside-left/second/second.component';
import { ThirdComponent } from './components/aside-left/third/third.component';
import { FourthComponent } from './components/aside-left/fourth/fourth.component';
import { FormComponent } from './components/form/form.component';
import { ArticleComponent } from './components/article/article.component';
import { CoffeComponent } from './components/aside-left/fourth/coffe/coffe.component';
import { TeaComponent } from './components/aside-left/fourth/tea/tea.component';
import { HomeComponent } from './components/home/home.component';
import { FilterPipe } from './filter.pipe';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'element1', component: Element1Component},
  {path: 'element2', component: Element2Component},
  {path: 'element3', component: Element3Component},
  {path: 'element4', component: Element4Component},
  {path: 'first', component: FirstComponent},
  {path: 'second', component: SecondComponent},
  {path: 'third', component: ThirdComponent},
  {path: 'fourth', component: FourthComponent},
  {path: 'fourth/coffe', component: CoffeComponent},
  {path: 'fourth/tea', component: TeaComponent},
];

enableProdMode();

@NgModule({
  declarations: [
    AppComponent,
    Element1Component,
    Element2Component,
    Element3Component,
    Element4Component,
    AsideLeftComponent,
    AsideRightComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    FourthComponent,
    FormComponent,
    ArticleComponent,
    CoffeComponent,
    TeaComponent,
    HomeComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
