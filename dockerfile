FROM enginx:alpine

COPY /dist/untitled /usr/share/enginx/html
EXPOSE 8080
