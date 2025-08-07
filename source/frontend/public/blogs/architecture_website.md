# Architecture of the Website

## DevOps Tech Stack

- GitHub Actions for CI/CD
- AWS S3 + CloudFront for static site hosting
- AWS Route 53 for DNS management

## CI/CD Pipeline

The code is pushed to GitHub and a GitHub Actions workflow builds and deploys the site to an S3 bucket. CloudFront serves it globally.

## Why This Stack?

- Cost-effective
- Fast deployments
- Easy to manage via Infrastructure as Code
