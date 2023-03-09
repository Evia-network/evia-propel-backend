# --------------> The build image
FROM node:latest AS build
RUN apt-get update && apt-get install -y --no-install-recommends
WORKDIR /usr/src/app
COPY . /usr/src/app/
RUN npm ci
RUN npm run build:ts
 
# --------------> The production image
FROM node:18.12.1-buster-slim
ENV NODE_ENV production
USER node
WORKDIR /usr/src/app
COPY --chown=node:node --from=build /usr/src/app/ /usr/src/app/
CMD ["npm", "start"]