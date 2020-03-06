import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class SubjectService {
  modalStateSubject = new BehaviorSubject<boolean>(false)
  dataSubject = new BehaviorSubject<any>(null)

  getData(){
    return this.dataSubject.asObservable()
  }
  setData(data){
    this.dataSubject.next(data)
  }
  getState(){
    return this.modalStateSubject.asObservable()
  }
  setState(state){
    this.modalStateSubject.next(state)
  }
  constructor() { 
  }


  
}