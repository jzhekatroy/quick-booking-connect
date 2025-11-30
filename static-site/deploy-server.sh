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

# Создание директории для деплоя
echo -e "${YELLOW}📁 Создание директории...${NC}"
mkdir -p "$DEPLOY_DIR"
echo -e "${GREEN}✓ Директория создана: $DEPLOY_DIR${NC}"
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
rsync -av --delete \
    --exclude='.git' \
    --exclude='node_modules' \
    --exclude='*.sh' \
    --exclude='package.json' \
    --exclude='README.md' \
    --exclude='.gitignore' \
    "repo/static-site/" "$DEPLOY_DIR/"

echo -e "${GREEN}✓ Файлы скопированы${NC}"
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

