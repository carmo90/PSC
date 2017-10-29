import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { studentDetailComponent } from './components/studentDetails/studentdetails.component';
import { newStudentComponent } from './components/newStudent/newStudent.component';
import { editStudentComponent } from './components/editStudent/editStudent.component';
import { viewStudentComponent } from './components/viewStudent/viewStudent.component';
import { StudentServices } from './services/service'

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        studentDetailComponent,
        newStudentComponent,
        editStudentComponent,
        viewStudentComponent

    ],

    providers: [StudentServices],

    imports: [
        CommonModule,
        HttpModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'details/:id', component: studentDetailComponent },
            { path: 'view-student', component: viewStudentComponent },
            { path: 'new', component: newStudentComponent },
            { path: 'edit/:id', component: editStudentComponent }, 
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModuleShared {
}
