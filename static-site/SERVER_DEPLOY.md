# 🚀 Развертывание статического сайта на сервере

## Быстрый способ (одна команда)

На сервере выполните:

```bash
curl -sSL https://raw.githubusercontent.com/jzhekatroy/quick-booking-connect/main/static-site/deploy-server.sh | sudo bash
```

Или:

```bash
curl -sSL https://raw.githubusercontent.com/jzhekatroy/quick-booking-connect/main/static-site/deploy-one-liner.sh | sudo bash
```

## Ручной способ

### 1. Подключитесь к серверу

```bash
ssh root@2minutes.ru
```

### 2. Клонируйте репозиторий

```bash
cd /tmp
git clone https://github.com/jzhekatroy/quick-booking-connect.git
cd quick-booking-connect/static-site
```

### 3. Запустите скрипт развертывания

```bash
sudo bash deploy-server.sh
```

Или скопируйте файлы вручную:

```bash
# Создать директорию
sudo mkdir -p /var/www/2minutes.ru

# Скопировать файлы
sudo cp -r index.html offer.html privacy-policy.html cookie-policy.html assets/ /var/www/2minutes.ru/

# Установить права
sudo chown -R www-data:www-data /var/www/2minutes.ru
sudo chmod -R 755 /var/www/2minutes.ru
```

## Обновление сайта

Для обновления просто запустите скрипт развертывания снова:

```bash
curl -sSL https://raw.githubusercontent.com/jzhekatroy/quick-booking-connect/main/static-site/deploy-server.sh | sudo bash
```

Скрипт автоматически:
- ✅ Клонирует последнюю версию из GitHub
- ✅ Скопирует файлы в `/var/www/2minutes.ru`
- ✅ Установит правильные права доступа

## Проверка после развертывания

После развертывания проверьте:

1. **Главная страница**: https://2minutes.ru/
2. **Оферта**: https://2minutes.ru/offer.html
3. **Политика конфиденциальности**: https://2minutes.ru/privacy-policy.html
4. **Cookie**: https://2minutes.ru/cookie-policy.html
5. **Изображения**: https://2minutes.ru/assets/logo.png

## Настройка веб-сервера

Убедитесь, что веб-сервер (Nginx/Angie) настроен правильно:

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name 2minutes.ru www.2minutes.ru;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name 2minutes.ru www.2minutes.ru;
    
    root /var/www/2minutes.ru;
    index index.html;
    
    # SSL сертификаты
    ssl_certificate /etc/letsencrypt/live/2minutes.ru/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/2minutes.ru/privkey.pem;
    
    # Основная локация
    location / {
        try_files $uri $uri/ =404;
    }
    
    # Кэширование статических файлов
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg)$ {
        expires 30d;
        add_header Cache-Control "public, immutable";
    }
}
```

## Устранение проблем

### Ошибка прав доступа

```bash
sudo chown -R www-data:www-data /var/www/2minutes.ru
sudo chmod -R 755 /var/www/2minutes.ru
```

### Ошибка клонирования

Убедитесь, что на сервере установлен git:

```bash
sudo apt update
sudo apt install -y git
```

### Проверка логов

```bash
# Логи Nginx/Angie
sudo tail -f /var/log/angie/2minutes.ru.error.log
sudo tail -f /var/log/angie/2minutes.ru.access.log
```

