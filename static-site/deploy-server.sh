#!/bin/bash

# Скрипт для развертывания статического сайта на сервере
# Использование на сервере: bash deploy-server.sh

set -e

# Цвета для вывода
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# Параметры
REPO_URL="https://github.com/jzhekatroy/quick-booking-connect.git"
DEPLOY_DIR="/var/www/2minutes.ru"
TEMP_DIR=$(mktemp -d)
BRANCH="${BRANCH:-main}"

echo -e "${BLUE}╔════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║  🚀 Развертывание статического сайта  ║${NC}"
echo -e "${BLUE}╚════════════════════════════════════════╝${NC}"
echo ""

# Проверка прав
if [ "$EUID" -ne 0 ]; then 
    echo -e "${RED}❌ Скрипт должен быть запущен от root${NC}"
    exit 1
fi

# Создание директории для деплоя (если не существует)
echo -e "${YELLOW}📁 Проверка директории...${NC}"
if [ -d "$DEPLOY_DIR" ]; then
    echo -e "${YELLOW}⚠️  Директория уже существует: $DEPLOY_DIR${NC}"
    echo -e "${YELLOW}   Существующие файлы будут заменены${NC}"
else
    mkdir -p "$DEPLOY_DIR"
    echo -e "${GREEN}✓ Директория создана: $DEPLOY_DIR${NC}"
fi
echo ""

# Клонирование репозитория
echo -e "${YELLOW}📥 Клонирование репозитория...${NC}"
cd "$TEMP_DIR"
git clone --depth 1 --branch "$BRANCH" "$REPO_URL" repo
echo -e "${GREEN}✓ Репозиторий клонирован${NC}"
echo ""

# Проверка наличия статического сайта
if [ ! -d "repo/static-site" ]; then
    echo -e "${RED}❌ Папка static-site не найдена в репозитории${NC}"
    exit 1
fi

# Копирование файлов
echo -e "${YELLOW}📤 Копирование файлов...${NC}"

# Удаляем старую папку dist если существует
if [ -d "$DEPLOY_DIR/dist" ]; then
    echo -e "${YELLOW}  Удаление старой папки dist...${NC}"
    rm -rf "$DEPLOY_DIR/dist"
fi

# Удаляем другие старые файлы React проекта
if [ -d "$DEPLOY_DIR/assets" ] && [ -f "$DEPLOY_DIR/index.html" ] && ! grep -q "2Minutes — Онлайн-запись" "$DEPLOY_DIR/index.html" 2>/dev/null; then
    echo -e "${YELLOW}  Очистка старых файлов React проекта...${NC}"
    find "$DEPLOY_DIR" -maxdepth 1 -type f -name "*.html" -delete
    find "$DEPLOY_DIR" -maxdepth 1 -type f -name "*.js" -delete
    find "$DEPLOY_DIR" -maxdepth 1 -type f -name "*.css" -delete
fi

rsync -av --delete \
    --exclude='.git' \
    --exclude='node_modules' \
    --exclude='*.sh' \
    --exclude='package.json' \
    --exclude='README.md' \
    --exclude='.gitignore' \
    --exclude='SERVER_DEPLOY.md' \
    --exclude='UPDATE.md' \
    --exclude='angie-config.conf' \
    "repo/static-site/" "$DEPLOY_DIR/"

echo -e "${GREEN}✓ Файлы скопированы${NC}"
echo ""

# Обновление конфигурации Angie
echo -e "${YELLOW}⚙️  Обновление конфигурации Angie...${NC}"
if [ -f "repo/static-site/angie-config.conf" ]; then
    ANGIE_CONFIG="/etc/angie/http.d/2minutes.ru.conf"
    if [ -f "$ANGIE_CONFIG" ]; then
        cp "repo/static-site/angie-config.conf" "$ANGIE_CONFIG"
        echo -e "${GREEN}✓ Конфигурация Angie обновлена${NC}"
        echo -e "${YELLOW}  Не забудьте перезагрузить Angie: sudo systemctl reload angie${NC}"
    else
        echo -e "${YELLOW}⚠️  Конфигурация Angie не найдена: $ANGIE_CONFIG${NC}"
        echo -e "${YELLOW}  Скопируйте angie-config.conf вручную${NC}"
    fi
else
    echo -e "${YELLOW}⚠️  Файл конфигурации angie-config.conf не найден${NC}"
fi
echo ""

# Установка прав
echo -e "${YELLOW}🔐 Установка прав доступа...${NC}"
chown -R www-data:www-data "$DEPLOY_DIR" 2>/dev/null || chown -R nginx:nginx "$DEPLOY_DIR" 2>/dev/null || true
chmod -R 755 "$DEPLOY_DIR"
echo -e "${GREEN}✓ Права установлены${NC}"
echo ""

# Очистка
rm -rf "$TEMP_DIR"

echo -e "${GREEN}╔════════════════════════════════════════╗${NC}"
echo -e "${GREEN}║  ✅ Развертывание завершено!           ║${NC}"
echo -e "${GREEN}╚════════════════════════════════════════╝${NC}"
echo ""
echo -e "${GREEN}🌐 Сайт доступен по адресу: https://2minutes.ru${NC}"
echo ""

