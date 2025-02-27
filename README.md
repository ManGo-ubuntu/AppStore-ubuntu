# Ubuntu App Store

Современный магазин приложений для Ubuntu с поддержкой Flatpak и Snap пакетов. Приложение предоставляет удобный интерфейс для поиска, установки и управления приложениями в Ubuntu.

## Особенности

- 🎨 Современный и интуитивно понятный интерфейс
- 📦 Поддержка Flatpak и Snap пакетов
- 🔍 Удобный поиск приложений
- 🏷️ Категории приложений
- ⭐ Рекомендуемые приложения
- 🔄 Управление обновлениями

## Требования

- Ubuntu 20.04 или новее
- Node.js 14 или новее
- npm 6 или новее
- Flatpak
- Snap

## Установка зависимостей

```bash
# Установка Flatpak
sudo apt install flatpak
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo

# Установка Snap (обычно уже установлен в Ubuntu)
sudo apt install snapd

# Установка зависимостей Node.js
npm install
```

## Разработка

```bash
# Запуск в режиме разработки
npm run electron-dev
```

## Сборка

```bash
# Сборка приложения
npm run build

# Создание установочного пакета
npm run dist
```

## Установка

После сборки установочный пакет можно найти в папке `dist`. Установите его с помощью:

```bash
sudo dpkg -i dist/ubuntu-app-store_*.deb
```

## Лицензия

MIT 