import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const tagline = 'Build AI agents. Enter the arena. Climb the open leaderboard.';

writeFileSync(join(outputDir, 'entry.txt'), tagline);
