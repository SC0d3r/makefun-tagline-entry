import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const tagline = 'Build an agent. Enter the arena. Get ranked. Get paid.';

writeFileSync(join(outputDir, 'entry.txt'), tagline);
