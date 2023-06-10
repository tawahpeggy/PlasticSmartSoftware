import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AbstractionComponent } from './components/abstraction/abstraction.component';
import { ClassComponent } from './components/class/class.component';
import { CommentsComponent } from './components/comments/comments.component';
import { ConditionalsComponent } from './components/control-statements/conditionals/conditionals.component';
import { ElseIfComponent } from './components/control-statements/else-if/else-if.component';
import { IfElseComponent } from './components/control-statements/if-else/if-else.component';
import { IfStatementComponent } from './components/control-statements/if-statement/if-statement.component';
import { RegisterationComponent } from './components/authentication/registeration/registeration.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { DonationComponent } from './components/donation/donation.component';
import { BlogComponent } from './components/blog/blog.component';
// import { SwitchComponent } from './components/control-statements/switch/switch.component';
// import { DataTypeComponent } from './components/data-type/data-type.component';
// import { DoWhileLoopComponent } from './components/do-while-loop/do-while-loop.component';
// import { EncapsulationComponent } from './components/encapsulation/encapsulation.component';
// import { ForLoopComponent } from './components/for-loop/for-loop.component';
// import { FunctionComponent } from './components/function/function.component';
// import { HelloWorldComponent } from './components/hello-world/hello-world.component';
// import { InheritanceComponent } from './components/inheritance/inheritance.component';
// import { LoopsComponent } from './components/loops/loops.component';
// import { ObjectsComponent } from './components/objects/objects.component';
// import { OopConceptsComponent } from './components/oop-concepts/oop-concepts.component';
// import { PointersComponent } from './components/pointers/pointers.component';
// import { PolymorphismComponent } from './components/polymorphism/polymorphism.component';
// import { LinuxComponent } from './components/setup/linux/linux.component';
// import { MaccComponent } from './components/setup/macc/macc.component';
// import { WindowsComponent } from './components/setup/windows/windows.component';
// import { StructureComponent } from './components/structure/structure.component';
// import { VariableComponent } from './components/variable/variable.component';
// import { VectorComponent } from './components/vector/vector.component';
// import { WhileLoopComponent } from './components/while-loop/while-loop.component';
// import { BlogComponent } from './pages/blog/blog.component';

const routes: Routes = [
  // {  path: 'conditionals', component: ConditionalsComponent},
  // {  path: 'if', component: IfStatementComponent},
  // {  path: 'ifelse', component: IfElseComponent},
  // {  path: 'elseif', component: ElseIfComponent},
  // {  path: 'switch', component: SwitchComponent},
  // {  path: 'helloworld', component: HelloWorldComponent},
  // {  path: 'encapsulation', component: EncapsulationComponent},
  // {  path: 'loops', component: LoopsComponent},
  // {  path: 'functions', component: FunctionComponent},
  // {  path: 'vectors', component: VectorComponent},
  // {  path: 'pointers', component: PointersComponent},
  // {  path: 'structures', component: StructureComponent},
  // {  path: 'datatypes', component: DataTypeComponent},
  // {  path: 'variables', component: VariableComponent},
  // {  path: 'for', component: ForLoopComponent},
  // {  path: 'while', component: WhileLoopComponent},
  // {  path: 'dowhile', component: DoWhileLoopComponent},
  // {  path: 'oopconcepts', component: OopConceptsComponent},
  // {  path: 'objects', component: ObjectsComponent},
  // {  path: 'inheritance', component: InheritanceComponent},
  // {  path: 'polymorphism', component: PolymorphismComponent},
  // {  path: 'abstraction', component: AbstractionComponent},
  // {  path: 'classes', component: ClassComponent},
  // {  path: 'about', component: AboutComponent},
  // {  path: 'comments', component: CommentsComponent},
  {  path: 'blogList', component: BlogComponent},
  {  path: 'donate', component: DonationComponent},
  {  path: ' ', component: HomeComponent},
  { path: 'register', component: RegisterationComponent},
  { path: 'login', component: LoginComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
