FROM node

WORKDIR /english-app

COPY package.json .

COPY . .

COPY .env.local .

RUN npm install --legacy-peer-deps

EXPOSE 3000

CMD ["npm", "start"]