#!/bin/bash
# Однострочный скрипт для развертывания на сервере
# Использование: curl -sSL https://raw.githubusercontent.com/jzhekatroy/quick-booking-connect/main/static-site/deploy-server.sh | sudo bash

set -e

REPO_URL="https://github.com/jzhekatroy/quick-booking-connect.git"
DEPLOY_DIR="/var/www/2minutes.ru"
TEMP_DIR=$(mktemp -d)

echo "🚀 Развертывание статического сайта 2Minutes..."

# Клонирование и копирование
cd "$TEMP_DIR"
git clone --depth 1 "$REPO_URL" repo 2>/dev/null || { echo "❌ Ошибка клонирования"; exit 1; }

mkdir -p "$DEPLOY_DIR"
rsync -av --delete --exclude='.git' --exclude='node_modules' --exclude='*.sh' --exclude='package.json' --exclude='README.md' "repo/static-site/" "$DEPLOY_DIR/"

# Права доступа
chown -R www-data:www-data "$DEPLOY_DIR" 2>/dev/null || chown -R nginx:nginx "$DEPLOY_DIR" 2>/dev/null || true
chmod -R 755 "$DEPLOY_DIR"

rm -rf "$TEMP_DIR"

echo "✅ Развертывание завершено! Сайт доступен: https://2minutes.ru"

