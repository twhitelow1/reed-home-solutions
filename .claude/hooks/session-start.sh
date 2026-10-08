#!/bin/bash
# Installs dependencies so cloud sessions can build and preview immediately.
set -euo pipefail

# Only needed in Claude Code on the web; local machines manage their own deps.
if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

cd "${CLAUDE_PROJECT_DIR:-$(dirname "$0")/../..}"
# npm install (not ci) so the cached node_modules from a resumed container is reused.
npm install --no-audit --no-fund
