FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build the application (will be used in production)
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Use environment variable to switch between dev and prod
ENV NODE_ENV=development

# Start development server by default, can be overridden in docker-compose
CMD ["npm", "run", "dev"] 