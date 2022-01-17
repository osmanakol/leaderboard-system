FROM node:14
ENV HOME=/home/app
ENV SERVICE_PATH=services/cron_service
COPY  ${SERVICE_PATH}/package*.json ${SERVICE_PATH}/tsconfig.json $HOME/services/cron_service/
COPY scripts/build-protos.sh /tmp
COPY protos/ $HOME/services/cron_service/protos
WORKDIR ${HOME}/services/cron_service
RUN npm install
COPY services/cron_service/ ${HOME}/services/cron_service
#RUN npm run build
CMD [ "npm", "run", "prod" ]
EXPOSE 50080
