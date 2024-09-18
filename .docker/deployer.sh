#!/usr/bin/env sh

set -e

git reset --hard
git clean -df
git checkout develop
git pull origin develop

make build

echo "Done!"
