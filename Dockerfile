FROM node:14 as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ENV REACT_APP_HOST_NAME=http://localhost:5112
RUN npm run build

FROM httpd:2.4
COPY --from=build /app/build /usr/local/apache2/htdocs/
EXPOSE 3000

# Configuration Apache pour écouter sur le port 3000
RUN echo 'Listen 3000' > /usr/local/apache2/conf/extra/httpd-ports.conf
RUN sed -i '/LoadModule slotmem_shm_module modules\/mod_slotmem_shm.so/a Include conf/extra/httpd-ports.conf' /usr/local/apache2/conf/httpd.conf
