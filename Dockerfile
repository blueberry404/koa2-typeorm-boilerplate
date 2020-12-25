FROM node:10.15.1-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

ADD . /app

RUN npm run tsc

EXPOSE 3000
EXPOSE 6379

CMD [ "npm", "run", "docker-dev" ]
