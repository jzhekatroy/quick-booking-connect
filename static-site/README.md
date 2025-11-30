# Статический сайт 2Minutes

Этот каталог содержит статический HTML-сайт для 2Minutes.

## Структура

```
static-site/
├── index.html              # Главная страница
├── offer.html              # Публичная оферта
├── privacy-policy.html     # Политика конфиденциальности
├── cookie-policy.html      # Политика использования Cookie
├── assets/                 # Ресурсы (логотип, скриншоты)
├── package.json           # Для локальной разработки
├── deploy-server.sh       # Скрипт развертывания на сервере
└── README.md              # Этот файл
```

## Локальная разработка

```bash
cd static-site
npm run dev
```

Сайт будет доступен на http://localhost:3001

## Развертывание на сервере

### Вариант 1: Автоматический (рекомендуется)

На сервере выполните:

```bash
# Скачать и запустить скрипт развертывания
curl -sSL https://raw.githubusercontent.com/jzhekatroy/quick-booking-connect/main/static-site/deploy-server.sh | bash
```

Или вручную:

```bash
# Клонировать репозиторий
git clone https://github.com/jzhekatroy/quick-booking-connect.git
cd quick-booking-connect/static-site

# Запустить скрипт развертывания
sudo bash deploy-server.sh
```

### Вариант 2: Ручной

```bash
# 1. Клонировать репозиторий
git clone https://github.com/jzhekatroy/quick-booking-connect.git
cd quick-booking-connect/static-site

# 2. Скопировать файлы
sudo mkdir -p /var/www/2minutes.ru
sudo cp -r index.html offer.html privacy-policy.html cookie-policy.html assets/ /var/www/2minutes.ru/

# 3. Установить права
sudo chown -R www-data:www-data /var/www/2minutes.ru
sudo chmod -R 755 /var/www/2minutes.ru
```

## Обновление сайта

Для обновления сайта на сервере просто запустите скрипт развертывания снова:

```bash
sudo bash deploy-server.sh
```

Скрипт автоматически:
- Клонирует последнюю версию из GitHub
- Скопирует файлы в `/var/www/2minutes.ru`
- Установит правильные права доступа
