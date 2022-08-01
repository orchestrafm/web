FROM node:13.14.0-alpine3.11 as builder

COPY package.json package-lock.json ./

RUN npm ci && mkdir /app-build && mv ./node_modules ./app-build

WORKDIR /app-build

COPY . .

RUN npm cache clean --force

RUN npm run build

FROM scratch

COPY --from=builder /app-build/dist /app/
