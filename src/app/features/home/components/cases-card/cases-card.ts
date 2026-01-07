import { Component, input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-cases-card',
  imports: [TranslatePipe],
  templateUrl: './cases-card.html',
  styleUrl: './cases-card.scss',
})
export class CasesCard {
  card = input.required<{
    title: string;
    description: string;
    imageSrc: string;
    results: {
      number: string;
      text: string
    }[],
    themeColor: string;
  }>();

  private readonly imageConfig: Record<
    string,
    { widths: number[]; defaultWidth: number; width: number; height: number }
  > = {
    'voice-translator-app-template': {
      widths: [360, 480, 720, 1028],
      defaultWidth: 720,
      width: 1028,
      height: 640,
    },
    'wallet-app-ui-kit': {
      widths: [360, 480, 720, 978],
      defaultWidth: 720,
      width: 978,
      height: 529,
    },
    'different-tech-gadgets': {
      widths: [360, 480, 720, 1029],
      defaultWidth: 720,
      width: 1029,
      height: 586,
    },
  };

  getOptimizedSrc(imageSrc: string): string {
    const normalized = this.normalizeAssetPath(imageSrc);
    const baseName = this.getBaseNameWithoutExtension(normalized);
    const config = this.imageConfig[baseName];
    if (!config) return normalized;

    return `/assets/images/home/${baseName}-${config.defaultWidth}.webp`;
  }

  getOptimizedSrcset(imageSrc: string): string | null {
    const normalized = this.normalizeAssetPath(imageSrc);
    const baseName = this.getBaseNameWithoutExtension(normalized);
    const config = this.imageConfig[baseName];
    if (!config) return null;

    return config.widths
      .map((w) => `/assets/images/home/${baseName}-${w}.webp ${w}w`)
      .join(', ');
  }

  getOptimizedSizes(): string {
    // This image renders ~350-430px wide on tablet/desktop; only use 100vw on small screens.
    return '(max-width: 640px) 100vw, 430px';
  }

  getImageWidth(imageSrc: string): number {
    const baseName = this.getBaseNameWithoutExtension(this.normalizeAssetPath(imageSrc));
    return this.imageConfig[baseName]?.width ?? 720;
  }

  getImageHeight(imageSrc: string): number {
    const baseName = this.getBaseNameWithoutExtension(this.normalizeAssetPath(imageSrc));
    return this.imageConfig[baseName]?.height ?? 480;
  }

  private normalizeAssetPath(assetPath: string): string {
    // Existing data uses "assets/..." (no leading slash). Make it absolute.
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
