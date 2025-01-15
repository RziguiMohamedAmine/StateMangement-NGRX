import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Store } from "@ngrx/store";
import { Observable, Subject} from "rxjs";
import { MatFormFieldModule } from '@angular/material/form-field';
import { StudentsRecords } from '../state/students-records';
import { MatInputModule } from '@angular/material/input';
import { AppState, selectAll } from '../state/state-selectors';


@Component({
  selector: 'app-students-list',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './students-list.component.html',
  styleUrl: './students-list.component.css'
})
export class StudentsListComponent implements OnInit {
 
  
  dataSource: any = [];
  dataSource$ !: Observable<StudentsRecords[]> ;
  displayedColumns: string[] = ['name', 'city', 'country', 'subject', 'passportDeclaration','phone'];
  constructor(private store: Store<AppState>){
  }

  ngOnInit(): void {
    this.dataSource$ = this.store.select(selectAll);
    this.dataSource$.subscribe((res: any) => {
      this.dataSource = res;
    });
  }

}
