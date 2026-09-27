# 🚀 Express App Dockerized

<div align="center">

  <img src="https://img.shields.io/badge/Node.js-22.x-339933?style=for-the-badge&logo=node.js" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express-5.x-000000?style=for-the-badge&logo=express" alt="Express" />
  <img src="https://img.shields.io/badge/Docker-Ready-2496ED?style=for-the-badge&logo=docker" alt="Docker" />

</div>

A lightweight and modern Express application for managing a simple product cart. It is containerized with Docker so anyone can pull the image and run it locally without worrying about installing Node.js or project dependencies manually.

## ✨ What this app does

This app exposes a few simple API routes:

- `GET /` → welcome message
- `POST /product/add` → add a product to the cart
- `GET /products` → list all products
- `GET /product/:name` → fetch one product
- `DELETE /delete/:name` → remove a product

## Dockerfile explained

The project uses a simple Dockerfile:

```dockerfile
FROM node:22-alpine

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 5000

CMD ["node", "src/app.js"]
```

Here is what each step does:

- `FROM node:22-alpine` → starts from a lightweight Node.js base image
- `WORKDIR /app` → sets the working directory inside the container
- `COPY . .` → copies the project files into the container
- `RUN npm install` → installs the app dependencies
- `EXPOSE 5000` → tells Docker the app listens on port 5000
- `CMD ["node", "src/app.js"]` → starts the Express server when the container runs

## Pull and run the image from Docker Hub

Replace `YOUR_DOCKERHUB_USERNAME` with your actual Docker Hub username and image name.

```bash
docker pull YOUR_DOCKERHUB_USERNAME/express-app:latest
```

Then run it locally:

```bash
docker run -d -p 5000:5000 --name express-app YOUR_DOCKERHUB_USERNAME/express-app:latest
```

Open the app in your browser:

```text
http://localhost:5000
```

## Useful commands

Check if the container is running:

```bash
docker ps
```

View logs:

```bash
docker logs express-app
```

Stop and remove the container:

```bash
docker stop express-app
docker rm express-app
```

## Build locally before pushing

If you want to build the image yourself:

```bash
docker build -t YOUR_DOCKERHUB_USERNAME/express-app:latest .
```

Then push it to Docker Hub:

```bash
docker login
docker push YOUR_DOCKERHUB_USERNAME/express-app:latest
```

## Notes

This app runs on port `5000`, and the container is configured to serve the API directly with Node.js. It is ideal for learning Docker basics and sharing a working application with others.
