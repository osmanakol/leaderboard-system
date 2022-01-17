FROM meroje/alpine-nchan:latest@sha256:afc4866b0874369e2652cccd3aff6cba2ca980e97f872a134cc882107b44c7d5
RUN rm -rf /etc/nginx/conf.d/default.conf
COPY gateway/nginx/nginx.conf /etc/nginx/nginx.conf
COPY gateway/nginx/* /etc/nginx/conf.d/
RUN rm -rf /etc/nginx/conf.d/nginx.conf