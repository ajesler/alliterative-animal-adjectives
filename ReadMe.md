# Alliterative Animal Adjectives

A simple generator for alliterative animal ajective combinations, such as you might use for naming your soccer team


## Publishing updates via GitHub pages

```
git commit -am "Save local changes" # On master
git checkout gh-pages

npm run build

git add -f build
git commit -am "build@<master-head-commit>"
git filter-branch -f --prune-empty --subdirectory-filter build
git push -f origin gh-pages
git checkout -
```
