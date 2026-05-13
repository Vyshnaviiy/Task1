# 02 - Git & GitHub Basics

## Done When Goal

Create a repo, clone it, create a branch, add a Python file, commit, push, and open a pull request.

## Practice Commands

```bash
# Create an empty repo on GitHub first, then clone it:
git clone https://github.com/YOUR_USERNAME/preboard-practice.git
cd preboard-practice

# Create a feature branch:
git checkout -b add-python-greeting

# Copy this folder's hello.py into your repo, then stage and commit:
git add hello.py
git commit -m "Add Python greeting script"

# Push your branch:
git push origin add-python-greeting
```

After pushing, open GitHub in your browser and click **Compare & pull request**.

## Run the Python File

```bash
python3 hello.py
```
