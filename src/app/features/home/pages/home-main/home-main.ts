import { Component } from '@angular/core';
import { CompanyDescription } from "../../components/company-description/company-description";
import { Cases } from "../../components/cases/cases";
import { Blog } from "../../components/blog/blog";
import { Faq } from "../../../../shared/components/faq/faq";
import { Comments } from "../../../../shared/components/comments/comments";
import { WhyChooseUs } from '../../components/why-choose-us/why-choose-us';

@Component({
  selector: 'app-home-main',
  imports: [CompanyDescription, Cases, WhyChooseUs, Blog, Faq, Comments],
  templateUrl: './home-main.html',
  styleUrl: './home-main.scss',
})
export class HomeMain {
  questions = [
    {
      title: '1 - What exactly does Black IT do for my business?',
      answer: 'We build and support your online presence with care and clarity. As a professional web development company, we design custom websites, integrate essential tools, and help your business work smarter online.',
      value: '1'
    },
    {
      title: '2 - How long does it take to design and launch a website?',
      answer: 'Project timelines vary depending on complexity, content, and feedback. Simple sites can go live within a few weeks, while more advanced builds take longer. We’ll give you a realistic schedule up front so there are no surprises.',
      value: '2'
    },
    {
      title: '3 - How much will a custom website cost?',
      answer: 'Every business has different needs, so pricing depends on size, features, and your goals. After a short conversation to understand your project, we’ll share a clear and honest estimate.',
      value: '3'
    },
    {
      title: '4 - Will my new website work well on phones and tablets?',
      answer: 'Yes. Every site we build is fully responsive and designed to look great and work smoothly on all devices, from phones to desktops.',
      value: '4'
    },
    {
      title: '5 - Do you provide business technology solutions beyond design?',
      answer: 'Absolutely. We create solutions that connect your website with the tools you use every day, streamline processes, and improve how your business operates online.',
      value: '5'
    },
    {
      title: '6 - What kind of digital transformation services do you offer?',
      answer: 'We help businesses move beyond static homepages into strategic digital experiences that improve engagement, automate workflows, and support growth, not just decoration.',
      value: '6'
    },
    {
      title: '7 - Can I update my website myself later?',
      answer: 'Yes. We use intuitive systems that let you edit content whenever you need, and we’re always happy to show you how. If you want ongoing support, we can provide that too.',
      value: '7'
    },
    {
      title: '8 - Why should I choose you as my trusted IT partner?',
      answer: 'Because we listen, we explain things clearly, and we treat your goals as if they were our own. We’re with you before, during, and after launch, helping you adapt and grow confidently.',
      value: '8'
    }
  ]

  commentsInfo = [
    {
      name: 'Michael Thompson',
      comment: `They didn’t rush into design. They took time to understand our business and built a site that actually supports how we sell.`,
      avatarSrc: '/assets/images/shared/avatar_1.png',
    },
    {
      name: 'Andi Lane',
      comment: `Communication was clear the entire time. I always knew what was happening and why each decision was made.`,
      avatarSrc: '/assets/images/shared/avatar_2.png',
    },
    {
      name: 'Koray Okumus',
      comment: `Our old site looked fine but didn’t do much. The new one feels purposeful and easier for customers to navigate.`,
      avatarSrc: '/assets/images/shared/avatar_3.png',
    }
  ]
}
