FROM node:19-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

USER node

EXPOSE 3001

CMD ["node", "dist/main"]
