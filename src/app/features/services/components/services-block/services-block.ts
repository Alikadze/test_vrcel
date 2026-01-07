import { Component } from '@angular/core';
import { ServiceCard } from "../service-card/service-card";
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-services-block',
  imports: [ServiceCard, TranslatePipe],
  templateUrl: './services-block.html',
  styleUrl: './services-block.scss',
})
export class ServicesBlock {

  servicesInfoList = [
    {
      title: 'Custom Business Website Design',
      description: 'Page structures, messaging hierarchy, and layouts shaped around how customers actually scan, read, and decide.',
      icon: '/assets/icons/services/laptop.png',
      position: "01",
    },
    {
      title: 'CMS Based Website Development',
      description: 'Custom WordPress and CMS builds that let teams edit content, launch pages, and grow without developers.',
      icon: '/assets/icons/services/web-skeleton.png',
      position: "02",
    },
    {
      title: 'Website Optimisation and Support',
      description: 'Speed improvements, content adjustments, bug fixes, and ongoing refinements as your business changes.',
      icon: '/assets/icons/services/person-chart.png',
      position: "03",
    },
  ]

}
