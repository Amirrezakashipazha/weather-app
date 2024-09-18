FROM nginx:1.25

RUN rm -f /etc/nginx/conf.d/default.conf
RUN rm -f /etc/nginx/nginx.conf

COPY ./.docker/nginx/config/nginx.conf /etc/nginx/nginx.conf
COPY ./.docker/nginx/conf.d /etc/nginx/conf.d/
COPY ./.docker/nginx/entrypoint.sh /usr/local/bin/entrypoint.sh

RUN chmod +x /usr/local/bin/entrypoint.sh

ENTRYPOINT ["nginx","-g","daemon off;"]