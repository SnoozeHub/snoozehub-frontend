FROM node:16-alpine
WORKDIR /app
RUN apk update && apk upgrade
RUN apk add git curl
RUN curl -fsSL "https://github.com/pnpm/pnpm/releases/latest/download/pnpm-linuxstatic-x64" -o /bin/pnpm; chmod +x /bin/pnpm;
COPY pnpm-lock.yaml ./
RUN pnpm fetch
ADD . ./
RUN pnpm install --offline
ENV PATH ./node_modules/.bin/:$PATH