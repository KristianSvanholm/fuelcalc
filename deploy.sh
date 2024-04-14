bun run build
git add dist -f
git commit -m "new deployment"
git subtree push --prefix dist origin gh-pages
