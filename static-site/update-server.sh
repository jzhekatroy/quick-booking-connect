#!/bin/bash

# Скрипт для обновления статического сайта на сервере
# Выполняется на сервере в директории /var/www/2minutes.ru/

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
echo -e "${BLUE}║  🔄 Обновление статического сайта     ║${NC}"
echo -e "${BLUE}╚════════════════════════════════════════╝${NC}"
echo ""

# Проверка прав
if [ "$EUID" -ne 0 ]; then 
    echo -e "${RED}❌ Скрипт должен быть запущен от root${NC}"
    exit 1
fi

# Проверка существования директории
if [ ! -d "$DEPLOY_DIR" ]; then
    echo -e "${RED}❌ Директория $DEPLOY_DIR не найдена${NC}"
    exit 1
fi

echo -e "${YELLOW}📁 Текущая директория: $DEPLOY_DIR${NC}"
echo ""

# Клонирование репозитория
echo -e "${YELLOW}📥 Загрузка последней версии из GitHub...${NC}"
cd "$TEMP_DIR"
git clone --depth 1 --branch "$BRANCH" "$REPO_URL" repo 2>&1 | grep -v "^Cloning" || true
echo -e "${GREEN}✓ Репозиторий загружен${NC}"
echo ""

# Проверка наличия статического сайта
if [ ! -d "repo/static-site" ]; then
    echo -e "${RED}❌ Папка static-site не найдена в репозитории${NC}"
    exit 1
fi

# Резервная копия текущих файлов
echo -e "${YELLOW}💾 Создание резервной копии...${NC}"
BACKUP_DIR="/var/www/2minutes.ru.backup.$(date +%Y%m%d_%H%M%S)"
if [ -d "$DEPLOY_DIR" ] && [ "$(ls -A $DEPLOY_DIR 2>/dev/null)" ]; then
    cp -r "$DEPLOY_DIR" "$BACKUP_DIR" 2>/dev/null || true
    echo -e "${GREEN}✓ Резервная копия создана: $BACKUP_DIR${NC}"
else
    echo -e "${YELLOW}⚠️  Директория пуста, резервная копия не создана${NC}"
fi
echo ""

# Копирование файлов
echo -e "${YELLOW}📤 Обновление файлов...${NC}"

# Удаляем старую папку dist если существует
if [ -d "$DEPLOY_DIR/dist" ]; then
    echo -e "${YELLOW}  Удаление старой папки dist...${NC}"
    rm -rf "$DEPLOY_DIR/dist"
fi

rsync -av --delete \
    --exclude='.git' \
    --exclude='node_modules' \
    --exclude='*.sh' \
    --exclude='package.json' \
    --exclude='README.md' \
    --exclude='.gitignore' \
    --exclude='SERVER_DEPLOY.md' \
    --exclude='angie-config.conf' \
    "repo/static-site/" "$DEPLOY_DIR/"

echo -e "${GREEN}✓ Файлы обновлены${NC}"
echo ""

# Установка прав
echo -e "${YELLOW}🔐 Установка прав доступа...${NC}"
chown -R www-data:www-data "$DEPLOY_DIR" 2>/dev/null || chown -R nginx:nginx "$DEPLOY_DIR" 2>/dev/null || true
chmod -R 755 "$DEPLOY_DIR"
echo -e "${GREEN}✓ Права установлены${NC}"
echo ""

# Обновление конфигурации Angie
echo -e "${YELLOW}⚙️  Проверка конфигурации Angie...${NC}"
ANGIE_CONFIG="/etc/angie/http.d/2minutes.ru.conf"
if [ -f "repo/static-site/angie-config.conf" ] && [ -f "$ANGIE_CONFIG" ]; then
    # Проверяем, нужно ли обновлять конфигурацию
    if ! diff -q "repo/static-site/angie-config.conf" "$ANGIE_CONFIG" > /dev/null 2>&1; then
        cp "repo/static-site/angie-config.conf" "$ANGIE_CONFIG"
        echo -e "${GREEN}✓ Конфигурация Angie обновлена${NC}"
        echo -e "${YELLOW}  Не забудьте перезагрузить Angie: sudo systemctl reload angie${NC}"
    else
        echo -e "${GREEN}✓ Конфигурация Angie актуальна${NC}"
    fi
else
    echo -e "${YELLOW}⚠️  Конфигурация Angie не найдена или не требует обновления${NC}"
fi
echo ""

# Очистка
rm -rf "$TEMP_DIR"

echo -e "${GREEN}╔════════════════════════════════════════╗${NC}"
echo -e "${GREEN}║  ✅ Обновление завершено!             ║${NC}"
echo -e "${GREEN}╚════════════════════════════════════════╝${NC}"
echo ""
echo -e "${GREEN}🌐 Сайт доступен по адресу: https://2minutes.ru${NC}"
echo ""
echo -e "${YELLOW}💡 Следующие шаги:${NC}"
echo -e "   1. Проверьте сайт: https://2minutes.ru"
echo -e "   2. Если обновлялась конфигурация Angie, выполните:"
echo -e "      sudo angie -t && sudo systemctl reload angie"
echo ""

