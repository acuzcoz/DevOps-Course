FROM python:3.11-slim
ENV APP_NAME=MiApp
ENV VERSION=1.0.0
ENV DEBUG=true
ENV PORT=5000

COPY app.py /app/
WORKDIR /app
CMD ["python", "app.py"]