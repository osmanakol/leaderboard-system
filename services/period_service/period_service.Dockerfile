FROM node:14
ENV HOME=/home/app
ENV SERVICE_PATH=services/period_service
COPY  ${SERVICE_PATH}/package*.json ${SERVICE_PATH}/tsconfig.json $HOME/services/period_service/
COPY scripts/build-protos.sh /tmp
COPY protos/ $HOME/services/period_service/protos
WORKDIR ${HOME}/services/period_service
RUN npm install
COPY services/period_service/ ${HOME}/services/period_service
#RUN npm run build
CMD [ "npm", "run", "prod" ]
EXPOSE 50040
