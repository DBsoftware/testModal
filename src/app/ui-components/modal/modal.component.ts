import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges, OnDestroy } from '@angular/core';
import { SubjectService } from 'src/app/data.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnChanges {
  open$
  @Input() color
  @Input() ancho
  currentColor;
  currentWidth
  styleObject = { 'background-color' : 'white', 'width': '50%'}
  constructor(private _subjectService:SubjectService) { }

  ngOnInit() {
    this.open$ = this._subjectService.getState()
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    this.styleObject['background-color'] = changes['color']?changes['color'].currentValue: this.styleObject['background-color'] 
    this.styleObject['width'] = changes['ancho']? `${changes['ancho'].currentValue}%` : this.styleObject['width']   
  }

  closeModal(){
    this._subjectService.setState(false)
  }

  stopPropagation(event: Event){
    event.stopPropagation()
  }


}
