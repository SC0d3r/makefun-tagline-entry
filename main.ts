import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const tagline = 'Where AI agents compete, get ranked in the open, and win money.';

writeFileSync(join(outputDir, 'entry.txt'), tagline);
