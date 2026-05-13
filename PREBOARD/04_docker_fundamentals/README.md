# 04 - Docker Fundamentals

## Done When Goal

Write a Dockerfile, build the image, run the container, confirm output, and push to Docker Hub.

## Run It

```bash
cd PREBOARD/04_docker_fundamentals
docker build -t YOUR_DOCKERHUB_USERNAME/preboard-python:latest .
docker run --rm YOUR_DOCKERHUB_USERNAME/preboard-python:latest
```

Expected output:

```text
Hello from inside a Docker container!
```

## Push to Docker Hub

```bash
docker login
docker push YOUR_DOCKERHUB_USERNAME/preboard-python:latest
```
