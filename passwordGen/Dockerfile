FROM node:20-alpine
WORKDIR /usr/src/app
COPY package*.json .
RUN npm install 
COPY . .   
EXPOSE 5173
CMD ["npm", "run", "dev"]
# This Dockerfile is for a Node.js application that uses Alpine Linux as the base image.
# Updates scopes in access token of Dockerhub to include `write:packages`, `read:packages`, and `delete:packages`.