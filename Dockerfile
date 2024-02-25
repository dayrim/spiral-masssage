# Step 1: Build the Gatsby site
# Use Node 20 as the base image for the build process
FROM node:20 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock if you use yarn)
COPY package*.json ./
# If you're using yarn, uncomment the next line and remove the npm install line
# COPY yarn.lock ./

# Install Gatsby CLI globally
RUN npm install -g gatsby-cli

# Install project dependencies
RUN npm install
# If you're using yarn, uncomment the next line and remove the npm install line
# RUN yarn install

# Copy the rest of your Gatsby site's source files into the container
COPY . .

# Build your Gatsby site
RUN gatsby build

# Step 2: Serve the site with nginx
# Use nginx to serve the static site
FROM nginx:alpine

# Copy the built site from the build stage to the nginx serve directory
COPY --from=build /app/public /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
