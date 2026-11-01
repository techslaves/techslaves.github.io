/**
 * Data for Utsav Garg's Personal Portfolio
 * Sourced from LinkedIn (https://www.linkedin.com/in/itsutsavgarg/) and https://techslaves.github.io/
 */

export const personalInfo = {
  name: 'Utsav Garg',
  title: 'Cloud, DevSecOps & Security Architect',
  yearsExperience: '15+',
  tagline: 'Architecting Scalable Cloud-Native Infrastructure, Kubernetes Governance & DevSecOps Automation',
  bio: 'Cloud Engineering, DevSecOps and Security Professional with 15+ years of experience in Software Development, Cloud Security, Compliance, and DevSecOps. Specializing in highly available architectures, Amazon EKS, GitOps, Infrastructure as Code, FinOps cost optimization, and regulatory frameworks (FedRAMP, NIS 2, NIST SP 800-53, RBI).',
  socials: {
    linkedin: 'https://www.linkedin.com/in/itsutsavgarg',
    youtube: 'https://www.youtube.com/@techhustlewithUG',
    github: 'https://github.com/techslaves',
    twitter: 'https://twitter.com/itsutsavgarg',
    email: 'mailto:er.utsavgarg@gmail.com'
  }
};

export const stats = [
  { value: '15+', label: 'Years Experience', subtext: 'Enterprise Cloud & Security' },
  { value: 'Zero-Trust', label: 'Kubernetes Hardening', subtext: 'EKS, OPA, Network Policies' },
  { value: 'FedRAMP & NIS 2', label: 'Compliance Governance', subtext: 'Statutory Security Baselines' }
];

export const expertiseAreas = [
  {
    icon: '🛡️',
    title: 'Cloud Security & Compliance',
    skills: ['FedRAMP', 'EU NIS 2', 'NIST SP 800-53', 'SOC 2', 'SOX', 'AWS Security Hub', 'AWS Config', 'GuardDuty', 'KMS', 'IAM Least Privilege'],
    description: 'Implementing FedRAMP-authorized cloud environments with NIS 2 and NIST-compliant security controls, automated continuous monitoring (ConMon), and robust risk governance.'
  },
  {
    icon: '☸️',
    title: 'Kubernetes & GitOps Automation',
    skills: ['Amazon EKS', 'ArgoCD', 'FluxCD', 'Helm 3', 'Kustomize', 'OPA Gatekeeper', 'Kyverno', 'Calico/Cilium', 'External Secrets'],
    description: 'Leading GitOps-driven multi-tenant EKS cluster management with zero-downtime rolling upgrades, Pod Security Standards, dynamic secrets sync, and network micro-segmentation.'
  },
  {
    icon: '⚡',
    title: 'DevSecOps & CI/CD Pipelines',
    skills: ['GitHub Actions', 'Jenkins', 'OIDC Token Exchange', 'SLSA Provenance', 'Cosign', 'Trivy', 'AquaSec', 'Terraform', 'Terragrunt'],
    description: 'Eliminating static AWS secrets using OpenID Connect (OIDC), automating SAST/container security scanning, and establishing reusable hardened pipeline architectures.'
  }
];

export const keyAchievements = [
  {
    title: 'GitOps & Kubernetes Automation',
    desc: 'Led GitOps-driven EKS cluster management with zero-downtime upgrades, horizontal auto-scaling, and security hardening.'
  },
  {
    title: 'Cloud Security & Compliance Governance',
    desc: 'Implemented FedRAMP-authorized cloud environments with NIS 2 & NIST-compliant security controls, ensuring audit readiness and risk management.'
  },
/*  {
    title: 'Cost Optimization & FinOps (30% Savings)',
    desc: 'Optimized AWS cloud infrastructure spend by 30% through Spot Instances, Savings Plans, right-sizing analysis, and automated storage lifecycle tiering.'
  },*/
/*  {
    title: 'Monolith to Microservices Transition',
    desc: 'Spearheaded mission-critical migration from monolithic legacy systems to decoupled microservices, dramatically improving deployment velocity and fault tolerance.'
  },*/
  {
    title: 'Kubernetes Security & Auditing',
    desc: 'Enforced RBAC, admission webhooks (OPA Gatekeeper), container vulnerability scanning, and default-deny network policies.'
  },
/*  {
    title: 'Technical Educator & Creator',
    desc: 'Founded TechHustlewithUG on YouTube, delivering in-depth courses on Helm Charts, GitHub Actions Security, and Cloud-Native Engineering.'
  }*/
];

export const techStackCategories = [
  {
    name: 'Cloud & Infrastructure',
    items: ['AWS', 'Amazon EKS', 'Amazon MSK', 'AWS EC2/S3/VPC', 'DynamoDB', 'RDS', 'CloudFront', 'Route53']
  },
  {
    name: 'DevOps, GitOps & Containers',
    items: ['Kubernetes', 'Docker', 'Helm', 'ArgoCD', 'FluxCD', 'Terraform', 'Terragrunt', 'Harbor']
  },
  {
    name: 'Security & Compliance',
    items: ['AWS Security Hub', 'AWS Config', 'OPA Gatekeeper', 'External Secrets', 'HashiCorp Vault', 'AquaSec', 'Calico']
  },
  {
    name: 'Software & Data',
    items: ['Java', 'Spring Boot', 'Apache Kafka', 'PostgreSQL', 'Redis', 'Python', 'REST APIs', 'Microservices']
  },
  {
    name: 'CI/CD & Observability',
    items: ['GitHub Actions', 'Jenkins', 'CircleCI', 'Prometheus', 'Grafana', 'ELK Stack', 'AWS CloudWatch']
  }
];

export const portfolioProjects = [
  {
    title: 'Security Hub: FedRAMP & NIS 2',
    category: ' Security & Compliance',
    highlight: true,
    //tag: 'Flagship Platform',
    desc: 'Dedicated dual-standard cybersecurity platform featuring the OWASP Top 10 for LLM Applications (2025 Edition) and the EU NIS 2 Directive with CCB CyFun® 2025 self-assessment.',
    tech: ['FedRAMP', 'EU NIS 2', 'CyFun®', 'AI Security'],
    github: 'https://github.com/techslaves/security-hub',
    //liveUrl: 'https://techslaves.github.io/security-hub/'
  },
/*  {
    title: 'PostgreSQL MCP Server',
    category: 'AI Infrastructure',
    highlight: false,
    tag: 'Open Source',
    desc: 'Hardened Model Context Protocol (MCP) server enabling AI assistants to securely inspect and query PostgreSQL databases with parameterized AST query validation and role-based guards.',
    tech: ['Model Context Protocol', 'PostgreSQL', 'Node.js', 'AI Agents'],
    github: 'https://github.com/techslaves/postgresql-mcp-server',
    liveUrl: null
  },*/
  {
    title: 'GitHub Actions Security Series',
    category: 'DevSecOps',
    highlight: false,
    tag: 'CI/CD Hardening',
    desc: 'Reusable GitHub Actions workflows demonstrating OIDC token exchange with AWS (zero static credentials), secret injection defense, and SLSA Level 3 provenance pipelines.',
    tech: ['GitHub Actions', 'AWS OIDC', 'Cosign', 'Trivy', 'SLSA'],
    github: 'https://github.com/techslaves/GitHub-Actions-Security-Series',
    liveUrl: '/docs/youtube/github-actions-security'
  },
  {
    title: 'Helm Charts Masterclass & Recipes',
    category: 'Kubernetes',
    highlight: false,
    tag: 'Cloud-Native',
    desc: 'Comprehensive production Helm chart series and repository covering modular templates, subcharts, dynamic secrets delivery, and zero-downtime deployments.',
    tech: ['Helm 3', 'Kubernetes', 'EKS', 'GitOps'],
    github: 'https://github.com/techslaves/helm-charts-series',
    liveUrl: '/docs/youtube/helm-series'
  },
/*  {
    title: 'Kubernetes Network Policy Recipes',
    category: 'Kubernetes Security',
    highlight: false,
    tag: 'Zero-Trust',
    desc: 'Battle-tested network policy recipes for zero-trust pod micro-segmentation, egress restriction, and multi-tenant namespace isolation.',
    tech: ['Calico', 'Cilium', 'Kubernetes', 'Network Policies'],
    github: 'https://github.com/techslaves/kubernetes-network-policy-recipes',
    liveUrl: null
  },*/
  {
    title: 'AWS Serverless User Management',
    category: 'Cloud Engineering',
    highlight: false,
    tag: 'Serverless',
    desc: 'Production serverless user directory and authentication backend using AWS Cognito, API Gateway, Lambda, and DynamoDB.',
    tech: ['AWS Lambda', 'DynamoDB', 'Cognito', 'API Gateway'],
    github: 'https://github.com/techslaves/aws-serverless-user-management',
    liveUrl: null
  }
];

export const youtubePlaylists = [
  {
    title: 'Helm Series Masterclass',
    badge: 'YouTube Series',
    description: 'Master Helm charts from the fundamentals to advanced multi-environment production architectures.',
    link: '/docs/youtube/helm-series',
    externalLink: 'https://www.youtube.com/@techhustlewithUG'
  },
  {
    title: 'GitHub Actions Security Series',
    badge: 'Security Series',
    description: 'Learn how to secure CI/CD pipelines, eliminate permanent IAM keys via OIDC, and prevent supply chain attacks.',
    link: '/docs/youtube/github-actions-security',
    externalLink: 'https://www.youtube.com/@techhustlewithUG'
  }
];

export const blogPosts = [
  {
    title: 'Harbor High Availability Deployment on Kubernetes',
    date: 'May 14, 2021',
    description: 'Step-by-step architecture guide for deploying enterprise-grade, highly available Harbor container registry on Kubernetes.',
    link: '/blog/2021/05/14/Harbor High Availability deployment on Kubernetes'
  },
  {
    title: 'PostgreSQL High Availability Deployment on Kubernetes',
    date: 'May 15, 2021',
    description: 'Configuring resilient PostgreSQL clustering on Kubernetes with automated failover and persistent volume management.',
    link: '/blog/2021/05/15/PostgeSQL High Availability deployment on Kubernetes'
  },
  {
    title: 'Dynamic Volume Provisioning NFS on Kubernetes',
    date: 'May 6, 2021',
    description: 'Setting up NFS dynamic storage provisioner for Kubernetes workloads requiring shared persistent storage.',
    link: '/blog/2021/05/06/Dynamic Volume Provisioning NFS'
  },
  {
    title: 'Dive - Into Your Docker Images',
    date: 'April 25, 2021',
    description: 'Analyzing Docker image layer contents and optimizing image sizes for faster, more secure CI/CD builds.',
    link: '/blog/2021/19/25/Dive - Into your docker images'
  }
];
