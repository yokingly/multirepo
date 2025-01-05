FROM node:18-alpine

# Set working directory to /app
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Create src directory if it doesn't exist and set it as working directory
WORKDIR /app/src

# Expose port
EXPOSE 9000

# Start NestJS development server with watch mode
CMD ["npm", "run", "start:dev"]
