// Regenerates src/data/mecha.ts from data/mecha.csv
// Usage: node scripts/build-mecha-data.mjs
import { readFileSync, writeFileSync } from 'node:fs';

const text = readFileSync(new URL('../data/mecha.csv', import.meta.url), 'utf8').replace(/^﻿/, '');

const rows = [];
let row = [], field = '', q = false;
for (let i = 0; i < text.length; i++) {
  const c = text[i];
  if (q) {
    if (c === '"' && text[i + 1] === '"') { field += '"'; i++; }
    else if (c === '"') q = false;
    else field += c;
  } else if (c === '"') q = true;
  else if (c === ',') { row.push(field); field = ''; }
  else if (c === '\n' || c === '\r') {
    if (c === '\r' && text[i + 1] === '\n') i++;
    row.push(field); field = '';
    if (row.some((v) => v !== '')) rows.push(row);
    row = [];
  } else field += c;
}
if (field || row.length) { row.push(field); rows.push(row); }

const [header, ...body] = rows;
const items = body.map((r) => {
  const o = Object.fromEntries(header.map((h, i) => [h, r[i] ?? '']));
  return {
    id: o.id,
    seriesNo: Number(o.series_no),
    year: Number(o.year),
    seriesJa: o.series_ja,
    seriesEn: o.series_en,
    seriesZh: o.series_zh,
    category: o.category,
    nameJa: o.name_ja,
    nameEn: o.name_en,
    nameZh: o.name_zh,
    components: o.components,
    toyLine: o.toy_line,
    dxRelease: o.dx_release,
    dxPriceJpy: o.dx_price_jpy ? Number(o.dx_price_jpy) : null,
    introZh: o.intro_zh,
    introEn: o.intro_en,
    image: `/mecha/${o.image_file}`,
    wikiJa: o.wiki_ja_url,
  };
});

const out = `// AUTO-GENERATED from data/mecha.csv — run \`node scripts/build-mecha-data.mjs\` after editing the CSV.

export type MechaCategory = 'Robot' | 'Mothership';

export interface Mecha {
  id: string;
  seriesNo: number;
  year: number;
  seriesJa: string;
  seriesEn: string;
  seriesZh: string;
  category: MechaCategory;
  nameJa: string;
  nameEn: string;
  nameZh: string;
  components: string;
  toyLine: string;
  dxRelease: string;
  dxPriceJpy: number | null;
  introZh: string;
  introEn: string;
  /** Put the photo at public/mecha/<file>. Missing files fall back to a typographic card. */
  image: string;
  wikiJa: string;
}

export const MECHA: Mecha[] = ${JSON.stringify(items, null, 2)};
`;
writeFileSync(new URL('../src/data/mecha.ts', import.meta.url), out);
console.log(`Wrote ${items.length} mecha`);
