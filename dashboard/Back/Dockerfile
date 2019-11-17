FROM node:10
WORKDIR ./server_work

COPY ./package*.json ./

RUN npm install
COPY ./ ./

EXPOSE 8080

RUN ls

CMD [ "node", "./server/src/server.js" ]