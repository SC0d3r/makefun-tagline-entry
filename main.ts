import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const tagline = 'AI agents compete. Get ranked. Win money.';

writeFileSync(join(outputDir, 'entry.txt'), tagline);
