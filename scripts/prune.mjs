/**
 * Post-build cleanup.
 *
 * The theme injects `/archives` and `/series` routes unconditionally. This site
 * does not use either, so remove the built pages and their sitemap entries.
 */
import { existsSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const DIST = "dist";
const REMOVED = ["archives", "series"];

for (const dir of REMOVED) {
  const target = join(DIST, dir);
  if (existsSync(target)) {
    rmSync(target, { recursive: true, force: true });
    console.log(`prune: removed ${target}`);
  }
}

// Sitemap files are sitemap-index.xml plus one or more sitemap-N.xml shards.
for (const file of readdirSync(DIST).filter(f => /^sitemap.*\.xml$/.test(f))) {
  const path = join(DIST, file);
  const before = readFileSync(path, "utf8");
  const after = before.replace(
    new RegExp(`\\s*<url>(?:(?!</url>).)*/(?:${REMOVED.join("|")})/(?:(?!</url>).)*</url>`, "gs"),
    ""
  );
  if (after !== before) {
    writeFileSync(path, after);
    console.log(`prune: cleaned ${path}`);
  }
}
