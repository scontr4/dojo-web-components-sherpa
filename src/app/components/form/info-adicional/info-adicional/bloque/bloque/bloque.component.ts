import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bloque-info',
  templateUrl: './bloque.component.html',
  styleUrls: ['./bloque.component.scss']
})
export class BloqueComponent {
  @Input() message: string = "";
  @Input() ejemplo: string = "";
}
