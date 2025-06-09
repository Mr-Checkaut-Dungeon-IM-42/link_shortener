FROM node:24-alpine3.22 AS base

ADD . /code/frontend
WORKDIR /code/frontend

ENV NEXT_TELEMETRY_DISABLED=1

RUN npm install

FROM base AS debug
CMD ["npm", "run", "dev"]

FROM base AS release
RUN npm run build
CMD ["npm", "run", "start"]
