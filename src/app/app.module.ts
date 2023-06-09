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
import { OopConceptsComponent } from './components/oop-concepts/oop-concepts.component';
import { LoopsComponent } from './components/loops/loops.component';
import { ForLoopComponent } from './components/for-loop/for-loop.component';
import { WhileLoopComponent } from './components/while-loop/while-loop.component';
import { DoWhileLoopComponent } from './components/do-while-loop/do-while-loop.component';
import { ClassComponent } from './components/class/class.component';
import { WindowsComponent } from './components/setup/windows/windows.component';
import { LinuxComponent } from './components/setup/linux/linux.component';
import { MaccComponent } from './components/setup/macc/macc.component';
import { FunctionComponent } from './components/function/function.component';
import { VectorComponent } from './components/vector/vector.component';
import { DataTypeComponent } from './components/data-type/data-type.component';
import { VariableComponent } from './components/variable/variable.component';
import { StructureComponent } from './components/structure/structure.component';
import { IfStatementComponent } from './components/control-statements/if-statement/if-statement.component';
import { IfElseComponent } from './components/control-statements/if-else/if-else.component';
import { ElseIfComponent } from './components/control-statements/else-if/else-if.component';
import { SwitchComponent } from './components/control-statements/switch/switch.component';
import { ConditionalsComponent } from './components/control-statements/conditionals/conditionals.component';
import { RegisterationComponent } from './components/authentication/registeration/registeration.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { DonationComponent } from './components/donation/donation.component';

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
    AbstractionComponent,
    OopConceptsComponent,
    LoopsComponent,
    ForLoopComponent,
    WhileLoopComponent,
    DoWhileLoopComponent,
    ClassComponent,
    WindowsComponent,
    LinuxComponent,
    MaccComponent,
    FunctionComponent,
    VectorComponent,
    DataTypeComponent,
    VariableComponent,
    StructureComponent,
    IfStatementComponent,
    IfElseComponent,
    ElseIfComponent,
    SwitchComponent,
    ConditionalsComponent,
    RegisterationComponent,
    HomeComponent,
    LoginComponent,
    DonationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
