Next.js DevOps Assessment
A Next.js application containerized and deployed using Docker, GitHub Actions, and Kubernetes (Minikube) as part of a DevOps internship assessment.

📋 Project Overview
This project demonstrates modern DevOps practices including:
•	🐳 Containerization with Docker using multi-stage builds
•	🔄 CI/CD Pipeline with GitHub Actions
•	📦 Container Registry integration with GitHub Container Registry (GHCR)
•	☸️ Kubernetes Deployment with Minikube

DevOps-Internship-Assessment/
├── Dockerfile
├── README.md
├── .github/workflows/docker.yml
├── k8s/
│ ├── deployment.yml
│ └── service.yml
└── nextjs-app/

## GHCR Image
ghcr.io/krishna-336/nextjs-docker-k8s:latest

## Prerequisites
- Node.js and npm installed
- Docker installed
- Minikube installed and running
- kubectl installed and configured
- GHCR token for GitHub authentication (for pushing images)

Docker
# Build Docker image
docker build -t ghcr.io/krishna-336/nextjs-docker-k8s:latest .

# Run Docker container
docker run -p 3000:3000 ghcr.io/krishna-336/nextjs-docker-k8s:latest
________________________________________
GitHub Actions
The workflow (.github/workflows/docker.yml) automatically:
•	Builds the Docker image on push to the main branch
•	Tags the image as latest
•	Pushes the image to GitHub Container Registry (GHCR)
________________________________________
Kubernetes Deployment (Minikube)
Apply Manifests
kubectl apply -f k8s/deployment.yml
kubectl apply -f k8s/service.yml
Check Pods & Services
kubectl get pods
kubectl get svc

Access the Application
minikube service nextjs-service –url

1.	**Via Minikube IP + NodePort**  
Get Minikube IP:
minikube ip
Via localhost (recommended for WSL / local development)

2. Run the following command, which automatically opens the app in your browser:
minikube service nextjs-service
Or get the URL without opening a browser:
minikube service nextjs-service --url

Open the URL in your browser to see your Next.js app running on Kubernetes.
________________________________________

Kubernetes Manifests Overview

deployment.yml
•	Deploys the Next.js container with 1 replica
•	Includes resource requests and limits
•	Configures liveness and readiness probes
•	Uses imagePullPolicy: Always to fetch the latest image

service.yml
•	Exposes the deployment via a NodePort service
•	Maps container port 3000 to service port 80
•	Allows access from minikube service command
