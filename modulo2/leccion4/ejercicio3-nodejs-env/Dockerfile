FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY server.js ./
EXPOSE 3000
ENV NODE_ENV=production
ENV PORT=3000
CMD [ "npm", "start" ]