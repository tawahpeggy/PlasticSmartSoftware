import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AbstractionComponent } from './components/abstraction/abstraction.component';
import { CommentsComponent } from './components/comments/comments.component';
import { DoWhileLoopComponent } from './components/do-while-loop/do-while-loop.component';
import { EncapsulationComponent } from './components/encapsulation/encapsulation.component';
import { ForLoopComponent } from './components/for-loop/for-loop.component';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { InheritanceComponent } from './components/inheritance/inheritance.component';
import { LoopsComponent } from './components/loops/loops.component';
import { ObjectsComponent } from './components/objects/objects.component';
import { OopConceptsComponent } from './components/oop-concepts/oop-concepts.component';
import { PolymorphismComponent } from './components/polymorphism/polymorphism.component';
import { WhileLoopComponent } from './components/while-loop/while-loop.component';
import { BlogComponent } from './pages/blog/blog.component';

const routes: Routes = [
  {  path: 'helloworld', component: HelloWorldComponent},
  {  path: 'encapsulation', component: EncapsulationComponent},
  {  path: 'loops', component: LoopsComponent},
  {  path: 'for', component: ForLoopComponent},
  {  path: 'while', component: WhileLoopComponent},
  {  path: 'dowhile', component: DoWhileLoopComponent},
  {  path: 'oopconcepts', component: OopConceptsComponent},
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
