FROM node:14.15.3-alpine
WORKDIR /app
COPY package*.json ./
RUN npm i -G nodemon
RUN npm install
COPY . /app
EXPOSE 4242
CMD ["npm", "start"]
