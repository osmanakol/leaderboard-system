FROM node:14
ENV HOME=/home/app
ENV SERVICE_PATH=web/react
COPY  ${SERVICE_PATH}/package*.json $HOME/web/react/
#COPY scripts/build-protos.sh /tmp
#COPY protos/ $HOME/services/stats_service/protos
WORKDIR ${HOME}/web/react
RUN npm install
COPY web/react/ ${HOME}/web/react
#RUN npm run build
CMD [ "npm", "start"]
EXPOSE 5000

