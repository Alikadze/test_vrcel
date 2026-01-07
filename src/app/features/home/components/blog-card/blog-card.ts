import { Component, input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-blog-card',
  imports: [
    TranslatePipe
  ],
  templateUrl: './blog-card.html',
  styleUrl: './blog-card.scss',
})
export class BlogCard {
  info = input.required<{ title: string; imgSrc: string }>();

  getOptimizedSrc(imageSrc: string): string {
    const baseName = this.getBaseNameWithoutExtension(imageSrc);
    if (!baseName.startsWith('blog-frame-')) return imageSrc;

    const defaultWidth = baseName === 'blog-frame-2' ? 554 : 553;
    return `/assets/images/home/${baseName}-${defaultWidth}.webp`;
  }

  getOptimizedSrcset(imageSrc: string): string | null {
    const baseName = this.getBaseNameWithoutExtension(imageSrc);
    if (!baseName.startsWith('blog-frame-')) return null;

    const maxWidth = baseName === 'blog-frame-2' ? 554 : 553;
    return `/assets/images/home/${baseName}-320.webp 320w, /assets/images/home/${baseName}-430.webp 430w, /assets/images/home/${baseName}-${maxWidth}.webp ${maxWidth}w`;
  }

  getSizes(): string {
    return '(max-width: 768px) 100vw, 430px';
  }

  private getBaseNameWithoutExtension(assetPath: string): string {
    const fileName = assetPath.split('/').pop() ?? assetPath;
    const dotIndex = fileName.lastIndexOf('.');
    return dotIndex === -1 ? fileName : fileName.slice(0, dotIndex);
  }
}
