import { Component } from '@angular/core';
import { ContactUsInfo } from "../../components/contact-us-info/contact-us-info";
import { ContactUsBlock } from "../../components/contact-us-block/contact-us-block";

@Component({
  selector: 'app-contact-us-main',
  imports: [ContactUsInfo, ContactUsBlock],
  templateUrl: './contact-us-main.html',
  styleUrl: './contact-us-main.scss',
})
export class ContactUsMain {

}
