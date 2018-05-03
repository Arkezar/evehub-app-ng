import { Component, OnInit, Input } from '@angular/core';
import { Kill } from '../shared/data.service';

@Component({
  selector: '[app-kill]',
  templateUrl: './kill.component.html',
  styleUrls: ['./kill.component.css']
})
export class KillComponent {
  @Input()
  kill: Kill;

  get shipIcon() {
    return `https://imageserver.eveonline.com/Render/${this.kill.shipTypeId}_64.png`;
  }

  getCorpIcon(corpId: number) {
    return `https://imageserver.eveonline.com/Corporation/${corpId}_64.png`;
  }
}
