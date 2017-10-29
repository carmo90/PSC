import { Component } from '@angular/core';
import { StudentServices } from '../../services/service';
import { Response } from '@angular/http';

@Component({
    selector: 'view-student',
    templateUrl: './viewStudent.component.html'
})
export class viewStudentComponent {
    public StudentList = [];
    public constructor(private empService: StudentServices) {
        this.empService.getStudentsList()
            .subscribe(
            (data: Response) => (this.StudentList = data.json())
            );

    }
}   