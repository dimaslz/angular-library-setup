find . -name "node_modules" -type d -prune -exec rm -rf '{}' +
find . -name "yarn.lock" -type d -prune -exec rm -rf '{}' +
find . -name ".angular" -type d -prune -exec rm -rf '{}' +