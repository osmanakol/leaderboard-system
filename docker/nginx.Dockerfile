FROM nginx
RUN rm -rf /etc/nginx/conf.d/default.conf
COPY ../gateway/nginx/* /etc/nginx/conf.d