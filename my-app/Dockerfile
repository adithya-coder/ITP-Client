FROM node:14.15.0-alpine as build
WORKDIR /
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN yarn build
EXPOSE 80
CMD ["yarn", "start"]
