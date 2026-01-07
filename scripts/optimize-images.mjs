import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const projectRoot = process.cwd();

async function exists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function ensureDir(dirPath) {
  await fs.mkdir(dirPath, { recursive: true });
}

async function writeWebpVariants({
  inputAbs,
  outputDirAbs,
    outputBaseName,
    widths,
  quality = 72,
  effort = 5,
  webpOptions = {},
}) {
  if (!(await exists(inputAbs))) {
    throw new Error(`Input file not found: ${inputAbs}`);
  }

  await ensureDir(outputDirAbs);

  const tasks = widths.map(async (width) => {
    const outFile = path.join(outputDirAbs, `${outputBaseName}-${width}.webp`);
    const pipeline = sharp(inputAbs)
      .rotate()
      .resize({ width, withoutEnlargement: true })
      .webp({ quality, effort, smartSubsample: true, ...webpOptions });

    await pipeline.toFile(outFile);
    return outFile;
  });

  return Promise.all(tasks);
}

async function optimizePngInPlace({ inputAbs, maxSize }) {
  if (!(await exists(inputAbs))) {
    throw new Error(`Input file not found: ${inputAbs}`);
  }

  const tmpAbs = `${inputAbs}.tmp`;

  await sharp(inputAbs)
    .rotate()
    .resize({ width: maxSize, height: maxSize, fit: 'inside', withoutEnlargement: true })
    .png({ compressionLevel: 9, palette: true, adaptiveFiltering: true })
    .toFile(tmpAbs);

  await fs.rename(tmpAbs, inputAbs);
}

async function main() {
  const contactUsDir = path.join(projectRoot, 'public', 'assets', 'images', 'contact-us');
  const homeDir = path.join(projectRoot, 'public', 'assets', 'images', 'home');
  const aboutUsDir = path.join(projectRoot, 'public', 'assets', 'images', 'about-us');
  const aboutUsIconsDir = path.join(projectRoot, 'public', 'assets', 'icons', 'about-us');
  const servicesDir = path.join(projectRoot, 'public', 'assets', 'images', 'services');
  const servicesIconsDir = path.join(projectRoot, 'public', 'assets', 'icons', 'services');

  await writeWebpVariants({
    inputAbs: path.join(contactUsDir, 'contact-us-form-cover.jpg'),
    outputDirAbs: contactUsDir,
    outputBaseName: 'contact-us-form-cover',
    widths: [360, 400, 480, 640, 768, 960, 1200],
    quality: 70,
    effort: 6,
  });

  await writeWebpVariants({
    inputAbs: path.join(contactUsDir, 'contact-us-info-cover.jpg'),
    outputDirAbs: contactUsDir,
    outputBaseName: 'contact-us-info-cover',
    widths: [640, 960, 1440],
    quality: 72,
  });

  await optimizePngInPlace({
    inputAbs: path.join(projectRoot, 'public', 'assets', 'icons', 'shared', 'arrow-upper-right.png'),
    maxSize: 64,
  });

  // Home page images
  await writeWebpVariants({
    inputAbs: path.join(homeDir, 'group-people.jpg'),
    outputDirAbs: homeDir,
    outputBaseName: 'group-people',
    widths: [360, 640, 768, 1074, 1440, 1920, 2560, 3200],
    quality: 80,
    effort: 6,
  });

  await writeWebpVariants({
    inputAbs: path.join(homeDir, 'voice-translator-app-template.png'),
    outputDirAbs: homeDir,
    outputBaseName: 'voice-translator-app-template',
    widths: [360, 480, 720, 1028],
    quality: 82,
    effort: 6,
    webpOptions: { nearLossless: true },
  });

  await writeWebpVariants({
    inputAbs: path.join(homeDir, 'wallet-app-ui-kit.png'),
    outputDirAbs: homeDir,
    outputBaseName: 'wallet-app-ui-kit',
    widths: [360, 480, 720, 978],
    quality: 82,
    effort: 6,
    webpOptions: { nearLossless: true },
  });

  await writeWebpVariants({
    inputAbs: path.join(homeDir, 'different-tech-gadgets.png'),
    outputDirAbs: homeDir,
    outputBaseName: 'different-tech-gadgets',
    widths: [360, 480, 720, 1029],
    quality: 82,
    effort: 6,
    webpOptions: { nearLossless: true },
  });

  await writeWebpVariants({
    inputAbs: path.join(homeDir, 'blog-frame-1.png'),
    outputDirAbs: homeDir,
    outputBaseName: 'blog-frame-1',
    widths: [320, 430, 553],
    quality: 82,
    effort: 6,
  });

  await writeWebpVariants({
    inputAbs: path.join(homeDir, 'blog-frame-2.png'),
    outputDirAbs: homeDir,
    outputBaseName: 'blog-frame-2',
    widths: [320, 430, 554],
    quality: 82,
    effort: 6,
  });

  await writeWebpVariants({
    inputAbs: path.join(homeDir, 'blog-frame-3.png'),
    outputDirAbs: homeDir,
    outputBaseName: 'blog-frame-3',
    widths: [320, 430, 553],
    quality: 82,
    effort: 6,
  });

  // About Us page images
  await writeWebpVariants({
    inputAbs: path.join(aboutUsDir, 'carouse-cover.jpg'),
    outputDirAbs: aboutUsDir,
    outputBaseName: 'carouse-cover',
    widths: [640, 800, 960, 1200, 1440, 1600, 1920, 2560, 3200],
    quality: 76,
    effort: 6,
  });

  await writeWebpVariants({
    inputAbs: path.join(aboutUsDir, 'about-company-cover.jpg'),
    outputDirAbs: aboutUsDir,
    outputBaseName: 'about-company-cover',
    widths: [550, 800, 1100, 1600],
    quality: 78,
    effort: 6,
  });

  await writeWebpVariants({
    inputAbs: path.join(aboutUsDir, 'about-team-cover.jpg'),
    outputDirAbs: aboutUsDir,
    outputBaseName: 'about-team-cover',
    widths: [500, 640, 1000],
    quality: 80,
    effort: 6,
  });

  await writeWebpVariants({
    inputAbs: path.join(aboutUsIconsDir, 'top-chart.png'),
    outputDirAbs: aboutUsIconsDir,
    outputBaseName: 'top-chart',
    widths: [350, 450, 700],
    quality: 82,
    effort: 6,
    webpOptions: { nearLossless: true },
  });

  // Services page images
  await writeWebpVariants({
    inputAbs: path.join(servicesDir, 'our-services-cover.jpg'),
    outputDirAbs: servicesDir,
    outputBaseName: 'our-services-cover',
    widths: [640, 800, 960, 1200, 1440, 1600, 1920, 2560, 3200],
    quality: 76,
    effort: 6,
  });

  await writeWebpVariants({
    inputAbs: path.join(servicesDir, 'quote-cover.jpg'),
    outputDirAbs: servicesDir,
    outputBaseName: 'quote-cover',
    widths: [480, 640, 720, 960, 1200, 1440, 1920, 2560],
    quality: 76,
    effort: 6,
  });

  // Services icons
  await writeWebpVariants({
    inputAbs: path.join(servicesIconsDir, 'laptop.png'),
    outputDirAbs: servicesIconsDir,
    outputBaseName: 'laptop',
    widths: [200, 232, 300, 400],
    quality: 82,
    effort: 6,
    webpOptions: { nearLossless: true },
  });

  await writeWebpVariants({
    inputAbs: path.join(servicesIconsDir, 'web-skeleton.png'),
    outputDirAbs: servicesIconsDir,
    outputBaseName: 'web-skeleton',
    widths: [200, 232, 300, 400],
    quality: 82,
    effort: 6,
    webpOptions: { nearLossless: true },
  });

  await writeWebpVariants({
    inputAbs: path.join(servicesIconsDir, 'person-chart.png'),
    outputDirAbs: servicesIconsDir,
    outputBaseName: 'person-chart',
    widths: [200, 232, 300, 400],
    quality: 82,
    effort: 6,
    webpOptions: { nearLossless: true },
  });

  console.log('✅ Image optimization complete.');
  console.log('- Generated WebP variants in public/assets/images/contact-us');
  console.log('- Generated WebP variants in public/assets/images/home');
  console.log('- Generated WebP variants in public/assets/images/about-us');
  console.log('- Generated WebP variants in public/assets/icons/about-us');
  console.log('- Generated WebP variants in public/assets/images/services');
  console.log('- Generated WebP variants in public/assets/icons/services');
  console.log('- Optimized public/assets/icons/shared/arrow-upper-right.png');
}

main().catch((err) => {
  console.error('❌ Image optimization failed');
  console.error(err);
  process.exitCode = 1;
});
