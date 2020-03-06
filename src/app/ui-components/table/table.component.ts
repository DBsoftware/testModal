import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../../data.service';
import {tap} from 'rxjs/operators'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  tableData$
  headerFields
  constructor(private _subjectService:SubjectService) { }

  ngOnInit() {
    this.tableData$ = this._subjectService.getData()
                      .pipe(tap(e => {
                        this.headerFields = Object.keys(e[0])
                      }))
                
  }

}













