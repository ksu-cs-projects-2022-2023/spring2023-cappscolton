FROM node:20-alpine AS build

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install -g pnpm
RUN pnpm install
RUN pnpm install vite
RUN pnpm install @prisma/client
COPY . .
RUN npx prisma generate --data-proxy

RUN pnpm run build

EXPOSE 3000

CMD ["node", "build"]
