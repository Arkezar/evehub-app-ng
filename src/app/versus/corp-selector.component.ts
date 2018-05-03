import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { DataService, Corporation, Kill } from "../shared/data.service";
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl, FormControl } from '@angular/forms'
import { catchError, map, tap, startWith, switchMap, debounceTime, distinctUntilChanged, takeWhile, first } from 'rxjs/operators';

@Component({
    selector: '[corp-selector]',
    templateUrl: './corp-selector.component.html'
})
export class CorpSelectorComponent {
    @Input() name: string;
    @Input() default: boolean;
    @Output() onCorpSelected = new EventEmitter<any>();

    formControl: FormControl;
    corpsList: Observable<any[]>;

    ngOnInit() {
        if (this.default) {
            var defaultOption = { id: 1856883060, name: 'X Legion' }; //placeholder for configuration
            this.formControl = new FormControl(defaultOption);
            this.onCorpSelected.emit({ name: this.name, selectedId: defaultOption.id });
        } else {
            this.formControl = new FormControl();
        }

        this.corpsList = this.formControl.valueChanges
            .pipe(
                startWith(null),
                debounceTime(200),
                distinctUntilChanged(),
                switchMap(val => {
                    return this.filter(val || '')
                })
            );
    }

    constructor(private dataService: DataService) {

    }

    filter(val: string): Observable<any[]> {
        return this.dataService.getCorps(val).pipe(
            map(response => response.filter(option => {
                return option.name.toLowerCase().indexOf(val.toLowerCase()) === 0
            }))
        );
    }

    onDisplay(corp?: Corporation): string | undefined {
        return corp ? corp.name : undefined;
    }

    onSelected(event) {
        this.onCorpSelected.emit({ name: this.name, selectedId: event.option.value.id });
    }
}