import sharp from 'sharp';
const background = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#fdfdfb"/>
  <path d="M100 495C280 575 501 490 505 345C509 230 540 140 692 114C827 90 1010 137 1080 199" fill="none" stroke="#c8c8be" stroke-width="1.5"/>
  <g font-family="Arial, Helvetica, sans-serif" font-weight="400" font-size="66" letter-spacing="-2">
    <text x="630" y="241" fill="#2448b8">murilo</text>
    <text x="630" y="322" fill="#b92d24">fernandes</text>
    <text x="630" y="403" fill="#246b46">vaz</text>
  </g>
  <text x="632" y="467" fill="#65655e" font-family="Arial, Helvetica, sans-serif" font-size="22">software engineer</text>
</svg>`);
(async () => {
  const portrait = await sharp('public/personal-portrait.png').resize(440, 410, { fit: 'inside' }).toBuffer();
  await sharp(background).composite([{ input: portrait, left: 112, top: 116 }]).png().toFile('public/social-preview.png');
  const { width, height } = await sharp('public/social-preview.png').metadata();
  console.log(`sharing image: ${width} x ${height}`);
})();
