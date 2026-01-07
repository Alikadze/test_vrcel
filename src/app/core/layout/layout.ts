import { Component } from '@angular/core';
import { Footer } from "./components/footer/footer";
import { RouterOutlet } from "@angular/router";
import { Header } from "./components/header/header";
import { ButtonModule } from "primeng/button";

@Component({
  selector: 'app-layout',
  imports: [Footer, RouterOutlet, Header, ButtonModule],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {
  openWhatsApp(): void {
    const phoneNumber = '+40753651078';
    // const message = 'Hello, I would like to get in touch with you.';
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, '_blank');
  }
}
