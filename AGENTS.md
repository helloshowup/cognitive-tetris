# AGENTS.md — cognitive-tetris

Operating guide for autonomous agents (Antigravity, Claude Code, and
anything else that reads `AGENTS.md`).

<!-- shared-agent-baseline:start -->
## Shared baseline — every ND Agency project

This block is identical in every project. It is a floor, not a cage: extend it
per project, don't quietly contradict it. Anything below this block that is
specific to *this* repo wins on specifics — but never on the six rules.

### Read in this order

1. **`CLAUDE.md` in this folder** — the `vercel-wiring` block names the GitHub repo,
   the Vercel project and its id, the production branch, and this project's env vars.
   The `Styling` block says whether this project is on Padkleur or exempt.
2. **This file**, for how to behave.
3. **`_docs/vercel-standardisation-audit-2026-08-26.md`** in the Projects workspace,
   for how the ten projects fit together.
4. **`c:\Users\User\Projects\.agents\rules\ui-post-edit-test-protocol.md`** for the mandatory standard test procedure after any UI edits.

### The seven rules that are not yours to change

1. **Commit as `132871062+helloshowup@users.noreply.github.com`.** It is the global git
   identity. A commit from an email GitHub cannot resolve to an account deploys as
   `BLOCKED` on Vercel, while the push itself looks completely fine. This cost four
   projects a silent outage on 2026-08-26.
2. **`main` is protected. You cannot push to it.** `enforce_admins` is on, so this binds
   Bryce too. Branch → push → PR → CI green → merge. A direct push returns
   `GH006: Protected branch update failed`. That is the guard working — never force it.
3. **Never commit a secret.** `.vercel/`, `.env`, `.env.local` are gitignored in every
   repo. `vercel link` writes a `VERCEL_OIDC_TOKEN` into `.env.local`; that is expected
   and must stay ignored. Values live in `_secrets/.env`; the map is
   `_secrets/vercel-passwords.md`. Never paste a secret into chat.
4. **Consume the design system, never edit it.** Changes go upstream to
   `nd-design-system` and get re-synced. Editing a vendored copy means the next sync
   silently reverts you.
5. **No dry runs, no fixtures, no rehearsal artefacts.** Verify by doing the real thing
   and reading the real result. Claude cannot delete files here, so every scratch
   artefact becomes a hand-clean chore for Bryce.
6. **Fail loudly.** Bryce has AuDHD and a silent fallback is worse than an error — it
   creates a digital object-permanence problem. If something cannot work, say so and
   stop. Do not degrade gracefully without saying you did.
7. **Always run the standard test procedure after UI edits.** The 4-gate verification protocol (`c:\Users\User\Projects\.agents\rules\ui-post-edit-test-protocol.md`) is mandatory. Execute it immediately after modifying any frontend UI, markup, or stylesheets.

### How anything gets to production

Push to the production branch named in `CLAUDE.md` → the Vercel GitHub app builds it.
Any other branch → preview. There is no manual deploy step and no `vercel --prod`.
If you find a `deploy.ps1` or similar, it is legacy: it produces deployments with
`ref=-` that git cannot account for, which is exactly how `nd-agency`'s repo went stale
for eight days without anyone noticing.

### Suggested agent personas

Not roles for their own sake. Each maps to a failure mode this workspace has *already*
produced, and each has a stop condition, because the expensive mistakes here are the
confident ones.

#### Release Engineer
**Owns:** Vercel project config, env vars, branch protection, CI, rollback.
**Invoke for:** any deploy, any env change, any red CI run, any `BLOCKED` deployment.
**Why it exists:** the three worst failures on 2026-08-26 were all invisible in the
build log — commits Vercel would not attribute, a serverless function gitignored as a
build artifact so git deploys failed the function-pattern check, and a repo root with
no `.vercelignore` that would have published 144 internal files including two
`CLAUDE.md` files and a script naming the secrets path.
**Stops when:** a change would weaken a security control, publish something previously
unpublished, or require entering a credential. Those are Bryce's.

#### Padkleur Consumer
**Owns:** every use of the design system. Never its source.
**Invoke for:** any visual change, any new component, any reskin.
**Why it exists:** the system only reads as one system if ten apps resist the urge to
special-case. Zero radius, the two colour families never mixed on one axis, one raised
Panel per screen.
**Stops when:** the vocabulary genuinely has no answer. Then it says so and proposes an
upstream change — it does not invent a local token.

#### Secret Keeper
**Owns:** env vars, the password map, anything that could leak.
**Invoke for:** adding or rotating any variable, connecting any store.
**Why it exists:** Spoon Ledger stores its ledger at
`spoon-ledger/{sha256(password)[:32]}/ledger.json`, so changing the password does not
error — it silently points at an empty path and the old data becomes invisible.
**Stops when:** it would have to read, transcribe or invent a secret value. It names the
variable and where the value lives, and lets Bryce enter it.

#### Evidence Checker
**Owns:** any claim that something is done, live, or absent.
**Invoke for:** before reporting completion; before concluding a thing does not exist.
**Why it exists:** a subagent reported `nd-agency`'s production as an 8 KB "Coming Soon"
stub. The live site was the full 77 KB page — production simply was not built from the
branch it read. Acting on that would have replaced a working site with a placeholder.
**Method:** check the running thing, not the file you expect it to have come from.
**Stops when:** two sources disagree. It reports the contradiction with both sides
rather than picking a winner quietly.
<!-- shared-agent-baseline:end -->

## Project-specific

- **Monotropic Cognitive Geometry**: Pure static client-side application modeling AuDHD task management via 14 polyomino shapes and non-chronological capacity matrices.
- **Strict UI Consistency**: Must pass 4-gate verification before any deployment. Zero non-zero border radii, zero blocking alerts (`window.confirm`/`alert`), zero raw undeclared hex codes outside Padkleur tokens.
