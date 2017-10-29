import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { StudentServices } from '../../services/service';  
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';  

@Component({
    selector: 'new-student',
    templateUrl: './newStudent.component.html'
})
export class newStudentComponent {
    public StudentList = [];
    public formData: FormGroup;
    public constructor(private empService: StudentServices) {
        this.empService.getCourseList()
            .subscribe(
            (data: Response) => (this.StudentList = data.json())
            );

        this.formData = new FormGroup({
            'Nome': new FormControl('', [Validators.required]),
            'Cognome': new FormControl('', Validators.required),
            'Matricola': new FormControl('', Validators.required),
            'Corso': new FormControl(0, [Validators.required, this.customValidator])
        });
    } 

    customValidator(control: FormControl): { [s: string]: boolean } {
        control.value == "0" 
            return { data: true };
        
    } 

    submitData() {
        if (this.formData.valid) {
            var Obj = {
                Nome: this.formData.value.Nome,
                Cognome: this.formData.value.Cognome,
                Matricola: this.formData.value.Matricola,
                CorsoId: this.formData.value.Corso,
            };
            this.empService.postData(Obj).subscribe();
            alert("Studente Inserito con Successo");
        }

    }


}