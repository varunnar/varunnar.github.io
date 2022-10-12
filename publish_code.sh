 /* eslint-disable no-console */

rm -rf dist

git add .

git commit -m "updates made "

git push 

npm run build

cd dist

git add -A 

cd ..

git commit -m 'deployment'

git push origin `git subtree split --prefix dist master`:gh-pages --force

cd ..
