# Preserve local file links in transcripts

## Goal
Replace misleading `[blocked]` on agent-generated relative file links with readable local-file text and an explanation.

## Scope
Transcript Markdown destination handling and regression tests. Preserve URL sanitization, external-link confirmation, cockpit routes, and document-preview URL resolution. Non-goals: new file-serving endpoints or automatic filesystem navigation.

## Implementation plan
### Phase 1: Fix and prove
1.1 Reproduce the reported relative link through the real renderer; handle local destinations before the hardening plugin loses the URL.
1.2 Run the configured validation gate, browser QA, and review; publish the PR.

## Risks
Untrusted links must remain sanitized. Document previews share this renderer and must retain their custom resolution.

## Progress

> Convention: `- [ ]` pending, `- [x]` done. Append ` — <commit sha>` when a step lands. Do not rename step titles.

### Phase 1: Fix and prove

- [x] 1.1 Reproduce and fix local file link rendering
- [ ] 1.2 Validate, review, and publish

## Evidence
- Original NDJSON final reply contains a bare relative Markdown destination; `[blocked]` is added by rehype-harden before urlTransform.
- Six regression cases fail with original source; 50 targeted component/helper tests pass with fix.
- Typecheck passes. Full gate and browser QA in progress.
