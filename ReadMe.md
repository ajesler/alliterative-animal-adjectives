# Alliterative Animal Adjectives

A simple generator for alliterative animal ajective combinations, such as you might use for naming your soccer team


## Publishing updates via GitHub pages

```
git commit -am "Save local changes" # On master

npm run build

git checkout gh-pages

mv -f build/* .
git add -p
git commit -am "build@<master-head-sha>"

git push
git checkout -
```
