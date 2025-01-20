FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY prisma ./prisma/

COPY . .

EXPOSE 3333

CMD ["npm", "run", "start:dev"]
