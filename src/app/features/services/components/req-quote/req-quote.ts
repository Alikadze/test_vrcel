import { Component } from '@angular/core';
import { Button } from "../../../../shared/button/button";
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-req-quote',
  imports: [Button, TranslatePipe],
  templateUrl: './req-quote.html',
  styleUrl: './req-quote.scss',
})
export class ReqQuote {

}
