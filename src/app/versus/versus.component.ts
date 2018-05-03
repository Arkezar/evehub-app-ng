import { Component } from "@angular/core";
import { DataService, Corporation, Kill } from "../shared/data.service";
import { Observable } from 'rxjs/Observable';

@Component({
    selector: '[app-versus]',
    templateUrl: './versus.component.html'
})
export class VersusComponent {

    baseCorpId: number;
    versusCorpId: number;
    kills: Observable<Kill[]>;

    constructor(private dataService: DataService) {

    }

    onCorpSelected(event: any) {
        switch (event.name) {
            case "baseCorp":
                this.baseCorpId = event.selectedId;
                break;
            case "versusCorp":
                this.versusCorpId = event.selectedId;
                break;
        }
    }

    onClickVersus() {
        if (this.baseCorpId && this.versusCorpId) {
            console.log(this.baseCorpId + " vs " + this.versusCorpId)
            this.kills = this.dataService.getEncounters(this.baseCorpId, this.versusCorpId);
        }
    }
}