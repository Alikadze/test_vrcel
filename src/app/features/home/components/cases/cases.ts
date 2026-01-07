import { Component } from '@angular/core';
import { CasesCard } from "../cases-card/cases-card";
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-cases',
  imports: [CasesCard , TranslatePipe],
  templateUrl: './cases.html',
  styleUrl: './cases.scss',
})
export class Cases {
  ourServices = [
    {
      title: "Web Development"
    },
    {
      title: "Cloud Systems"
    },
    {
      title: "UI/UX Design"
    },
    {
      title: "Automation"
    },
  ]

  casesCardInfo = [
    {
      title: "Voice translator app",
      description: "Real-time voice translation that connects humans, and powers global conversations.",
      imageSrc: "assets/images/home/voice-translator-app-template.png",
      results: [
        { number: "4.7", text: "Average Rating on APP Store/Play Store" },
        { number: "500,000", text: "Active Users Monthly" }
      ],
      themeColor: "#4C4C4C"
    },
    {
      title: "Wallet Mobile app",
      description: "A wallet built for humans, fortified with enterprise security for business.",
      imageSrc: "assets/images/home/wallet-app-ui-kit.png",
      results: [
        { number: "500,000", text: "Installations from more then 40 countries" },
        { number: "400,000+", text: "Active Users per Month" }
      ],
      themeColor: "#37477C"
    },
    {
      title: "Online Boutique Shop",
      description: "Boutique shops made to inspire — built to grow with business.",
      imageSrc: "assets/images/home/different-tech-gadgets.png",
      results: [
        { number: "250,000+", text: "Orders successfully delivered" },
        { number: "1.2M+", text: "Boutique store visitors annually" }
      ],
      themeColor: "#773E59"
    }
  ]
}
