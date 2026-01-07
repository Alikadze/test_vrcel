import { Component, input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-comment-card',
  imports: [
    TranslatePipe
  ],
  templateUrl: './comment-card.html',
  styleUrl: './comment-card.scss',
})
export class CommentCard {
  info = input.required<{ name: string; comment: string; avatarSrc: string }>();
}
