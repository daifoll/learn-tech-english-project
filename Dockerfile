FROM node

WORKDIR /english-app

COPY package.json .

COPY . .

COPY .env.local .

RUN npm install --legacy-peer-deps
RUN npm run build

EXPOSE 3000

CMD [ "npx", "serve", "build" ]