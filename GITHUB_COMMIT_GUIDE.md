# GitHub Commit Guide

Use this guide to publish the Team Directory as its own GitHub repository and
build a history with at least three meaningful feature commits. Make and test
each change before committing it; do not create commits just to pad the count.

## 1. Create a separate repository for this project

The project folder currently sits inside another Git repository. Run these
commands from the `team-directory-app` folder so your user-folder files are not
included in the GitHub repository:

```powershell
git init
git rev-parse --show-toplevel
```

Confirm the second command prints the full path ending in
`Downloads\Encabo_Practical\team-directory-app`. If it does not, stop before
staging or pushing anything.

Create a new, empty repository on GitHub, then make the initial project commit:

```powershell
git add .
git status
git commit -m "Build team directory app baseline"
git branch -M main
git remote add origin https://github.com/katrinaelise/katrinaelise.encabo@cvsu.edu.ph.git
git push -u origin main
```

git config --global user.name "Your Name"
git config --global user.email "your-github-email@example.com"



Replace the remote URL with your repository URL. The project's `.gitignore`
excludes `node_modules` and `dist`, so those generated folders should not be
uploaded.

## 2. Add three feature commits

Implement each feature separately. After each one, run `npm run build`, inspect
`git status`, and commit only the files for that feature.

### Commit 1: Search by name, role, and company

Extend the directory search to match a member's name, role, or company, rather
than only their name.

```powershell
npm run build
git add src/pages/Users.jsx
git commit -m "feat(users): search by name role and company"
git push
```

### Commit 2: Filter to favorite members

Add a control on the directory page to show only favorited members, while
keeping the existing search usable with the filter.

```powershell
npm run build
git add src/pages/Users.jsx
git commit -m "feat(users): add favorites-only filter"
git push
```

### Commit 3: Improve the no-results experience

When a search or filter has no matches, show a helpful empty state and a button
to clear the search and return to the full directory.

```powershell
npm run build
git add src/pages/Users.jsx
git commit -m "feat(users): add clearable empty state"
git push
```

## 3. Show the commit history

Check the commits locally:

```powershell
git --no-pager log --oneline -5
```

The repository page on GitHub will show the same history after you push. Add a
short README section or screenshots describing the features you implemented
for a stronger project showcase.
