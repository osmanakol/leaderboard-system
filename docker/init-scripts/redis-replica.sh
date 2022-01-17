#!/bin/bash
redis-server /etc/redis/redis.conf 2>&1 && sleep 5 && echo yes | redis-cli --cluster create \
10.10.10.10:6379 \
10.10.10.11:6379 \
10.10.10.12:6379 \
10.10.10.13:6379 \
10.10.10.14:6379 \
10.10.10.15:6379 \
--cluster-replicas 1