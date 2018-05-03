import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {
    constructor(private http: HttpClient) {
    }

    getCorps(namePart: string = null) {
        return this.http.get<any>(`https://evehub.metacode.pl/api/corporations/${namePart || ''}`,
            {
                headers: { "Access-Control-Allow-Origin" : "*" }
            });
    }

    getEncounters(baseCorp: number, versusCorp: number) {
        return this.http.get<any>('https://evehub.metacode.pl/api/versus/' + baseCorp + "/" + versusCorp);
    }
}

export interface Corporation {
    id: number;
    name: string;
}

export interface Kill {
    shipTypeId: number;
    shipType: string;
    killTime: Date;
    solarSystem: string;
    iskLost: number;
    victimCorpId: number;
    finalCorpId: number;
}