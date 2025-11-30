#!/bin/bash

# Скрипт деплоя проекта quick-booking-connect на сервер
# Использование: ./deploy.sh [remote_user@remote_host:/path/to/destination]

set -e  # Остановка при ошибке

# Цвета для вывода
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Параметры по умолчанию
REMOTE_USER="${REMOTE_USER:-root}"
REMOTE_HOST="${REMOTE_HOST:-2minutes.ru}"
REMOTE_PATH="${REMOTE_PATH:-/var/www/2minutes.ru}"

# Если передан аргумент, используем его
if [ -n "$1" ]; then
    REMOTE_DEST="$1"
else
    REMOTE_DEST="${REMOTE_USER}@${REMOTE_HOST}:${REMOTE_PATH}"
fi

echo -e "${BLUE}╔════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║  🚀 Деплой quick-booking-connect     ║${NC}"
echo -e "${BLUE}╚════════════════════════════════════════╝${NC}"
echo ""
echo -e "${YELLOW}Целевой сервер: ${REMOTE_DEST}${NC}"
echo ""

# Проверка наличия необходимых файлов
echo -e "${YELLOW}📋 Проверка проекта...${NC}"
if [ ! -f "package.json" ]; then
    echo -e "${RED}❌ Ошибка: package.json не найден${NC}"
    exit 1
fi

if [ ! -f "vite.config.ts" ]; then
    echo -e "${RED}❌ Ошибка: vite.config.ts не найден${NC}"
    exit 1
fi

echo -e "${GREEN}✓ Проект найден${NC}"
echo ""

# Проверка git статуса
echo -e "${YELLOW}📦 Проверка git статуса...${NC}"
if [ -d ".git" ]; then
    git fetch origin 2>/dev/null || true
    LOCAL=$(git rev-parse @)
    REMOTE=$(git rev-parse @{u} 2>/dev/null || echo "")
    
    if [ -n "$REMOTE" ] && [ "$LOCAL" != "$REMOTE" ]; then
        echo -e "${YELLOW}⚠️  Есть изменения в удаленном репозитории${NC}"
        read -p "Обновить локальный репозиторий? (y/n) " -n 1 -r
        echo
        if [[ $REPLY =~ ^[Yy]$ ]]; then
            git pull origin main
        fi
    else
        echo -e "${GREEN}✓ Репозиторий актуален${NC}"
    fi
fi
echo ""

# Установка зависимостей
echo -e "${YELLOW}📥 Установка зависимостей...${NC}"
if [ ! -d "node_modules" ]; then
    echo -e "${YELLOW}  Установка npm пакетов...${NC}"
    npm install
else
    echo -e "${YELLOW}  Обновление npm пакетов...${NC}"
    npm install
fi
echo -e "${GREEN}✓ Зависимости установлены${NC}"
echo ""

# Сборка проекта
echo -e "${YELLOW}🔨 Сборка проекта...${NC}"
npm run build

if [ ! -d "dist" ]; then
    echo -e "${RED}❌ Ошибка: папка dist не создана после сборки${NC}"
    exit 1
fi

if [ ! -f "dist/index.html" ]; then
    echo -e "${RED}❌ Ошибка: dist/index.html не найден${NC}"
    exit 1
fi

echo -e "${GREEN}✓ Проект собран успешно${NC}"
echo ""

# Проверка размера dist
DIST_SIZE=$(du -sh dist | cut -f1)
echo -e "${BLUE}📊 Размер собранного проекта: ${DIST_SIZE}${NC}"
echo ""

# Деплой через rsync
echo -e "${YELLOW}📤 Отправка файлов на сервер...${NC}"
rsync -avz --delete \
    --exclude='.git' \
    --exclude='node_modules' \
    --exclude='src' \
    --exclude='*.sh' \
    --exclude='package.json' \
    --exclude='package-lock.json' \
    --exclude='bun.lockb' \
    --exclude='tsconfig*.json' \
    --exclude='vite.config.ts' \
    --exclude='tailwind.config.ts' \
    --exclude='postcss.config.js' \
    --exclude='eslint.config.js' \
    --exclude='components.json' \
    --exclude='README.md' \
    --exclude='.gitignore' \
    --exclude='2Minutes 4' \
    --progress \
    "dist/" "$REMOTE_DEST/"

if [ $? -eq 0 ]; then
    echo ""
    echo -e "${GREEN}╔════════════════════════════════════════╗${NC}"
    echo -e "${GREEN}║  ✅ Деплой успешно завершен!          ║${NC}"
    echo -e "${GREEN}╚════════════════════════════════════════╝${NC}"
    echo ""
    echo -e "${GREEN}🌐 Сайт доступен по адресу: https://2minutes.ru${NC}"
    echo ""
    echo -e "${YELLOW}💡 Не забудьте проверить:${NC}"
    echo -e "   • https://2minutes.ru/"
    echo -e "   • https://2minutes.ru/offer"
    echo -e "   • https://2minutes.ru/privacy-policy"
    echo -e "   • https://2minutes.ru/cookie-policy"
    echo ""
else
    echo ""
    echo -e "${RED}╔════════════════════════════════════════╗${NC}"
    echo -e "${RED}║  ❌ Ошибка при деплое                   ║${NC}"
    echo -e "${RED}╚════════════════════════════════════════╝${NC}"
    exit 1
fi

