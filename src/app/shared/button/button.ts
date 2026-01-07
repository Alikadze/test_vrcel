import { NgClass, NgOptimizedImage } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-button',
  imports: [
    NgClass,
    NgOptimizedImage,
    RouterLink
  ],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  icon = input<string>();
  label = input<string>();
  ariaLabel = input<string>();
  routerLink = input<string | any[]>();
  fragment = input<string>();
  variety = input<'primary' | 'secondary' | 'tertiary' | 'link' | 'glass'>('primary');
  active = input<boolean>(false);
  size = input<'small' | 'medium' | 'large'>('medium');
  iconSize = input<'small' | 'medium' | 'large'>('medium');
  iconPosition = input<'left' | 'right'>('left');
  color = input<'white' | null>(null);
  fullWidth = input<boolean>(false);

  getButtonClasses(): string {
    let baseClasses = 'font-semibold cursor-pointer transition-colors duration-200';
    let sizeClasses = '';
    let varietyClasses = '';
    let colorClasses = '';
    let iconClasses = '';
    let widthClasses = '';

    if (this.color() === 'white') {
      colorClasses = 'text-white';
    }

    if (this.fullWidth()) {
      widthClasses = 'w-full';
    }

    // Size classes
    switch (this.size()) {
      case 'small':
        sizeClasses = 'px-8 py-4 text-sm';
        break;
      case 'medium':
        sizeClasses = 'px-10 py-3 text-base';
        break;
      case 'large':
        sizeClasses = 'px-14 py-4 text-lg';
        break;
    }

    switch (this.variety()) {
      case 'primary':
        varietyClasses = 'rounded-[10px] bg-[#B7FFCE] text-black hover:bg-[#A0E6B8] active:bg-[#8CD9A3]';
        break;
      case 'secondary':
        varietyClasses = 'rounded-[10px] bg-gray-600 text-black hover:bg-gray-700 active:bg-gray-800';
        break;
      case 'tertiary':
        varietyClasses = 'rounded-[10px] bg-transparent text-white hover:text-white/70 active:text-white/60';
        break;
      case 'link':
        varietyClasses = `
          bg-transparent !text-[#636262] hover:text-black pb-4 !font-medium border-b-1 hover:border-black transition-all duration-300
          ${this.active() ? 'border-black !text-black !font-semibold' : 'border-transparent'}
        `;
        break;
      case 'glass':
        varietyClasses = 'rounded-[10px] bg-transparent border border-white/60 hover:border-white/90 hover:bg-white/10 active:bg-white/20 active:border-white';
        break;
    }
    return `${baseClasses} ${sizeClasses} ${varietyClasses} ${colorClasses} ${widthClasses}`;
  }

  getIconSize(): string {
    switch (this.size()) {
      case 'small':
        return 'w-4 h-4';
      case 'medium':
        return 'w-6 h-6';
      case 'large':
        return 'w-10 h-10';
      default:
        return 'w-5 h-5';
    }
  }

  getIconPixelSize(): number {
    switch (this.size()) {
      case 'small':
        return 16;
      case 'medium':
        return 24;
      case 'large':
        return 40;
      default:
        return 20;
    }
  }

}
