From node:10
WORKDIR ./front_work

COPY ./package*.json ./

RUN npm install
COPY ./ ./

EXPOSE 3000

RUN ls

CMD [ "npm", "start" ]