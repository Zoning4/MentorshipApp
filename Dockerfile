# Stage 1: Build the Flutter web application
FROM ghcr.io/cirruslabs/flutter:stable AS build

# Set working directory
WORKDIR /app

# Copy pubspec files and fetch dependencies first for caching
COPY pubspec.* ./
RUN flutter pub get

# Copy the rest of the application files
COPY . .

# Build the app for the web
RUN flutter build web

# Stage 2: Serve the app with Nginx
FROM nginx:alpine

# Copy the built web assets from the previous stage
COPY --from=build /app/build/web /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
