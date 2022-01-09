FROM mongo
COPY ./init-scripts/* /docker-entrypoint-initdb.d