<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Use relevant project skills

Before making any project change, fix, integration, or enhancement, check the installed skills in `.agents/skills/` and the available skill catalog for relevant guidance. Read the matching `SKILL.md` files before implementation and follow their applicable instructions. Reuse guidance already read in the current conversation unless it has changed.

- Use `shadcn` for UI components, styling, and shadcn-related work.
- Use the relevant `prisma-*` skills for Prisma setup, integration, queries, migrations, or upgrades.
- Use the relevant Better Auth or Neon skills when working on those integrations.
- Apply other installed skills when their scope matches the task; do not load unrelated skills just because they are installed.

If no installed skill applies, proceed using the project conventions and relevant official documentation. Keep these project instructions outside the generated Next.js block above. `CODEX.md` is a symlink to this file; preserve that link.
