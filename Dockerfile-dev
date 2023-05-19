FROM node:18-alpine
WORKDIR /app
RUN apk update && apk upgrade
RUN apk add git curl
RUN curl -fsSL "https://github.com/pnpm/pnpm/releases/latest/download/pnpm-linuxstatic-x64" -o /bin/pnpm; chmod +x /bin/pnpm;
COPY . ./
RUN pnpm install --lockfile-only
RUN pnpm fetch --prod
RUN pnpm install --offline -r --prod --shamefully-hoist
ENV PATH ./node_modules/.bin/:$PATH