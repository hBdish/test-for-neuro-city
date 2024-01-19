## Скрипты

- `dev` - Запуск сервера nodemon в dev режиме
- `lint` - Запуск линтинга

---

## Используемые технологии:

- Express
- PostgreSQL
- sequelize

---

### Route

[user-controller](./src/controllers/user/user-controller.ts) - Реализовано 3 ручки, по ТЗ:

- __/registration__ - в body прередаем `{email: string, password: string}`, получаем созданного пользователя и __JWT__
  ключи
- __/login__ - в body прередаем `{email: string, password: string}`, получаем пользователя и связку __JWT__ ключей
- __/users__ - Возвращает список всех пользователей

### Контроллеры

- [user-controller](./src/controllers/user/user-controller.ts) - Контроллер для user (авторизация, регистрация и
  получение всех пользователей)

### Сервисы

- [token-service](./src/services/token-service.ts) - Сервис для работы с токенами
- [user-service](./src/services/user-service.ts) - Сервис для работы с токенами

### Middleware

- [error-middleware](./src/common/middlewares/error-middleware.ts) - middleware для обработки ошибок
- [auth-middleware](./src/common/middlewares/auth-middleware.ts) - middleware для проверки авторизации
- [validate-middleware](./src/common/middlewares/validate-middleware.ts) - middleware для валидации
