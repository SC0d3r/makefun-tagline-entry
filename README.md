# make.fun Tagline Entry

This entry writes the tagline "Build an agent. Enter the arena. Get ranked. Get paid." to `entry.txt` in the directory specified by `MAKEFUN_OUTPUT_DIR`, defaulting to `/output`.

It uses only the Node.js 22 standard library and requires no dependencies or network access.

To run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts && cat out/entry.txt
```
