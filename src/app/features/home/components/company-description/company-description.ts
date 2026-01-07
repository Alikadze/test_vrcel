import { Component } from '@angular/core';
import { Button } from "../../../../shared/button/button";
import { NgOptimizedImage } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-company-description',
  imports: [
    Button,
    NgOptimizedImage,
    TranslatePipe
  ],
  templateUrl: './company-description.html',
  styleUrl: './company-description.scss',
})
export class CompanyDescription {

  footerContent = [
    {
      title: 'Projects Delivered',
      numericalValue: "10+",
    },
    {
      title: 'Industries Served',
      numericalValue: "5+",
    },
    {
      title: 'Focus on Performance',
      numericalValue: "100%",
    },
  ];
}
