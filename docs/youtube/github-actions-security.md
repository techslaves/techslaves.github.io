---
title: GitHub Actions Security
sidebar_position: 3
---

# 🎥 GitHub Actions Security – Series

## **1: GitHub Actions Security – Threat Landscape & Basics**

### 📘 Content

- CI/CD attack surface
- Common CI/CD attacks:
    - Credential leakage
    - Malicious PRs
    - Dependency confusion
    - Runner compromise
- Shared vs self-hosted runners

### 🎬 Demo

- Simple insecure workflow example
- Show how secrets can leak via logs

## **2: GitHub Actions Authentication & Authorization Model**

### 📘 Content

- GitHub identities:
    - `GITHUB_TOKEN`
    - Personal Access Tokens (PATs)
    - GitHub App tokens
- Default permissions of `GITHUB_TOKEN`
- `permissions:` key in workflows
- - Repository, org, and environment-level permissions

### 🎬 Demo

- Compare default vs least-privilege token permissions
- Break a workflow by over-restricting permissions (learning moment)

## 3: Secrets Management & Secure Configuration

### 📘 Content

- GitHub Secrets types:
    - Repository secrets
    - Environment secrets
    - Organization secrets
- Masking secrets in logs
- What NOT to store in secrets
- Secrets vs Variables
- Secret scanning & push protection

### 🎬 Demo

- Secret leakage example
- Proper masking
- Environment-based secret control (prod vs dev)

## 4. Pull Request Security & Untrusted Code

### 📘 Content

- `pull_request` vs `pull_request_target`
- Forked PR risks
- Token access behavior in PRs
- `paths`, `branches`, and conditional execution
- Manual approvals using environments

### 🎬 Demo

- Malicious PR example
- How `pull_request_target` can be dangerous
- Safe PR workflow pattern

## 5: Runner Security – GitHub-hosted vs Self-hosted

### 📘 Content

- GitHub-hosted runner isolation model
- Risks of self-hosted runners
- Ephemeral vs persistent runners
- Network access risks
- Running Actions inside containers

### 🎬 Demo

- Self-hosted runner misconfiguration
- Hardening checklist for self-hosted runners