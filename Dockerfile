FROM node:alpine AS builder

# 安裝 pnpm
RUN npm install -g pnpm

WORKDIR /app

COPY package.json .
COPY .env .
COPY pnpm-lock.yaml .
COPY . .

RUN pnpm install
RUN pnpm build

FROM nginx:1.21.0

COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80