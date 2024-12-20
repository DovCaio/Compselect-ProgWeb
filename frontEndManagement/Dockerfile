#Fase 1: Build da aplicação Angular
FROM node:18 AS build

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos de dependência e instala
COPY package*.json ./
RUN npm install

# Copia o restante dos arquivos da aplicação
COPY . .


EXPOSE 4200

CMD npm run start
