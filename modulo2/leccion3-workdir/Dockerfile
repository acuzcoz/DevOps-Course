FROM node:18-alpine
WORKDIR /app
RUN apk add --no-cache curl git 
COPY package.json ./
RUN npm install
COPY src/ ./src/
EXPOSE 3000
CMD ["npm", "start"]