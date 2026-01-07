import { Component } from '@angular/core';
import { AboutCompanyInfoCard } from "../about-company-info-card/about-company-info-card";
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-about-company',
  imports: [
    AboutCompanyInfoCard,
    TranslatePipe
  ],
  templateUrl: './about-company.html',
  styleUrl: './about-company.scss',
})
export class AboutCompany {

  aboutCompanyInfoCards = [
    {
      title: "Years",
      number: "4+",
      description: "4+ Years Building Business Websites. We've spent years designing and developing websites for real companies, learning what builds trust and drives action."
    },
    {
      title: "Websites",
      number: "20+",
      description: '20+ Custom Websites Launched. Each website was planned and built around specific business goals, audiences, and content needs, never reused templates.'
    },
    {
      title: "Decisions",
      number: "100+",
      description: '100+ UX and Performance Decisions Per Site. From structure to speed, every decision is made to remove friction and improve how users move.'
    },
    {
      title: "Support",
      number: "12+",
      description: '12+ Months of Post Launch Support. We stay involved after launch, helping businesses update, improve, and adapt their websites over time.'
    }
  ]
}
