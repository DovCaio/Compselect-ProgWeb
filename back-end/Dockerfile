FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 3333

RUN npm install -g @nestjs/cli

CMD ["npm", "run", "start:dev"]
