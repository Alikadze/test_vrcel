import { Component } from '@angular/core';
import { BlogCard } from "../blog-card/blog-card";
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-blog',
  imports: [
    BlogCard,
    TranslatePipe
  ],
  templateUrl: './blog.html',
  styleUrl: './blog.scss',
})
export class Blog {

  blogInfo = [
    {
      title: "The Prophecy of Your Success: How to Build an App Like Robinhood",
      imgSrc: "/assets/images/home/blog-frame-1.png",
    },
    {
      title: "Tech insights explained the way users actually think.",
      imgSrc: "/assets/images/home/blog-frame-2.png",
    },
    {
      title: "Tech insights explained the way users actually think.",
      imgSrc: "/assets/images/home/blog-frame-3.png",
    },
  ]
}
