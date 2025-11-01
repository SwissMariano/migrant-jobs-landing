@echo off
echo Initializing git repository...
git init

echo Adding all files...
git add -A

echo Committing files...
git commit -m "Initial commit - Dana Rey landing page"

echo Setting main branch...
git branch -M main

echo Adding remote repository...
git remote add origin https://github.com/SwissMariano/migrant-jobs-landing.git

echo Pushing to GitHub...
git push -u origin main

echo Done! Your code should now be on GitHub.
pause


