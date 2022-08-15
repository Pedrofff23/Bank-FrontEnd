FROM nginx:alpine

COPY /dist/untitled /usr/share/nginx/html
EXPOSE 8080
