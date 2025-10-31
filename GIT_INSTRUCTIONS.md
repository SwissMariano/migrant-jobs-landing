# Git Push Instructions

## Step 1: Make sure you've created the repository on GitHub
- Go to: https://github.com/new
- Repository name: `migrant-jobs-landing`
- Don't check any boxes (no README, no .gitignore)
- Click "Create repository"

## Step 2: Open Git Bash and navigate to your project
```bash
cd /c/Users/T430/migrant-jobs-landing
```

## Step 3: Run these commands one by one

```bash
# Initialize git (if not already done)
git init

# Add all files
git add -A

# Commit
git commit -m "Initial commit - Dana Rey landing page"

# Set main branch
git branch -M main

# Add remote repository
git remote add origin https://github.com/SwissMariano/migrant-jobs-landing.git

# Push to GitHub (you'll be asked to login)
git push -u origin main
```

## Note:
- When you run `git push`, you'll be prompted to authenticate
- Use your GitHub username: `SwissMariano`
- For password, you'll need a **Personal Access Token** (not your GitHub password)
- To create a token: GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic) → Generate new token

