import { Component, input, signal } from '@angular/core';
import { FaqItem } from "../faq-item/faq-item";
import { AccordionModule } from "primeng/accordion";
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-faq',
  imports: [
    FaqItem,
    AccordionModule,
    TranslatePipe
  ],
  templateUrl: './faq.html',
  styleUrl: './faq.scss',
})
export class Faq {
  questions = input.required<Array<{
    title: string;
    answer: string;
    value: string;
  }>>();

  expandedIndex = signal<number | null>(null);

  toggleQuestion(index: number) {
    this.expandedIndex.update(current => current === index ? null : index);
  }

  // questions = [
  //   {
  //     title: '1 - What exactly does Black IT do for my business?',
  //     answer: 'We build and support your online presence with care and clarity. As a professional web development company, we design custom websites, integrate essential tools, and help your business work smarter online.',
  //     value: '1'
  //   },
  //   {
  //     title: '2 - How long does it take to design and launch a website?',
  //     answer: 'Project timelines vary depending on complexity, content, and feedback. Simple sites can go live within a few weeks, while more advanced builds take longer. We’ll give you a realistic schedule up front so there are no surprises.',
  //     value: '2'
  //   },
  //   {
  //     title: '3 - How much will a custom website cost?',
  //     answer: 'Every business has different needs, so pricing depends on size, features, and your goals. After a short conversation to understand your project, we’ll share a clear and honest estimate.',
  //     value: '3'
  //   },
  //   {
  //     title: '4 - Will my new website work well on phones and tablets?',
  //     answer: 'Yes. Every site we build is fully responsive and designed to look great and work smoothly on all devices, from phones to desktops.',
  //     value: '4'
  //   },
  //   {
  //     title: '5 - Do you provide business technology solutions beyond design?',
  //     answer: 'Absolutely. We create solutions that connect your website with the tools you use every day, streamline processes, and improve how your business operates online.',
  //     value: '5'
  //   },
  //   {
  //     title: '6 - What kind of digital transformation services do you offer?',
  //     answer: 'We help businesses move beyond static homepages into strategic digital experiences that improve engagement, automate workflows, and support growth, not just decoration.',
  //     value: '6'
  //   },
  //   {
  //     title: '7 - Can I update my website myself later?',
  //     answer: 'Yes. We use intuitive systems that let you edit content whenever you need, and we’re always happy to show you how. If you want ongoing support, we can provide that too.',
  //     value: '7'
  //   },
  //   {
  //     title: '8 - Why should I choose you as my trusted IT partner?',
  //     answer: 'Because we listen, we explain things clearly, and we treat your goals as if they were our own. We’re with you before, during, and after launch, helping you adapt and grow confidently.',
  //     value: '8'
  //   }
  // ]
}
