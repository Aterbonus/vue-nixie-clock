#!/bin/bash
set -e

BUMP=$(node_modules/.bin/conventional-recommended-bump -p angular)

echo "Using npm version..."
npm version --message "chore(release): %s" $BUMP
echo "Pushing to github..."
git push --follow-tags
echo "Publishing..."
npm publish
echo "Deploying docs..."
bash scripts/deploy-docs.sh