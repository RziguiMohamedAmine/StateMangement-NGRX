import { createReducer } from "@ngrx/store";
import { StudentsRecords } from "./students-records";

export const initState: ReadonlyArray<StudentsRecords> =[{
  
        name: "Ali",
        city: "test",
        country: "Tunisia",
        subject: "sfbsfb",
        passportDeclaration: "string",
        fitnessDeclaration: "string",
        courseName: "string",
        date: "string",
        state: "string",
        street: "string",
        email: "amine@gmail.com",
        phone: "56565656",
        postalCode: 123456
    
}];

export const StudentReducer = createReducer(
    initState
);


