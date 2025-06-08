FROM node:24-alpine3.22

ADD . /code/frontend
WORKDIR /code/frontend

RUN npm install
RUN npm run build

CMD ["npm", "run", "start"]
