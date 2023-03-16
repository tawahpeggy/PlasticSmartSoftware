import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContentComponent } from './components/content/content.component';
import { EncapsulationComponent } from './components/encapsulation/encapsulation.component';
import { AboutComponent } from './components/about/about.component';
import { ObjectsComponent } from './components/objects/objects.component';
import { PolymorphismComponent } from './components/polymorphism/polymorphism.component';
import { PointersComponent } from './components/pointers/pointers.component';
import { InheritanceComponent } from './components/inheritance/inheritance.component';
import { AbstractionComponent } from './components/abstraction/abstraction.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    BlogComponent,
    ContentComponent,
    EncapsulationComponent,
    AboutComponent,
    ObjectsComponent,
    PolymorphismComponent,
    PointersComponent,
    InheritanceComponent,
    AbstractionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
