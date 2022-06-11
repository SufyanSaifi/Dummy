export class Employee {

    Id: number;
    Name: string;
    LastName:string = '';
    Email : string='';
    Age:number;
    DOJ: any;
    Gender: string='Male';
    IsMarried: number;
    IsActive: number;
    DesiginationID: number=0;
    DesiginationName : string='';
}


export class Desigination{

    Id: number = 0;
    DesiginationName: string = '';

}