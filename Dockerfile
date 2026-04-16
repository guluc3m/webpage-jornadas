FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY ./index.html /usr/share/nginx/html/index.html
COPY ./static /usr/share/nginx/html/static

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

