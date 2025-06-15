import { Injectable } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { AlertService } from './alert.service';

@Injectable({ providedIn: 'root' })

export class UIService {
    constructor(
        public spinner: NgxSpinnerService,
        public alert: AlertService
    ) { }
}
