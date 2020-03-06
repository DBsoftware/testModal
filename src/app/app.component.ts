import { Component } from '@angular/core';
import data from './data';
import { SubjectService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'modalTable';
  dataToTable = data;
  modalState = false
  constructor(private _subjectService:SubjectService){
    _subjectService.setData(this.dataToTable)
  }

  setModalState(state){
    this._subjectService.setState(state)
  }
}
