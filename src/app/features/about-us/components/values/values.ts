import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-values',
  imports: [TranslatePipe],
  templateUrl: './values.html',
  styleUrl: './values.scss',
})
export class Values {

}
