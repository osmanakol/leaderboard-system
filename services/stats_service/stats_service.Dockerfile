FROM node:14
ENV HOME=/home/app
ENV SERVICE_PATH=services/stats_service
COPY  ${SERVICE_PATH}/package*.json ${SERVICE_PATH}/tsconfig.json $HOME/services/stats_service/
COPY scripts/build-protos.sh /tmp
COPY protos/ $HOME/services/stats_service/protos
WORKDIR ${HOME}/services/stats_service
RUN npm install
COPY services/stats_service/ ${HOME}/services/stats_service
#RUN npm run build
CMD [ "npm", "run", "prod" ]
EXPOSE 50050

