# FROM node:18-alpine AS builder
FROM --platform=$TARGETPLATFORM registry.access.redhat.com/ubi9/nodejs-20 AS builder
USER root
RUN mkdir -p /app && chown 1001:1001 /app
USER 1001
RUN npm install -g yarn

ARG BACKEND_URL=http://localhost:8080
ENV VITE_BACKEND_BASE_URL=${BACKEND_URL}

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .

RUN echo "VITE_BACKEND_BASE_URL=$VITE_BACKEND_BASE_URL" > .env
RUN yarn build

FROM node:18-alpine
RUN yarn global add serve
COPY --from=builder /app/dist /app/dist

CMD ["sh", "-c", "serve -s /app/dist -l 3000 --single"]
EXPOSE 3000