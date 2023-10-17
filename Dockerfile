# Step 1: Build the React application
FROM node:14 AS build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . ./
RUN npm run build

# Step 2: Serve the React application from Apache
FROM httpd:2.4
COPY --from=build /usr/src/app/dist /usr/local/apache2/htdocs/
