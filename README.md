# Тестовое задание для NeuroCity

---

## Порядок запуска всего проекта в dev режиме из корневой папки

> .env файл залью в гит целенаправленно, по желанию можно задать свои значения, так же на фронте не стал менять хост,
> запускается по умолчанию на __5173__

#### 1 консоль

- `docker-compose up` - Создание докер контейнера

#### 2 консоль

- `cd back && npm ci` - Установка зависимостей из *.lock
- `npm run dev` - Запуск сервера nodemon для dev режима

#### 3 консоль

- `cd front && npm ci` - Установка зависимостей из *.lock
- `npm run dev` - Запуск приложения в dev режиме

---

### Database

> База данных запускается в Docker

- `docker-compose up` - Поднятие базы данных

### Frontend

> Frontend часть приложения находится в папке **front**

---

### Backend

> Backend часть приложения находится в папке **back**



