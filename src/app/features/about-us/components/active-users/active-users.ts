import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-active-users',
  imports: [
    TranslatePipe
  ],
  templateUrl: './active-users.html',
  styleUrl: './active-users.scss',
})
export class ActiveUsers {

  avatars = [
    '/assets/icons/shared/avatar_1.svg',
    '/assets/icons/shared/avatar_2.svg',
    '/assets/icons/shared/avatar_3.svg',
    '/assets/icons/shared/avatar_4.svg',
    '/assets/icons/shared/avatar_5.svg',
    '/assets/icons/shared/avatar_6.svg',
  ];
}
