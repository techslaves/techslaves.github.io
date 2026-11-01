# Utsav Garg - AI Security, Cloud-Native Architecture & DevSecOps Portfolio

Personal technical portfolio and cybersecurity hub for **Utsav Garg** (Lead Cloud & AI Security Architect | Staff DevSecOps Engineer), hosted live at [techslaves.github.io](https://techslaves.github.io/).

---

## 🌟 Key Features & Architecture

- **Aesthetic Design**: Inspired by high-performance cybersecurity hubs, featuring ambient background glow accents, glassmorphic panels, and dark/light mode toggle.
- **Interactive Framework Switcher**:
  - 🤖 **OWASP Top 10 for LLMs (2025 Edition)**: Filterable matrix (Prompt Injection, Sensitive Info Disclosure, Supply Chain, Poisoning, Output Handling, Excessive Agency, System Prompt Leakage, Vector & Embedding Weaknesses, Misinformation, Denial of Wallet) with deep-dive technical mitigation modals.
  - 🛡️ **EU NIS 2 Directive & FedRAMP Compliance**: Statutory 24h early warning obligations, €10M / 2% fines, CCB CyFun® 2025 6 core functions (Govern, Identify, Protect, Detect, Respond, Recover), and NIST SP 800-53 controls.
  - ☸️ **Kubernetes & DevSecOps**: EKS zero-downtime rolling upgrades, GitOps (ArgoCD & FluxCD), OPA Gatekeeper / Kyverno, Calico/Cilium network policies, and OIDC GitHub Actions pipelines.
  - 🏗️ **Enterprise Software & FinOps**: 14+ years Java/Spring Boot enterprise backends, Kafka distributed streaming, PostgreSQL HA, and 30% documented AWS cloud savings.
- **End-to-End Zero-Trust Threat Model Pipeline**: Interactive visual map tracing requests from Client ➔ WAF & Prompt Guardrails ➔ MCP Broker ➔ LLM Engine ➔ Vector DB / Tools ➔ AWS Security Hub & SIEM.
- **Interactive Readiness Audit Tool**: 12-point interactive checklist with real-time compliance score meter, category filtering, and one-click **Markdown Audit Report Export (`.md`)**.
- **Open-Source Projects Showcase**: Filterable portfolio featuring `security-hub`, `postgresql-mcp-server`, `GitHub-Actions-Security-Series`, `helm-charts-series`, and `kubernetes-network-policy-recipes`.
- **YouTube Masterclasses Hub**: Integration with [@TechHustlewithUG](https://www.youtube.com/@techhustlewithUG) highlighting the Helm Charts Masterclass and GitHub Actions Security courses.
- **Professional Accreditations**: Docker Certified Associate (DCA) exam strategy and certification roadmap.

---

## 🚀 Local Development

```bash
# Install dependencies
npm ci

# Start local dev server
npm run start

# Build static production bundle
npm run build

# Test local static build
npm run serve
```

---

## 🌐 Deployment

The repository uses automated GitHub Actions (`.github/workflows/deploy.yml`) to build and deploy static assets to the `gh-pages` branch upon pushing to `master` or `main`.
