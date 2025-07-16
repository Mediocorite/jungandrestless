# Base image
FROM node:20 AS base

# Set working directory
WORKDIR /app

# Install dependencies (including dev dependencies)
COPY package.json package-lock.json ./
RUN npm install

# Expose port
EXPOSE 4321

# Default command for the container
CMD ["npm", "run", "dev"]

