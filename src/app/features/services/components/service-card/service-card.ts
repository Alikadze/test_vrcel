import { Component, input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-service-card',
  imports: [
    TranslatePipe
  ],
  templateUrl: './service-card.html',
  styleUrl: './service-card.scss',
})
export class ServiceCard {
  info = input.required<{
    title: string;
    description: string;
    icon: string;
    position: string;
  }>();

  private readonly iconWidths = [200, 232, 300, 400];
  private readonly defaultIconWidth = 232;
  readonly iconSizes = '232px';

  getOptimizedIconSrc(iconSrc: string): string {
    const normalized = this.normalizeAssetPath(iconSrc);
    const baseName = this.getBaseNameWithoutExtension(normalized);
    return `/assets/icons/services/${baseName}-${this.defaultIconWidth}.webp`;
  }

  getOptimizedIconSrcset(iconSrc: string): string {
    const normalized = this.normalizeAssetPath(iconSrc);
    const baseName = this.getBaseNameWithoutExtension(normalized);
    return this.iconWidths
      .map((w) => `/assets/icons/services/${baseName}-${w}.webp ${w}w`)
      .join(', ');
  }

  private normalizeAssetPath(assetPath: string): string {
    if (assetPath.startsWith('/')) return assetPath;
    if (assetPath.startsWith('assets/')) return `/${assetPath}`;
    return assetPath;
  }

  private getBaseNameWithoutExtension(assetPath: string): string {
    const fileName = assetPath.split('/').pop() ?? assetPath;
    const dotIndex = fileName.lastIndexOf('.');
    return dotIndex === -1 ? fileName : fileName.slice(0, dotIndex);
  }
}
