import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AbstractionComponent } from './components/abstraction/abstraction.component';
import { CommentsComponent } from './components/comments/comments.component';
import { EncapsulationComponent } from './components/encapsulation/encapsulation.component';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { InheritanceComponent } from './components/inheritance/inheritance.component';
import { ObjectsComponent } from './components/objects/objects.component';
import { PolymorphismComponent } from './components/polymorphism/polymorphism.component';
import { BlogComponent } from './pages/blog/blog.component';

const routes: Routes = [
  {  path: 'helloworld', component: HelloWorldComponent},
  {  path: 'encapsulation', component: EncapsulationComponent},
  {  path: 'objects', component: ObjectsComponent},
  {  path: 'inheritance', component: InheritanceComponent},
  {  path: 'polymorphism', component: PolymorphismComponent},
  {  path: 'abstraction', component: AbstractionComponent},
  {  path: 'about', component: AboutComponent},
  {  path: 'comments', component: CommentsComponent},
  { path: 'C', component: BlogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
