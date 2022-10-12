 /* eslint-disable no-console */

rm -rf dist

git add .

git commit -m "updates made "

git push 

npm run build

cd dist

git add -A 

git commit -m 'deployment'

git subtree push --prefix dist origin gh-pages

cd ..
