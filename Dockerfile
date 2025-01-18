# Stage 1: Build the Backend (Spring Boot)
FROM maven:3.8.5-openjdk-17 AS backend-build

# Set the working directory in the container for backend
WORKDIR /backend

# Copy the backend pom.xml and source code
COPY backend/backend/pom.xml .
COPY backend/backend/src ./src

# Build the backend application (skip tests for faster build)
RUN mvn clean package -DskipTests

# Stage 2: Build the Frontend (React)
FROM node:16 AS frontend-build

# Set the working directory in the container for frontend
WORKDIR /frontend

# Copy package.json and package-lock.json
COPY frontend/package*.json ./

# Install frontend dependencies
RUN npm install

# Copy the rest of the React app files
COPY frontend/ ./

# Build the React app for production
RUN npm run build

# Stage 3: Create the Final Image with both Backend and Frontend
FROM openjdk:17-jdk-slim

# Set the working directory for the final image
WORKDIR /app

# Copy the backend jar file from the backend build stage
COPY --from=backend-build /backend/target/backend-0.0.1-SNAPSHOT.jar backend.jar

# Copy the built React app from the frontend build stage
COPY --from=frontend-build /frontend/build /app/frontend

# Expose the backend port (default Spring Boot port)
EXPOSE 8080

# Expose the frontend port (default Nginx port)
EXPOSE 80

# Start both the backend and frontend:
# First, run the Spring Boot app in the background, then run Nginx to serve the React app
CMD java -jar backend.jar & \
    nginx -g "daemon off;"
