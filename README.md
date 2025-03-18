# Elite Space

A smart apartment tenant portal that solve the issues related to tenant experience and tenant retention for apartment companies.

Features:

- Digital lease signing & renewals within the app.
- Control smart locks & Automated access control for guests (generate temporary digital keys).
- Easy one-tap reporting for noise complaints or neighbor disturbances.
- AI-based detection of repeated complaints and escalation to management.
- Smart package locker integration for secure pickup
- Temporary guest parking permits issued via the app.

## 🚀 Getting Started

### 📦 Prerequisites

Make sure you have these installed:

- Node.js (v18 or higher)
- npm or yarn
- Git

### 🛠 Local Setup

1. Clone the repository:
   `git clone git@github.com:EliteSpace-DSD/EliteSpace.git`
2. Install dependencies: `npm i`
3. Run the development server: `npm run dev`
4. Set up environment variables (if needed)

Your app will run at http://localhost:5173/

## 🧪 Running Tests with Vitest

We use Vitest for testing. Follow these steps to run tests in the project.
✅ Run All Tests

```
npx vitest
```

🎯 Run a Specific Test File
To run a test for a specific component (e.g., Button.spec.tsx):

```
npx vitest /components/Button.spec.tsx
```

Read docs: https://vitest.dev/

## 🌳 Git Branching & Workflow

🔹 Creating branch from JIRA

1. Go to the JIRA issue you're working on
2. Click on "Create branch" in Jira (on the issue page)
3. Go to the terminal and run: `git fetch`
4. Switch to the newly created branch: `git checkout ES-21-Create-README`

This automatically links your branch, commits and PRs to the JIRA issue.

🔹 Creating a branch manually
If creating manually, always branch from main:

```
git checkout main
git pull
git checkout -b <issue-key>-<short-description>
```

Example: `git checkout -b ES-21-Create-README`

Include the Jira issue key (e.g., ES-21) to automatically link your branch to the issue. This helps track progress, commits, and PRs directly in Jira.

## 🔄 Committing Changes (Conventional Commits)

### Use Conventional Commit messages for consistency:

Format: `git commit -m "<type>(optional scope): <description>"`

Examples:

```
git commit -m "feat(guest): add temporary guest parking feature"
git commit -m "fix(auth): resolve login redirect issue"
git commit -m "docs(readme): update local setup instructions"
```

### Commit Types:

- feat: New feature
- fix: Bug fix
- docs: Documentation changes
- style: Style-related changes
- refactor: Code refactoring
- chore: Maintenance tasks
- test: Adding/improving tests

Read more here: https://www.conventionalcommits.org/en/v1.0.0/

## 🔀 Pushing & Merging Branches

1. Rebase Your Branch (Before Pushing)

Before pushing your changes, ensure your branch is up-to-date with main:

```
git checkout main
git pull origin main

git checkout <your-branch-name>
git rebase main
```

Resolve any conflicts if they arise.

Continue rebasing after resolving conflicts:

```
git add .
git rebase --continue
```

2. Push Your Branch

`git push origin <your-branch-name>`

3. Open a Pull Request (PR):

- Navigate to GitHub repo.
- Click Compare & pull request.
- Provide a descriptive title and description.
- Link the related JIRA issue (e.g., APT-101).

4. Request a Review:

- Assign the PR to a reviewer (1 leads and 1 other team member).
- Address comments promptly.
- How to add meaningful comments during code review: https://conventionalcomments.org/

5. Merge After Approval:

- Merge using Squash and Merge option.
- Delete your branch after merging.

## 💬 Comments & Documentation

Inline Comments: Use clear comments to explain complex logic.

PR Descriptions: Always include what was done, why, and how to test. Screenshot of the visual change is always reccommended.

Example PR Description:

```
### Description:
Adds temporary guest parking passes, allowing tenants to generate passes valid for 24 hours.

### How to test:
- Log in as a tenant.
- Go to Guest Management > Parking Passes.
- Add guest name and license plate.
- Verify pass generation and expiration after 24 hours.

**Attach screenshot if UI change**
```
