import { Component } from '@angular/core';
import { OurServicesInfo } from "../../components/our-services-info/our-services-info";
import { ServicesBlock } from "../../components/services-block/services-block";
import { Faq } from "../../../../shared/components/faq/faq";
import { ReqQuote } from "../../components/req-quote/req-quote";

@Component({
  selector: 'app-services-main',
  imports: [OurServicesInfo, ServicesBlock, Faq, ReqQuote],
  templateUrl: './services-main.html',
  styleUrl: './services-main.scss',
})
export class ServicesMain {
  questions = [
    {
      title: '1 - What services do you actually offer?',
      answer: 'We focus on custom website design, CMS based website development, and website optimisation services that help businesses communicate clearly and convert visitors into leads.',
      value: '1'
    },
    {
      title: '2 - Do you work mainly with UK businesses?',
      answer: "Yes. We're based in the UK and work closely with UK businesses who want reliable, long term web development services they can trust.",
      value: '2'
    },
    {
      title: '3 - What makes your custom web development services different?',
      answer: "We don't rush builds or rely on templates. Every site is structured around your business goals, users, and real world constraints.",
      value: '3'
    },
    {
      title: '4 - Do you build websites using WordPress or other CMS platforms?',
      answer: 'Yes. We specialise in CMS based website development, including WordPress, so clients can easily manage content without technical help.',
      value: '4'
    },
    {
      title: '5 - Can you improve an existing website instead of rebuilding it?',
      answer: 'Often, yes. Through website optimisation services, we fix structure, messaging, speed, and usability without unnecessary rebuilds.',
      value: '5'
    },
    {
      title: '6 - Do you offer ongoing support after launch?',
      answer: 'Absolutely. Our website maintenance and support services cover updates, fixes, and improvements as your business evolves.',
      value: '6'
    },
    {
      title: '7 - How long does a typical website project take?',
      answer: 'Most business website development projects take a few weeks, depending on scope and how quickly feedback is shared.',
      value: '7'
    },
    {
      title: '8 - Why choose Black IT as your professional web development company?',
      answer: 'Because we communicate clearly, build intentionally, and treat your website as a business asset, not a design experiment.',
      value: '8'
    }
  ]
}
