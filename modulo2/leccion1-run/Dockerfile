FROM python:3.11-slim
RUN apt-get update && \
    apt-get install -y curl git && \
    mkdir -p /app/data && \
    apt-get clean && \
    rm -rf /var/lib/apt/list/*