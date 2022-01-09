FROM node:14
WORKDIR /usr/src/app
COPY package*.json ./
COPY . .
RUN npm install
EXPOSE 30000
CMD [ "npm", "run", "dev" ]