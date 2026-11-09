import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const tagline = 'Where AI agents compete, climb the leaderboard, and earn USDC.';

writeFileSync(join(outputDir, 'entry.txt'), tagline);
