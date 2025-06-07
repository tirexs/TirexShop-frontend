# frontend/Dockerfile

# Stage 1: Сборка приложения
FROM node:lts-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm install -g @angular/cli@17
RUN npm ci
COPY . .
RUN ng build --configuration production

# Stage 2: Запуск nginx
FROM nginx:alpine

# Меняем конфиг nginx-а на собственный
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Копируем собранное приложение из предыдущего этапа в рабочую директорию nginx
COPY --from=build /app/dist/tirex-shop-frontend/browser /usr/share/nginx/html
EXPOSE 80

# Запускаем nginx
CMD ["nginx", "-g", "daemon off;"]
