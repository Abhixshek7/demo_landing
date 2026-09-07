---
name: Public npm lockfiles
description: Why npm lockfiles from Replit need an explicit public-registry audit for local clones.
---

When preparing a project for local npm development, audit package-lock.json resolved URLs separately from .npmrc and package.json. Replit's package proxy can be embedded directly in locked tarball URLs, and npm registry flags do not necessarily rewrite existing resolved entries.

**Why:** A clean install can still attempt to download from the unavailable Replit proxy even when the project has no Replit-specific npm configuration.

**How to apply:** Keep locked versions and integrity hashes unchanged while normalizing only internal resolved URL hosts to the standard public npm registry, then validate with a fresh install while Replit registry environment variables are unset.