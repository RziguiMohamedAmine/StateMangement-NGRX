import { createReducer, on } from "@ngrx/store";
import { StudentsRecords } from "./students-records";
import * as Actions from "../state/students-records.action";

export const initState:{studentsRecords: StudentsRecords[]}  ={
  
       studentsRecords:[{
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
       }]
    
};

export const StudentReducer = createReducer(
    initState,
    on(Actions.callStudentsRecordsApiSuccess, 
        (state: any, { payload }: any) => ({
           ...state,studentsRecords: payload
        })
    )
);


