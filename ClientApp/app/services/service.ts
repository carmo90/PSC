import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers  } from '@angular/http';

@Injectable()
export class StudentServices {
    constructor(private http: Http) {

    }
    getStudentsList() {
        return this.http.get('http://localhost:65070/api/student');
    }

    getCourseList() {
        return this.http.get('http://localhost:65070/api/course');
    }  

    postData(empObj: any) {
        let headers = new Headers({
            'Content-Type':
            'application/json; charset=utf-8'
        });
        let options = new RequestOptions({ headers: headers });
        return this.http.post('http://localhost:65070/api/student', JSON.stringify(empObj), options);
    }  

}