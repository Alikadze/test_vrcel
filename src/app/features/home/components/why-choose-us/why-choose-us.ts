import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-why-choose-us',
  imports: [
    TranslatePipe
  ],
  templateUrl: './why-choose-us.html',
  styleUrl: './why-choose-us.scss',
})
export class WhyChooseUs {
  reasons = [
    {
      title: "Human Logic Over Guesswork",
      description: "Every decision starts with user intent, business goals, and measurable outcomes, not trends that matter.",
      iconSrc: "/assets/images/home/top-chart.svg"
    },
    {
      title: "No Surprises, Ever",
      description: "Clear timelines, honest scope, and proactive communication remove surprises and build confidence throughout delivery cycles.",
      iconSrc: "/assets/images/home/human-center.svg"
    },
    {
      title: "Built to Perform, Not Decorate",
      description: "As a modern website design firm, we engineer speed, accessibility, and scalability from day one.",
      iconSrc: "/assets/images/home/human-star.svg"
    },
    {
      title: "Partnership, Not a One-Off Project",
      description: "Clients rely on us as a trusted IT partner invested in long-term growth, not wins.",
      iconSrc: "/assets/images/home/infinity.svg"
    }
  ]
}
