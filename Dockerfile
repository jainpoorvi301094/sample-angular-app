# Stage 1: Build the Angular application
FROM node:20.15.0 as build-stage

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the project files into the Docker image
COPY . .

# Build the Angular project
RUN npm run build

# Verify the contents of the build directory
RUN ls /app/dist
RUN ls /app/dist/sample-angular-app
