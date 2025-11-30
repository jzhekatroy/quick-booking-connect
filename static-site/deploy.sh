#!/bin/bash

# Скрипт деплоя статического сайта 2Minutes
# Использование: ./deploy.sh [remote_user@remote_host:/path/to/destination]

set -e  # Остановка при ошибке

# Цвета для вывода
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
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

echo -e "${GREEN}🚀 Начинаем деплой сайта 2Minutes${NC}"
echo -e "${YELLOW}Целевой сервер: ${REMOTE_DEST}${NC}"
echo ""

# Проверка наличия необходимых файлов
echo -e "${YELLOW}Проверка файлов...${NC}"
if [ ! -f "index.html" ]; then
    echo -e "${RED}❌ Ошибка: index.html не найден${NC}"
    exit 1
fi

if [ ! -d "assets" ]; then
    echo -e "${RED}❌ Ошибка: папка assets не найдена${NC}"
    exit 1
fi

echo -e "${GREEN}✓ Все необходимые файлы найдены${NC}"
echo ""

# Список файлов для деплоя
FILES_TO_DEPLOY=(
    "index.html"
    "offer.html"
    "privacy-policy.html"
    "cookie-policy.html"
    "assets/"
)

# Создание временной директории для сборки
TEMP_DIR=$(mktemp -d)
echo -e "${YELLOW}Создание временной директории: ${TEMP_DIR}${NC}"

# Копирование файлов во временную директорию
echo -e "${YELLOW}Копирование файлов...${NC}"
for item in "${FILES_TO_DEPLOY[@]}"; do
    if [ -e "$item" ]; then
        cp -r "$item" "$TEMP_DIR/"
        echo -e "  ✓ $item"
    else
        echo -e "${RED}  ✗ $item не найден${NC}"
    fi
done

echo ""

# Деплой через rsync
echo -e "${YELLOW}Отправка файлов на сервер...${NC}"
rsync -avz --delete \
    --exclude='.git' \
    --exclude='node_modules' \
    --exclude='*.sh' \
    --exclude='package.json' \
    --exclude='README.md' \
    "$TEMP_DIR/" "$REMOTE_DEST/"

if [ $? -eq 0 ]; then
    echo ""
    echo -e "${GREEN}✅ Деплой успешно завершен!${NC}"
    echo -e "${GREEN}Сайт доступен по адресу: https://2minutes.ru${NC}"
else
    echo ""
    echo -e "${RED}❌ Ошибка при деплое${NC}"
    exit 1
fi

# Очистка временной директории
rm -rf "$TEMP_DIR"
echo -e "${YELLOW}Временные файлы удалены${NC}"

