import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { InputText } from "primeng/inputtext";
import { Button } from "../../../../shared/button/button";
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-us-block',
  imports: [InputText, Button, NgOptimizedImage, TranslatePipe],
  templateUrl: './contact-us-block.html',
  styleUrl: './contact-us-block.scss',
})
export class ContactUsBlock {

  contactUsInfo = [
    {
      label: 'Email',
      value: 'support@blackit.com',
      icon: 'envelope'
    },
    {
      label: 'Phone Number',
      value: '+1 234 567 890',
      icon: 'phone'
    },
    {
      label: 'Address',
      value: '221B Baker Street, London NW1 6XE, United Kingdom',
      icon: 'map-marker'
    },
    {
      label: 'Working Hours',
      value: 'Mon-Fri 9:00 AM (AST)',
      icon: 'clock'
    },
  ]
}
