# 🚀 Руководство по деплою quick-booking-connect

Этот проект представляет собой статический сайт, собранный с помощью Vite + React.

## 📋 Предварительные требования

- Node.js 18+ и npm
- Git
- SSH доступ к серверу
- rsync (обычно уже установлен)

## 🔧 Локальная разработка

```bash
# Клонирование репозитория
git clone https://github.com/jzhekatroy/quick-booking-connect.git
cd quick-booking-connect

# Установка зависимостей
npm install

# Запуск dev-сервера на порту 3001
npm run dev
```

Сайт будет доступен по адресу: http://localhost:3001

## 🚀 Деплой на сервер

### Автоматический деплой (рекомендуется)

```bash
# Перейти в директорию проекта
cd /Users/evgenijtroanov/quick-booking-connect

# Запустить скрипт деплоя
./deploy.sh
```

Скрипт автоматически:
1. ✅ Проверит актуальность репозитория
2. ✅ Установит/обновит зависимости
3. ✅ Соберет проект (`npm run build`)
4. ✅ Загрузит файлы из `dist/` на сервер через rsync
5. ✅ Покажет результат и ссылки для проверки

### Деплой на кастомный сервер

```bash
# Указать другой сервер
./deploy.sh user@host:/path/to/destination
```

### Настройка через переменные окружения

```bash
export REMOTE_USER=root
export REMOTE_HOST=2minutes.ru
export REMOTE_PATH=/var/www/2minutes.ru
./deploy.sh
```

## 📦 Ручной деплой

Если нужно выполнить деплой вручную:

```bash
# 1. Обновить репозиторий
git pull origin main

# 2. Установить зависимости
npm install

# 3. Собрать проект
npm run build

# 4. Загрузить на сервер
rsync -avz --delete dist/ root@2minutes.ru:/var/www/2minutes.ru/
```

## ⚙️ Настройка веб-сервера (Nginx/Angie)

Пример конфигурации для сервера:

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name 2minutes.ru www.2minutes.ru;
    
    # Редирект на HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name 2minutes.ru www.2minutes.ru;
    
    root /var/www/2minutes.ru;
    index index.html;
    
    # SSL сертификаты (Let's Encrypt)
    ssl_certificate /etc/letsencrypt/live/2minutes.ru/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/2minutes.ru/privkey.pem;
    
    # Логирование
    access_log /var/log/angie/2minutes.ru.access.log;
    error_log /var/log/angie/2minutes.ru.error.log;
    
    # Основная локация - SPA роутинг
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Кэширование статических файлов
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2|ttf|eot|mp4|MP4)$ {
        expires 30d;
        add_header Cache-Control "public, immutable";
        access_log off;
    }
    
    # Страница 404
    error_page 404 /404.html;
    location = /404.html {
        internal;
    }
    
    # Безопасность
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    
    # Gzip сжатие
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json;
}
```

## ✅ Проверка после деплоя

После деплоя проверьте:

1. **Главная страница**: https://2minutes.ru/
2. **Оферта**: https://2minutes.ru/offer
3. **Политика конфиденциальности**: https://2minutes.ru/privacy-policy
4. **Cookie**: https://2minutes.ru/cookie-policy
5. **404 страница**: https://2minutes.ru/nonexistent-page
6. **Загрузка изображений и видео**
7. **Работа счетчиков аналитики** (Yandex.Metrika, Top.Mail.Ru)

## 🔍 Отладка

### Проверка логов на сервере

```bash
# Логи Nginx/Angie
tail -f /var/log/angie/2minutes.ru.error.log
tail -f /var/log/angie/2minutes.ru.access.log
```

### Проверка содержимого на сервере

```bash
ssh root@2minutes.ru
ls -la /var/www/2minutes.ru/
```

### Проверка сборки локально

```bash
npm run build
npm run preview
```

## 📝 Структура проекта

```
quick-booking-connect/
├── src/              # Исходный код
├── public/           # Статические файлы
├── dist/             # Собранный проект (создается после build)
├── deploy.sh         # Скрипт деплоя
└── package.json      # Зависимости и скрипты
```

## 🆘 Поддержка

По вопросам обращайтесь:
- Email: i@2minutes.ru
- Telegram: @help_2minutes
- GitHub: https://github.com/jzhekatroy/quick-booking-connect

