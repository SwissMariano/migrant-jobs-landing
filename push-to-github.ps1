Write-Host "Initializing git repository..." -ForegroundColor Green
git init

Write-Host "Adding all files..." -ForegroundColor Green
git add -A

Write-Host "Committing files..." -ForegroundColor Green
git commit -m "Initial commit - Dana Rey landing page"

Write-Host "Setting main branch..." -ForegroundColor Green
git branch -M main

Write-Host "Adding remote repository..." -ForegroundColor Green
git remote add origin https://github.com/SwissMariano/migrant-jobs-landing.git

Write-Host "Pushing to GitHub..." -ForegroundColor Green
git push -u origin main

Write-Host "Done! Your code should now be on GitHub." -ForegroundColor Green


