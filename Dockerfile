# Base image for Node.js
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Vue application
RUN npx nuxt generate
RUN npx nuxt build --prerender

# Expose port 80
EXPOSE 80

# Install serve to serve the built application
RUN npm install -g serve

# Command to start the application
CMD ["serve", "-s", ".output/public", "-l", "80"]
