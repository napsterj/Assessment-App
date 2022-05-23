import { Component, Input, Output, TemplateRef, EventEmitter } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'confirm-dialog',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent {
  modalRef: BsModalRef
  message: "";
  @Input() id: Number
  @Input() title: string
  @Output() userAction = new EventEmitter<any>();
  
  constructor(private bsModalService: BsModalService) { }

  openModal(template: TemplateRef<any>) {    
    this.modalRef = this.bsModalService.show(template);
  }

  checkUserAction(isConfirm: boolean) {    
    if(!isConfirm) {
      this.modalRef.hide();
      return;
    }
    this.userAction.emit(this.id);
    this.modalRef.hide();
  }

  confirm() : void {    
    this.checkUserAction(true)    
  }
  
  decline() {
    this.checkUserAction(false)
  }

}
