import { Component } from '@angular/core';
import { Faq } from "../../../../shared/components/faq/faq";
import { Comments } from "../../../../shared/components/comments/comments";
import { InfoCarousel } from "../../components/info-carousel/info-carousel";
import { AboutCompany } from "../../components/about-company/about-company";
import { ActiveUsers } from "../../components/active-users/active-users";
import { Values } from "../../components/values/values";

@Component({
  selector: 'app-about-us-main',
  imports: [Faq, Comments, InfoCarousel, AboutCompany, ActiveUsers, Values],
  templateUrl: './about-us-main.html',
  styleUrl: './about-us-main.scss',
})
export class AboutUsMain {
  questions = [
    {
      title: 'What kind of businesses do you usually work with?',
      answer: 'We mostly work with small to growing businesses that need a clear, professional website and want to get it right the first time.',
      value: '1'
    },
    {
      title: 'Do you only design websites or do you handle development too?',
      answer: 'We do both. Design and development are handled together so nothing gets lost between how something looks and how it works.',
      value: '2'
    },
    {
      title: 'How involved do I need to be during the project?',
      answer: "We'll guide you through everything. You'll be involved at key points, but we keep the process simple and respectful of your time.",
      value: '3'
    },
    {
      title: 'What happens if I\'m not happy with something?',
      answer: 'We talk it through and fix it. Feedback is part of the process, not a problem, and we plan space for revisions.',
      value: '4'
    },
    {
      title: 'Can you work with an existing website or do you start from scratch?',
      answer: 'Both are possible. Sometimes improving what\'s already there makes sense, and sometimes starting fresh is the better option.',
      value: '5'
    },
    {
      title: 'Will I be able to manage the website myself after launch?',
      answer: "Yes. We build sites so you can update content easily, and we're happy to show you how if needed.",
      value: '6'
    },
    {
      title: 'Do you offer support after the website goes live?',
      answer: "We do. Some clients need occasional help, others want ongoing support, and we're flexible based on what makes sense.",
      value: '7'
    },
    {
      title: 'How do we get started?',
      answer: 'It usually begins with a short conversation about your business, your goals, and what you want the website to do.',
      value: '8'
    }
  ]

  commentsInfo = [
    {
      name: 'Daniela Roberts',
      comment: `Within the first month, bounce rates dropped and enquiries started coming through consistently. The structure finally made sense.`,
      avatarSrc: '/assets/images/shared/avatar_1.png',
    },
    {
      name: 'Lauren Mitchell',
      comment: `They rebuilt our site flow and messaging. We now get clearer leads and spend less time explaining what we actually do`,
      avatarSrc: '/assets/images/shared/avatar_2.png',
    },
    {
      name: 'Chris Anderson',
      comment: `The site loads faster, works better on mobile, and customers stay longer. It’s doing real work for us now.`,
      avatarSrc: '/assets/images/shared/avatar_3.png',
    }
  ]
}
