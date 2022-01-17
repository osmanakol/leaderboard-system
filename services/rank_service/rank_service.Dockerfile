FROM node:14
ENV HOME=/home/app
ENV SERVICE_PATH=services/rank_service
COPY  ${SERVICE_PATH}/package*.json ${SERVICE_PATH}/tsconfig.json $HOME/services/rank_service/
COPY scripts/build-protos.sh /tmp
COPY protos/ $HOME/services/rank_service/protos
WORKDIR ${HOME}/services/rank_service
RUN npm install
COPY services/rank_service/ ${HOME}/services/rank_service
#RUN npm run build
CMD [ "npm", "run", "prod" ]
EXPOSE 50070
