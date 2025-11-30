# 🔄 Обновление сайта на сервере

## Быстрый способ (одна команда)

На сервере выполните:

```bash
curl -sSL https://raw.githubusercontent.com/jzhekatroy/quick-booking-connect/main/static-site/update-server.sh | sudo bash
```

## Ручной способ

### 1. Подключитесь к серверу

```bash
ssh root@2minutes.ru
```

### 2. Перейдите в директорию сайта

```bash
cd /var/www/2minutes.ru
```

### 3. Скачайте и запустите скрипт обновления

```bash
# Скачать скрипт
curl -O https://raw.githubusercontent.com/jzhekatroy/quick-booking-connect/main/static-site/update-server.sh

# Сделать исполняемым
chmod +x update-server.sh

# Запустить
sudo ./update-server.sh
```

Или используйте полный скрипт развертывания:

```bash
cd /tmp
git clone https://github.com/jzhekatroy/quick-booking-connect.git
cd quick-booking-connect/static-site
sudo bash update-server.sh
```

## Что делает скрипт

1. ✅ Создает резервную копию текущих файлов
2. ✅ Клонирует последнюю версию из GitHub
3. ✅ Обновляет файлы в `/var/www/2minutes.ru`
4. ✅ Удаляет старую папку `dist` (если есть)
5. ✅ Устанавливает правильные права доступа
6. ✅ Проверяет и обновляет конфигурацию Angie (если нужно)

## После обновления

Если скрипт обновил конфигурацию Angie, перезагрузите веб-сервер:

```bash
# Проверка конфигурации
sudo angie -t

# Перезагрузка
sudo systemctl reload angie
```

## Проверка обновления

После обновления проверьте:

1. **Главная страница**: https://2minutes.ru/
2. **Оферта**: https://2minutes.ru/offer.html
3. **Политика конфиденциальности**: https://2minutes.ru/privacy-policy.html
4. **Cookie**: https://2minutes.ru/cookie-policy.html

## Резервные копии

Скрипт автоматически создает резервные копии в:
```
/var/www/2minutes.ru.backup.YYYYMMDD_HHMMSS
```

Для восстановления из резервной копии:

```bash
# Найти последнюю резервную копию
ls -lt /var/www/2minutes.ru.backup.* | head -1

# Восстановить (замените на актуальную дату)
sudo cp -r /var/www/2minutes.ru.backup.20241130_120000/* /var/www/2minutes.ru/
```

## Автоматическое обновление (cron)

Для автоматического обновления каждый день в 3:00 ночи:

```bash
# Добавить в crontab
sudo crontab -e

# Добавить строку:
0 3 * * * curl -sSL https://raw.githubusercontent.com/jzhekatroy/quick-booking-connect/main/static-site/update-server.sh | bash
```

