# Partition React deployment test

This is a standalone React + TypeScript + Vite application for testing Partition's
OpenShip-inspired automatic build detection. It intentionally has no Dockerfile.

Create a new GitHub repository containing the files in this directory, then create
a Partition service with:

- Branch: `main`
- Dockerfile: `Dockerfile` (the missing file triggers automatic detection)
- Health path: `/health`
- Memory: 256 MiB or more

Partition detects Vite, installs from the lockfile, builds `dist`, and serves it
with nginx on port 8080.
