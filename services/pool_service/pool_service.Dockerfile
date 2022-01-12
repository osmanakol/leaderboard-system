FROM node:14
ENV HOME=/home/app
ENV SERVICE_PATH=services/pool_service
COPY  ${SERVICE_PATH}/package*.json ${SERVICE_PATH}/tsconfig.json $HOME/services/pool_service/
COPY scripts/build-protos.sh /tmp
COPY protos/ $HOME/services/pool_service/protos
WORKDIR ${HOME}/services/pool_service
RUN npm install
COPY services/pool_service/ ${HOME}/services/pool_service
#RUN npm run build
CMD [ "npm", "run", "prod" ]
EXPOSE 50060