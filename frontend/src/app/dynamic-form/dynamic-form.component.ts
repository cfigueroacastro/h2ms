import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { QuestionBase } from '../questions/question-base';
import { QuestionControlService } from '../questions/service/question-control.service';

@Component({
    selector: 'app-dynamic-form',
    templateUrl: './dynamic-form.component.html',
    providers: [ QuestionControlService ]
})
export class DynamicFormComponent implements OnInit {

    @Input() questions: QuestionBase<any>[] = [];
    form: FormGroup;
    payLoad = '';

    constructor(private questionControlService: QuestionControlService) {  }

    ngOnInit() {
        this.form = this.questionControlService.toFormGroup(this.questions);
    }

    onSubmit() {
        this.payLoad = JSON.stringify(this.form.value);
    }
}