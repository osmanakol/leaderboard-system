FROM node:14
ENV HOME=/home/app
COPY package*.json tsconfig.json $HOME/api/
WORKDIR $HOME/api
RUN npm install
COPY . $HOME/api
RUN npm run build
CMD [ "npm", "run", "prod" ]
EXPOSE 30000
