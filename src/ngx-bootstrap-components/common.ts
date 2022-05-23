import { TabsModule } from 'ngx-bootstrap/tabs';
import { ModalModule } from 'ngx-bootstrap/modal'; 
import { ButtonsModule} from 'ngx-bootstrap/buttons'
import {BsDatepickerModule } from 'ngx-bootstrap/datepicker'

export const Common = [
    TabsModule.forRoot(),
    ModalModule.forRoot(),
    ButtonsModule.forRoot(),
    BsDatepickerModule.forRoot()
]