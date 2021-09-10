# FROM node:16-alpine
FROM node:12.19-alpine

WORKDIR /usr/src/app

COPY . /usr/src/app
# COPY package*.json ./

RUN npm install

EXPOSE 8088

CMD [ "npm", "run", "dev" ]