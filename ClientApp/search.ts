﻿import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'searchFilter'
})

export class filterSearch implements PipeTransform {
    transform(value: any, args: string): any {
        if (args == null || args == undefined) {
            return value;
        }
        else {
            let filter = args.toLocaleLowerCase();
            return filter ? value.filter((Student: string) => (Student.Nome.toLocaleLowerCase().indexOf(filter) != -1)
                || (Student.cognome.toLocaleLowerCase().indexOf(filter) != -1)
                || (Student.corso.toLocaleLowerCase().indexOf(filter) != -1)
            ) : value;
        }
    }
}